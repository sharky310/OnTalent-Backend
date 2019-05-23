PGDMP     &                    w           OnTalent    11.2    11.2     '           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            (           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            )           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            *           1262    16400    OnTalent    DATABASE     �   CREATE DATABASE "OnTalent" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';
    DROP DATABASE "OnTalent";
             postgres    false            +           0    0    DATABASE "OnTalent"    COMMENT     C   COMMENT ON DATABASE "OnTalent" IS 'Database for OnTalent proyect';
                  postgres    false    2858            �            1259    16422    Departments    TABLE     X   CREATE TABLE public."Departments" (
    id_dept numeric NOT NULL,
    name_dept text
);
 !   DROP TABLE public."Departments";
       public         postgres    false            �            1259    16510 	   Documents    TABLE     �   CREATE TABLE public."Documents" (
    id_document numeric NOT NULL,
    name text NOT NULL,
    type text NOT NULL,
    id_user text NOT NULL
);
    DROP TABLE public."Documents";
       public         postgres    false            ,           0    0    TABLE "Documents"    COMMENT     \   COMMENT ON TABLE public."Documents" IS 'This table include user''s and admin''s documents';
            public       postgres    false    199            �            1259    16401    Rols    TABLE     X   CREATE TABLE public."Rols" (
    id_rol numeric NOT NULL,
    name_rol text NOT NULL
);
    DROP TABLE public."Rols";
       public         postgres    false            -           0    0    TABLE "Rols"    COMMENT     <   COMMENT ON TABLE public."Rols" IS 'List of rols of system';
            public       postgres    false    196            �            1259    16482    Users    TABLE     �   CREATE TABLE public."Users" (
    uuid text NOT NULL,
    first_name text,
    last_name text,
    email text,
    id text NOT NULL,
    account_activated date,
    id_rol numeric NOT NULL,
    id_dpt numeric
);
    DROP TABLE public."Users";
       public         postgres    false            .           0    0    TABLE "Users"    COMMENT     J   COMMENT ON TABLE public."Users" IS 'This table include the user''s info';
            public       postgres    false    198            �            1259    16550 
   attendance    TABLE     t   CREATE TABLE public.attendance (
    id_assistant text,
    id_speaker text NOT NULL,
    id_event text NOT NULL
);
    DROP TABLE public.attendance;
       public         postgres    false            /           0    0    TABLE attendance    COMMENT     d   COMMENT ON TABLE public.attendance IS 'This table link event, assistants and speakers or teachers';
            public       postgres    false    201            �            1259    16566    event    TABLE     p   CREATE TABLE public.event (
    id_event text NOT NULL,
    name text NOT NULL,
    type text,
    date date
);
    DROP TABLE public.event;
       public         postgres    false            0           0    0    TABLE event    COMMENT     3   COMMENT ON TABLE public.event IS 'List of events';
            public       postgres    false    202            �            1259    16527    taskList    TABLE     k   CREATE TABLE public."taskList" (
    id_user text NOT NULL,
    task text NOT NULL,
    limit_date date
);
    DROP TABLE public."taskList";
       public         postgres    false            1           0    0    TABLE "taskList"    COMMENT     R   COMMENT ON TABLE public."taskList" IS 'This table include the user''s task list';
            public       postgres    false    200            �
           2606    16429    Departments department_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."Departments"
    ADD CONSTRAINT department_pkey PRIMARY KEY (id_dept);
 G   ALTER TABLE ONLY public."Departments" DROP CONSTRAINT department_pkey;
       public         postgres    false    197            �
           2606    16573    event event_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.event
    ADD CONSTRAINT event_pkey PRIMARY KEY (id_event);
 :   ALTER TABLE ONLY public.event DROP CONSTRAINT event_pkey;
       public         postgres    false    202            �
           2606    16517    Documents pk_id_document 
   CONSTRAINT     a   ALTER TABLE ONLY public."Documents"
    ADD CONSTRAINT pk_id_document PRIMARY KEY (id_document);
 D   ALTER TABLE ONLY public."Documents" DROP CONSTRAINT pk_id_document;
       public         postgres    false    199            �
           2606    16501    Rols pk_id_rol 
   CONSTRAINT     R   ALTER TABLE ONLY public."Rols"
    ADD CONSTRAINT pk_id_rol PRIMARY KEY (id_rol);
 :   ALTER TABLE ONLY public."Rols" DROP CONSTRAINT pk_id_rol;
       public         postgres    false    196            �
           2606    16489    Users pk_uuid 
   CONSTRAINT     O   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT pk_uuid PRIMARY KEY (uuid);
 9   ALTER TABLE ONLY public."Users" DROP CONSTRAINT pk_uuid;
       public         postgres    false    198            �
           2606    16521 
   Users u_id 
   CONSTRAINT     E   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT u_id UNIQUE (id);
 6   ALTER TABLE ONLY public."Users" DROP CONSTRAINT u_id;
       public         postgres    false    198            �
           2606    16561    attendance fk_id_assistant    FK CONSTRAINT     �   ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT fk_id_assistant FOREIGN KEY (id_assistant) REFERENCES public."Users"(id);
 D   ALTER TABLE ONLY public.attendance DROP CONSTRAINT fk_id_assistant;
       public       postgres    false    198    2721    201            �
           2606    16490    Users fk_id_dpt    FK CONSTRAINT     |   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT fk_id_dpt FOREIGN KEY (id_dpt) REFERENCES public."Departments"(id_dept);
 ;   ALTER TABLE ONLY public."Users" DROP CONSTRAINT fk_id_dpt;
       public       postgres    false    2717    197    198            �
           2606    16574    attendance fk_id_event    FK CONSTRAINT     |   ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT fk_id_event FOREIGN KEY (id_event) REFERENCES public.event(id_event);
 @   ALTER TABLE ONLY public.attendance DROP CONSTRAINT fk_id_event;
       public       postgres    false    202    201    2725            �
           2606    16556    attendance fk_id_speaker    FK CONSTRAINT     |   ALTER TABLE ONLY public.attendance
    ADD CONSTRAINT fk_id_speaker FOREIGN KEY (id_speaker) REFERENCES public."Users"(id);
 B   ALTER TABLE ONLY public.attendance DROP CONSTRAINT fk_id_speaker;
       public       postgres    false    198    2721    201            �
           2606    16522    Documents fk_id_user    FK CONSTRAINT     w   ALTER TABLE ONLY public."Documents"
    ADD CONSTRAINT fk_id_user FOREIGN KEY (id_user) REFERENCES public."Users"(id);
 @   ALTER TABLE ONLY public."Documents" DROP CONSTRAINT fk_id_user;
       public       postgres    false    198    2721    199            �
           2606    16533    taskList fk_id_user    FK CONSTRAINT     v   ALTER TABLE ONLY public."taskList"
    ADD CONSTRAINT fk_id_user FOREIGN KEY (id_user) REFERENCES public."Users"(id);
 ?   ALTER TABLE ONLY public."taskList" DROP CONSTRAINT fk_id_user;
       public       postgres    false    198    2721    200           