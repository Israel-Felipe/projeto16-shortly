import { connection } from "../database/db.js";

async function urls_of_user(req, res) {
  const { user } = res.locals;
  const id = user.user_id;

  try {
    const user = (
      await connection.query(
        `
        SELECT users.id,
            users.name,
            COUNT(visits.id) AS visit_count
        FROM users
        JOIN urls
            ON urls.user_id = users.id
        JOIN visits
            ON visits.url_id = urls.id
        WHERE users.id = $1
        GROUP BY users.id
        `,
        [id]
      )
    ).rows[0];

    if (!user) {
      res.sendStatus(404);
      return;
    }

    const urls = (
      await connection.query(
        `
        SELECT urls.id,
            urls.short_url,
            urls.url,
            COUNT(visits.id) as visit_count
        FROM urls
        JOIN visits
            ON visits.url_id = urls.id
        WHERE urls.user_id = $1
        GROUP BY urls.id
        `,
        [id]
      )
    ).rows;

    const query = {
      id: user.id,
      name: user.name,
      visit_count: user.visit_count,
      shortenedUrls: urls,
    };
    res.send(query);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { urls_of_user };
