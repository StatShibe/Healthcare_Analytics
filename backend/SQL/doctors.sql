CREATE TABLE public.doctors
(
    doctor_id serial NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(200) NOT NULL,
    specialization character varying(50),
    availability character varying(50),
    PRIMARY KEY (doctor_id),
    UNIQUE (email)
);

ALTER TABLE IF EXISTS public.doctors
    OWNER to postgres;