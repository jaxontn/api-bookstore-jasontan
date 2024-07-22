--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12 (Debian 14.12-1.pgdg120+1)
-- Dumped by pg_dump version 14.12 (Debian 14.12-1.pgdg120+1)

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
-- Name: Book; Type: TABLE; Schema: public; Owner: prisma
--

---CREATE TABLE public."Book" (
---    id integer NOT NULL,
---    title text NOT NULL,
---    author text NOT NULL,
---    "publishedDate" timestamp(3) without time zone NOT NULL,
---    isbn text NOT NULL,
---    price double precision NOT NULL,
---    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
---    "updatedAt" timestamp(3) without time zone NOT NULL
---);


ALTER TABLE public."Book" OWNER TO prisma;

--
-- Name: BookDetail; Type: TABLE; Schema: public; Owner: prisma
--

---CREATE TABLE public."BookDetail" (
---    id integer NOT NULL,
---    "bookId" integer NOT NULL,
---    summary text NOT NULL,
---    "pageCount" integer NOT NULL,
---    genre text NOT NULL,
---    language text NOT NULL,
---    publisher text NOT NULL,
---    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
---    "updatedAt" timestamp(3) without time zone NOT NULL
---);


ALTER TABLE public."BookDetail" OWNER TO prisma;

--
-- Name: BookDetail_id_seq; Type: SEQUENCE; Schema: public; Owner: prisma
--

CREATE SEQUENCE public."BookDetail_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."BookDetail_id_seq" OWNER TO prisma;

--
-- Name: BookDetail_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: prisma
--

ALTER SEQUENCE public."BookDetail_id_seq" OWNED BY public."BookDetail".id;


--
-- Name: Book_id_seq; Type: SEQUENCE; Schema: public; Owner: prisma
--

CREATE SEQUENCE public."Book_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Book_id_seq" OWNER TO prisma;

--
-- Name: Book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: prisma
--

ALTER SEQUENCE public."Book_id_seq" OWNED BY public."Book".id;


--
-- Name: Order; Type: TABLE; Schema: public; Owner: prisma
--

---CREATE TABLE public."Order" (
---    id integer NOT NULL,
---    "userId" integer NOT NULL,
---    status text NOT NULL,
---    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
---    "updatedAt" timestamp(3) without time zone NOT NULL
---);


ALTER TABLE public."Order" OWNER TO prisma;

--
-- Name: OrderItem; Type: TABLE; Schema: public; Owner: prisma
--

---CREATE TABLE public."OrderItem" (
---    id integer NOT NULL,
---    "orderId" integer NOT NULL,
---    "bookId" integer NOT NULL,
---    quantity integer NOT NULL,
---    "totalPrice" double precision NOT NULL,
---    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
---    "updatedAt" timestamp(3) without time zone NOT NULL
---);


ALTER TABLE public."OrderItem" OWNER TO prisma;

--
-- Name: OrderItem_id_seq; Type: SEQUENCE; Schema: public; Owner: prisma
--

CREATE SEQUENCE public."OrderItem_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."OrderItem_id_seq" OWNER TO prisma;

--
-- Name: OrderItem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: prisma
--

ALTER SEQUENCE public."OrderItem_id_seq" OWNED BY public."OrderItem".id;


--
-- Name: Order_id_seq; Type: SEQUENCE; Schema: public; Owner: prisma
--

CREATE SEQUENCE public."Order_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Order_id_seq" OWNER TO prisma;

--
-- Name: Order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: prisma
--

ALTER SEQUENCE public."Order_id_seq" OWNED BY public."Order".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: prisma
--

---CREATE TABLE public."User" (
---    id integer NOT NULL,
---    name text NOT NULL,
---    email text NOT NULL,
---    password text NOT NULL,
---    "isAdmin" boolean DEFAULT false NOT NULL,
---    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
---    "updatedAt" timestamp(3) without time zone NOT NULL
---);


ALTER TABLE public."User" OWNER TO prisma;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: prisma
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."User_id_seq" OWNER TO prisma;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: prisma
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: prisma
--

---CREATE TABLE public._prisma_migrations (
---    id character varying(36) NOT NULL,
---    checksum character varying(64) NOT NULL,
---    finished_at timestamp with time zone,
---    migration_name character varying(255) NOT NULL,
---    logs text,
---    rolled_back_at timestamp with time zone,
---    started_at timestamp with time zone DEFAULT now() NOT NULL,
---    applied_steps_count integer DEFAULT 0 NOT NULL
---);


ALTER TABLE public._prisma_migrations OWNER TO prisma;

