--
-- PostgreSQL database dump
--

-- Dumped from database version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.9 (Ubuntu 14.9-0ubuntu0.22.04.1)

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

--
-- Name: OrderStatus; Type: TYPE; Schema: public; Owner: -
--

CREATE TYPE public."OrderStatus" AS ENUM (
    'PENDING',
    'FINISHED',
    'CANCELLED'
);


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Additional; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Additional" (
    id text NOT NULL,
    name character varying(50) NOT NULL,
    price integer NOT NULL
);


--
-- Name: AdditionalToOrder; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."AdditionalToOrder" (
    "orderId" text NOT NULL,
    "additionalId" text NOT NULL
);


--
-- Name: Category; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Category" (
    id text NOT NULL,
    name character varying(50) NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatdeAt" timestamp(3) without time zone NOT NULL,
    "imageUrl" text NOT NULL
);


--
-- Name: Client; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Client" (
    id text NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: Order; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Order" (
    id text NOT NULL,
    client_id text NOT NULL,
    product_id text NOT NULL,
    quantity integer NOT NULL,
    status public."OrderStatus" NOT NULL,
    total integer NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatdeAt" timestamp(3) without time zone NOT NULL
);


--
-- Name: Product; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."Product" (
    id text NOT NULL,
    "categoryId" text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatdeAt" timestamp(3) without time zone NOT NULL,
    name character varying(25) NOT NULL,
    description text NOT NULL,
    "imageUrl" text NOT NULL,
    price integer NOT NULL
);


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


--
-- Data for Name: Additional; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: AdditionalToOrder; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: Category; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."Category" VALUES ('clpkgpyza00009vpvsclyumfs', 'Combos', '2023-11-30 00:33:33.527', '2023-11-30 00:33:25.316', 'https://www.confeiteiradesucesso.com/wp-content/uploads/2019/03/hamburguergourmet-fb.jpg');
INSERT INTO public."Category" VALUES ('clpkgr3eq00019vpvzbgr3pdr', 'Acompanhamentos', '2023-11-30 00:34:25.923', '2023-11-30 00:35:22.534', 'https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2020/11/22/batata-frita-cheddar-bacon-parmesao-768x512.jpg');
INSERT INTO public."Category" VALUES ('clpkgspiy00029vpvnp8y2ayk', 'Bebidas', '2023-11-30 00:35:41.242', '2023-11-30 00:35:24.14', 'https://aguajavilaolimpia.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/4/247-1_3.jpg');
INSERT INTO public."Category" VALUES ('clpkgts0t00039vpvu9urbic7', 'Sobremesas', '2023-11-30 00:36:31.134', '2023-11-30 00:37:00.37', 'https://areademulher.r7.com/wp-content/uploads/2021/03/sobremesas-de-pascoa-10-receitas-deliciosas-para-adocar-o-feriado.jpg');


--
-- Data for Name: Client; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: Order; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public._prisma_migrations VALUES ('d023a674-3739-44b8-b2e9-6dd8a8673a90', 'a1e948bf18f08215cd9a02890261e8d6d9aa9d95f38e1036b46aab4f44d4997d', '2023-11-28 17:47:43.328512-03', '20231128021116_migrate_to_postgresql', NULL, NULL, '2023-11-28 17:47:43.308372-03', 1);
INSERT INTO public._prisma_migrations VALUES ('f78d3f90-9fab-418a-9fa3-845ee59d135c', '324a2102be4a8a463d5d8804fc0c80ceec07192ae814b002a8d1ec52270031a2', '2023-11-28 17:48:38.683378-03', '20231128204838_fix_typo_and_add_unique_constraint_for_categ_and_addt', NULL, NULL, '2023-11-28 17:48:38.672631-03', 1);
INSERT INTO public._prisma_migrations VALUES ('58e8aff8-154f-49b2-9a25-c39bbb3b9efd', 'c3b5f9c5a594ee225bee00569dcc2768ecaace74f5ac7abe507f84d0685cc726', '2023-11-29 18:57:49.468239-03', '20231129215749_description_and_price_for_products', NULL, NULL, '2023-11-29 18:57:49.459751-03', 1);
INSERT INTO public._prisma_migrations VALUES ('6c6ad86e-bad5-4b12-aa02-e486543e790f', 'd1a58c8a19f0812cf19ca853bd5c8c0c91f207bcbb025e7e6526c6b70b8deb2f', '2023-11-29 21:05:15.986096-03', '20231130000515_image_url_for_category', NULL, NULL, '2023-11-29 21:05:15.9806-03', 1);


--
-- Name: AdditionalToOrder AdditionalToOrder_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."AdditionalToOrder"
    ADD CONSTRAINT "AdditionalToOrder_pkey" PRIMARY KEY ("additionalId", "orderId");


--
-- Name: Additional Additional_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Additional"
    ADD CONSTRAINT "Additional_pkey" PRIMARY KEY (id);


--
-- Name: Category Category_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Category"
    ADD CONSTRAINT "Category_pkey" PRIMARY KEY (id);


--
-- Name: Client Client_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Client"
    ADD CONSTRAINT "Client_pkey" PRIMARY KEY (id);


--
-- Name: Order Order_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Additional_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Additional_name_key" ON public."Additional" USING btree (name);


--
-- Name: Category_name_key; Type: INDEX; Schema: public; Owner: -
--

CREATE UNIQUE INDEX "Category_name_key" ON public."Category" USING btree (name);


--
-- Name: AdditionalToOrder AdditionalToOrder_additionalId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."AdditionalToOrder"
    ADD CONSTRAINT "AdditionalToOrder_additionalId_fkey" FOREIGN KEY ("additionalId") REFERENCES public."Additional"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: AdditionalToOrder AdditionalToOrder_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."AdditionalToOrder"
    ADD CONSTRAINT "AdditionalToOrder_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Order"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Order Order_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_client_id_fkey" FOREIGN KEY (client_id) REFERENCES public."Client"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Order Order_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Order"
    ADD CONSTRAINT "Order_product_id_fkey" FOREIGN KEY (product_id) REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Product Product_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public."Category"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

