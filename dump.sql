--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    token character varying(500) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    user_id integer NOT NULL,
    url text NOT NULL,
    short_url character varying(500) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: visits; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.visits (
    id integer NOT NULL,
    url_id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: visits_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.visits_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: visits_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.visits_id_seq OWNED BY public.visits.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: visits id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits ALTER COLUMN id SET DEFAULT nextval('public.visits_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 1, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NjU5NTA4ODR9.NVfs5N40x9I59EcGhzw6unxSS_LCqYpN3zWl4FtdevA', '2022-10-16 17:08:04.393546');
INSERT INTO public.sessions VALUES (2, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NjU5NTA4ODh9.GkCR-tfkIKeApWhOZQV04PVfIr5SHn1B5w2y5eoJTts', '2022-10-16 17:08:08.454988');
INSERT INTO public.sessions VALUES (3, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjU5NTA4OTJ9.zE08Eddcq-yj_lGkd4iX6jM6oo789VHMlncEUR8ICAY', '2022-10-16 17:08:12.586072');
INSERT INTO public.sessions VALUES (4, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjU5NTI1NTV9.FAWiDzajyFbYRnfM1xIaUQ66JCbsX07HODTNhU876hQ', '2022-10-16 17:35:55.719642');
INSERT INTO public.sessions VALUES (5, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJpYXQiOjE2NjU5NTI5ODB9.fF06rG5o1LGHEIr9g_0RvhkfNjjUNpWlFYfvpfbT1BA', '2022-10-16 17:43:00.577328');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (25, 1, 'https://bootcampra.notion.site/Projeto-Shortly-API-21533489cd5042058524caf3429b62e4', 'LLB8iK5u', '2022-10-16 17:18:45.982859');
INSERT INTO public.urls VALUES (26, 1, 'https://www.figma.com/file/DWg9233KR2GS6RLvfZRwyd/Shortly?node-id=0%3A1', 'YtRgt32O', '2022-10-16 17:19:03.70979');
INSERT INTO public.urls VALUES (27, 2, 'https://www.figma.com/file/DWg9233KR2GS6RLvfZRwyd/Shortly?node-id=0%3A1', 'l-XcMu7l', '2022-10-16 17:19:13.336351');
INSERT INTO public.urls VALUES (28, 2, 'https://app.dbdesigner.net/designer/schema/566178', 'Eq3JkS0l', '2022-10-16 17:19:26.981341');
INSERT INTO public.urls VALUES (29, 2, 'https://bootcampra.notion.site/Pr-tica-Exerc-cios-Group-By-a9a309114f8b4f60afc1076502446b58', 'PpKhO1-M', '2022-10-16 17:19:32.655653');
INSERT INTO public.urls VALUES (30, 3, 'https://app.slack.com/client/T03F7SF8UP4/D03QP5PJH1Q/thread/C03F7UUMLP4-1664927855.841179', 'ChxyRbpS', '2022-10-16 17:19:50.886397');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'teste1', 'teste1@teste.com', '$2b$08$3dPyzJ.UlxbhMfxY2BB3pe90z/KGrRUKmsvbLhK5moBQxCRoE7C/m', '2022-10-16 17:07:34.500637');
INSERT INTO public.users VALUES (2, 'teste2', 'teste2@teste.com', '$2b$08$NllzOAGbRKxqWIayTrOSz.EmyvXIesfTEruhKFNyXJfNbMQC2dUH.', '2022-10-16 17:07:40.804053');
INSERT INTO public.users VALUES (3, 'teste3', 'teste3@teste.com', '$2b$08$bkXOb9bWqGSxqjaLg4JxOeVW91HkRRGab.cdCd1Md7mjLFpWgF.IG', '2022-10-16 17:07:45.443332');
INSERT INTO public.users VALUES (4, 'teste4', 'teste4@teste.com', '$2b$08$oh9ckjEtdlnPS/YOPYPMyeXu44TnIgq8qa7cr4FWNb5jQvtPKR7UW', '2022-10-16 17:07:49.873453');


--
-- Data for Name: visits; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.visits VALUES (1, 25, '2022-10-16 17:39:30.459577');
INSERT INTO public.visits VALUES (2, 25, '2022-10-16 17:39:34.497917');
INSERT INTO public.visits VALUES (3, 25, '2022-10-16 17:39:36.243141');
INSERT INTO public.visits VALUES (4, 26, '2022-10-16 17:39:43.124593');
INSERT INTO public.visits VALUES (5, 26, '2022-10-16 17:39:43.882845');
INSERT INTO public.visits VALUES (6, 26, '2022-10-16 17:39:46.697909');
INSERT INTO public.visits VALUES (7, 27, '2022-10-16 17:39:55.387049');
INSERT INTO public.visits VALUES (8, 27, '2022-10-16 17:39:58.008191');
INSERT INTO public.visits VALUES (9, 27, '2022-10-16 17:39:59.14584');
INSERT INTO public.visits VALUES (10, 27, '2022-10-16 17:40:00.244234');
INSERT INTO public.visits VALUES (11, 27, '2022-10-16 17:40:01.037657');
INSERT INTO public.visits VALUES (12, 28, '2022-10-16 17:40:11.138719');
INSERT INTO public.visits VALUES (13, 28, '2022-10-16 17:40:13.251368');
INSERT INTO public.visits VALUES (14, 29, '2022-10-16 17:40:21.288958');
INSERT INTO public.visits VALUES (15, 30, '2022-10-16 17:40:31.380091');
INSERT INTO public.visits VALUES (16, 30, '2022-10-16 17:40:32.558039');
INSERT INTO public.visits VALUES (17, 30, '2022-10-16 17:40:33.577507');
INSERT INTO public.visits VALUES (18, 30, '2022-10-16 17:40:34.638138');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 5, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 30, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: visits_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.visits_id_seq', 18, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_short_url_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_short_url_key UNIQUE (short_url);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: visits visits_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: urls urls_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: visits visits_url_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.visits
    ADD CONSTRAINT visits_url_id_fkey FOREIGN KEY (url_id) REFERENCES public.urls(id);


--
-- PostgreSQL database dump complete
--

