CREATE TABLE IF NOT EXISTS public.treatments
(
    patient_id integer NOT NULL,
    admission_id integer,
    treatment_date date,
    visited_doctor_id integer NOT NULL,
    care_taker_dtl character varying(100) COLLATE pg_catalog."default",
    test_msrmnt_dtl character varying(100) COLLATE pg_catalog."default",
    discharge_ind "char" NOT NULL,
    CONSTRAINT treatments_pkey PRIMARY KEY (patient_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.treatments
    OWNER to postgres;