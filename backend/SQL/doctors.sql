CREATE TABLE IF NOT EXISTS public.doctors
(
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    specialization character varying(50) COLLATE pg_catalog."default",
    availability character varying(50) COLLATE pg_catalog."default",
    user_id integer NOT NULL,
    CONSTRAINT doctors_pkey PRIMARY KEY (email),
    CONSTRAINT doctors_email_key UNIQUE (email),
    CONSTRAINT doctors_user_id_key UNIQUE (user_id),
    CONSTRAINT doctors_user_id_fkey FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.doctors
    OWNER to postgres;