--
-- Name: Book id; Type: DEFAULT; Schema: public; Owner: prisma
--

ALTER TABLE ONLY public."Book" ALTER COLUMN id SET DEFAULT nextval('public."Book_id_seq"'::regclass);


--
-- Name: BookDetail id; Type: DEFAULT; Schema: public; Owner: prisma
--

ALTER TABLE ONLY public."BookDetail" ALTER COLUMN id SET DEFAULT nextval('public."BookDetail_id_seq"'::regclass);


--
-- Name: Order id; Type: DEFAULT; Schema: public; Owner: prisma
--

ALTER TABLE ONLY public."Order" ALTER COLUMN id SET DEFAULT nextval('public."Order_id_seq"'::regclass);


--
-- Name: OrderItem id; Type: DEFAULT; Schema: public; Owner: prisma
--

ALTER TABLE ONLY public."OrderItem" ALTER COLUMN id SET DEFAULT nextval('public."OrderItem_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: prisma
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Book; Type: TABLE DATA; Schema: public; Owner: prisma
--

COPY public."Book" (id, title, author, "publishedDate", isbn, price, "createdAt", "updatedAt") FROM stdin;
1	Atomic Habits	James Clear	2023-07-20 00:00:00	111-5627890123	49.99	2024-07-22 15:08:25.757	2024-07-22 15:08:25.757
2	Deep Work	Cal Newport	2023-05-14 00:00:00	222-5627890123	39.99	2024-07-22 15:13:21.901	2024-07-22 15:13:21.901
3	The Power of Habit	Charles Duhigg	2023-08-16 00:00:00	333-5627890123	45	2024-07-22 15:14:14.249	2024-07-22 15:14:14.249
4	Getting Things Done	David Allen	2023-04-10 00:00:00	444-5627890123	42.5	2024-07-22 15:14:47.516	2024-07-22 15:14:47.516
5	Essentialism	Greg McKeown	2023-06-21 00:00:00	555-5627890123	47.25	2024-07-22 15:15:02.545	2024-07-22 15:15:02.545
6	Make Time	Jake Knapp & John Zeratsky	2023-02-19 00:00:00	666-5627890123	38	2024-07-22 15:15:18.403	2024-07-22 15:15:18.403
7	The 4-Hour Workweek	Tim Ferriss	2023-09-10 00:00:00	777-5627890123	55	2024-07-22 15:15:33.445	2024-07-22 15:15:33.445
8	The One Thing	Gary Keller & Jay Papasan	2023-03-25 00:00:00	888-5627890123	41.75	2024-07-22 15:15:58.681	2024-07-22 15:15:58.681
9	Smarter Faster Better	Charles Duhigg	2023-11-12 00:00:00	999-5627890123	50	2024-07-22 15:16:14.717	2024-07-22 15:16:14.717
10	Drive	Daniel H. Pink	2023-01-15 00:00:00	000-5627890123	48	2024-07-22 15:16:30.715	2024-07-22 15:21:44.374
\.


--
-- Data for Name: BookDetail; Type: TABLE DATA; Schema: public; Owner: prisma
--

COPY public."BookDetail" (id, "bookId", summary, "pageCount", genre, language, publisher, "createdAt", "updatedAt") FROM stdin;
2	2	This book explores the benefits of deep, focused work.	296	Non-Fiction	ENGLISH	Grand Central Publishing	2024-07-22 15:13:21.917	2024-07-22 15:13:21.917
4	4	A guide to achieving stress-free productivity.	352	Non-Fiction	ENGLISH	Penguin Books	2024-07-22 15:14:47.597	2024-07-22 15:14:47.597
5	5	A book on the disciplined pursuit of less.	260	Non-Fiction	ENGLISH	Crown Business	2024-07-22 15:15:02.562	2024-07-22 15:15:02.562
6	6	A strategy to focus on what matters every day.	304	Non-Fiction	ENGLISH	Currency	2024-07-22 15:15:18.41	2024-07-22 15:15:18.41
7	7	Escape the 9-5, live anywhere, and join the new rich.	416	Non-Fiction	ENGLISH	Harmony	2024-07-22 15:15:33.479	2024-07-22 15:15:33.479
8	8	A book about achieving extraordinary results.	240	Non-Fiction	ENGLISH	Bard Press	2024-07-22 15:15:58.688	2024-07-22 15:15:58.688
9	9	The secrets of being productive in life and business.	400	Non-Fiction	ENGLISH	Random House	2024-07-22 15:16:14.726	2024-07-22 15:16:14.726
10	10	The surprising truth about what motivates us.	272	Non-Fiction	ENGLISH	Riverhead Books	2024-07-22 15:16:30.752	2024-07-22 15:16:30.752
1	1	This is a Productivity book.	350	Non-Fiction	ENGLISH	Penguin Academy	2024-07-22 15:08:25.785	2024-07-22 15:25:18.385
3	3	An exploration of the science behind habit formation.	371	Non-Fiction	ENGLISH	Random House	2024-07-22 15:14:14.262	2024-07-22 15:29:25.043
\.


--
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: prisma
--

COPY public."Order" (id, "userId", status, "createdAt", "updatedAt") FROM stdin;
1	1	Paid	2024-07-22 15:35:30.337	2024-07-22 15:35:30.337
2	2	Paid	2024-07-22 15:37:13.173	2024-07-22 15:37:13.173
3	3	Paid	2024-07-22 15:38:08.249	2024-07-22 15:38:08.249
5	4	Paid	2024-07-22 15:39:42.717	2024-07-22 15:39:42.717
6	5	Paid	2024-07-22 15:41:27.016	2024-07-22 15:41:27.016
7	6	Paid	2024-07-22 15:41:34.953	2024-07-22 15:41:34.953
8	1	Paid	2024-07-22 15:41:43.441	2024-07-22 15:41:43.441
9	8	Paid	2024-07-22 15:42:42.579	2024-07-22 15:42:42.579
11	1	Paid	2024-07-22 15:43:58.404	2024-07-22 15:43:58.404
10	2	Pending	2024-07-22 15:43:15.677	2024-07-22 15:47:00.663
\.


--
-- Data for Name: OrderItem; Type: TABLE DATA; Schema: public; Owner: prisma
--

COPY public."OrderItem" (id, "orderId", "bookId", quantity, "totalPrice", "createdAt", "updatedAt") FROM stdin;
1	1	7	2	110	2024-07-22 15:35:30.396	2024-07-22 15:35:30.396
2	1	8	5	208.75	2024-07-22 15:35:30.396	2024-07-22 15:35:30.396
3	1	3	1	45	2024-07-22 15:35:30.396	2024-07-22 15:35:30.396
4	2	1	2	99.98	2024-07-22 15:37:13.199	2024-07-22 15:37:13.199
5	2	2	5	199.95	2024-07-22 15:37:13.199	2024-07-22 15:37:13.199
6	2	3	1	45	2024-07-22 15:37:13.199	2024-07-22 15:37:13.199
7	3	1	2	99.98	2024-07-22 15:38:08.279	2024-07-22 15:38:08.279
8	3	2	5	199.95	2024-07-22 15:38:08.279	2024-07-22 15:38:08.279
9	3	3	1	45	2024-07-22 15:38:08.279	2024-07-22 15:38:08.279
10	5	10	2	96	2024-07-22 15:39:42.736	2024-07-22 15:39:42.736
11	5	6	5	190	2024-07-22 15:39:42.736	2024-07-22 15:39:42.736
12	5	5	1	47.25	2024-07-22 15:39:42.736	2024-07-22 15:39:42.736
13	6	10	2	96	2024-07-22 15:41:27.037	2024-07-22 15:41:27.037
14	6	6	5	190	2024-07-22 15:41:27.037	2024-07-22 15:41:27.037
15	6	5	1	47.25	2024-07-22 15:41:27.037	2024-07-22 15:41:27.037
16	7	10	2	96	2024-07-22 15:41:34.975	2024-07-22 15:41:34.975
17	7	6	5	190	2024-07-22 15:41:34.975	2024-07-22 15:41:34.975
18	7	5	1	47.25	2024-07-22 15:41:34.975	2024-07-22 15:41:34.975
19	8	10	2	96	2024-07-22 15:41:43.517	2024-07-22 15:41:43.517
20	8	6	5	190	2024-07-22 15:41:43.517	2024-07-22 15:41:43.517
21	8	5	1	47.25	2024-07-22 15:41:43.517	2024-07-22 15:41:43.517
22	9	3	2	90	2024-07-22 15:42:42.6	2024-07-22 15:42:42.6
23	9	9	5	250	2024-07-22 15:42:42.6	2024-07-22 15:42:42.6
24	9	8	1	41.75	2024-07-22 15:42:42.6	2024-07-22 15:42:42.6
25	10	3	2	90	2024-07-22 15:43:15.734	2024-07-22 15:43:15.734
26	10	9	5	250	2024-07-22 15:43:15.734	2024-07-22 15:43:15.734
27	10	8	1	41.75	2024-07-22 15:43:15.734	2024-07-22 15:43:15.734
28	11	5	2	94.5	2024-07-22 15:43:58.433	2024-07-22 15:43:58.433
29	11	3	5	225	2024-07-22 15:43:58.433	2024-07-22 15:43:58.433
30	10	2	1	39.99	2024-07-22 15:43:58.433	2024-07-22 15:49:12.68
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: prisma
--

COPY public."User" (id, name, email, password, "isAdmin", "createdAt", "updatedAt") FROM stdin;
1	Jason Tan	jaxontn.enquire@gmail.com	888	t	2024-07-22 14:54:40.267	2024-07-22 14:54:40.267
2	Bob Johnson	bob.johnson@example.com	333	f	2024-07-22 14:55:23.681	2024-07-22 14:55:23.681
3	Alice Smith	alice.smith@example.com	222	f	2024-07-22 14:56:38.911	2024-07-22 14:56:38.911
5	Henry Baker	henry.baker@example.com	999	f	2024-07-22 14:57:31.886	2024-07-22 14:57:31.886
7	Jack Davis	jack.davis@example.com	abc	f	2024-07-22 14:58:05.271	2024-07-22 14:58:05.271
9	Nathan Harris	nathan.harris@example.com	mno	f	2024-07-22 14:58:33.507	2024-07-22 14:58:33.507
10	Leo Foster	leo.foster@example.com	ghi	f	2024-07-22 14:58:47.011	2024-07-22 14:58:47.011
4	Grace Adams	grace.adams@example.com	888	f	2024-07-22 14:57:16.444	2024-07-22 15:01:40.425
6	Ivy Collins	ivy.collins@example.com	000	f	2024-07-22 14:57:47.534	2024-07-22 15:02:02.014
8	Mia Garcia	mia.garcia@example.com	jkl	f	2024-07-22 14:58:23.035	2024-07-22 15:02:05.309
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: prisma
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
fe4f96ad-093b-4c70-847f-401bd0bb44a1	2eab02553010c35c61fbf4f8ef826202700b8fa27c65738102ed53d9eee7dc1d	2024-07-22 14:47:35.837875+00	20240720043128_create_tables	\N	\N	2024-07-22 14:47:35.630069+00	1
efdd330c-4493-47d1-961e-bfa0a1e38b37	a989823627ae28c8b9cfb0871011befffb08856cac8b3c2081f7c29292ce88ae	2024-07-22 14:47:35.869732+00	20240720104837_init	\N	\N	2024-07-22 14:47:35.844238+00	1
\.


--
-- Name: BookDetail_id_seq; Type: SEQUENCE SET; Schema: public; Owner: prisma
--

SELECT pg_catalog.setval('public."BookDetail_id_seq"', 10, true);


--
-- Name: Book_id_seq; Type: SEQUENCE SET; Schema: public; Owner: prisma
--

SELECT pg_catalog.setval('public."Book_id_seq"', 10, true);


--
-- Name: OrderItem_id_seq; Type: SEQUENCE SET; Schema: public; Owner: prisma
--

SELECT pg_catalog.setval('public."OrderItem_id_seq"', 30, true);


--
-- Name: Order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: prisma
--

SELECT pg_catalog.setval('public."Order_id_seq"', 11, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: prisma
--

SELECT pg_catalog.setval('public."User_id_seq"', 10, true);


--
-- Name: BookDetail BookDetail_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."BookDetail"
--    ADD CONSTRAINT "BookDetail_pkey" PRIMARY KEY (id);
--

--
-- Name: Book Book_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."Book"
--    ADD CONSTRAINT "Book_pkey" PRIMARY KEY (id);


--
-- Name: OrderItem OrderItem_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."OrderItem"
--    ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY (id);


--
-- Name: Order Order_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."Order"
--    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."User"
--    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public._prisma_migrations
--    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: BookDetail_bookId_key; Type: INDEX; Schema: public; Owner: prisma
--

--CREATE UNIQUE INDEX "BookDetail_bookId_key" ON public."BookDetail" USING btree ("bookId");


--
-- Name: Book_isbn_key; Type: INDEX; Schema: public; Owner: prisma
--

--CREATE UNIQUE INDEX "Book_isbn_key" ON public."Book" USING btree (isbn);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: prisma
--

--CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: BookDetail BookDetail_bookId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."BookDetail"
--    ADD CONSTRAINT "BookDetail_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES public."Book"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OrderItem OrderItem_bookId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."OrderItem"
--    ADD CONSTRAINT "OrderItem_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES public."Book"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: OrderItem OrderItem_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."OrderItem"
--    ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Order Order_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: prisma
--

--ALTER TABLE ONLY public."Order"
--    ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

