import { connection } from "../database/db.js";

async function ranking_users(req, res) {
  try {
    const ranking = (
      await connection.query(
        `
        SELECT users.id,
            users.name,
            COUNT (DISTINCT urls.id) AS links_count,
            COUNT (visits.id) AS visit_count
        FROM users
        LEFT JOIN urls
            ON urls.user_id = users.id
        LEFT JOIN visits
            ON visits.url_id = urls.id
        GROUP BY users.id
        ORDER BY visit_count desc, links_count desc
        LIMIT 10
        `
      )
    ).rows;

    res.send(ranking);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export { ranking_users };
