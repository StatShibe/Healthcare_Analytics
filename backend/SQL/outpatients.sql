CREATE TABLE IF NOT EXISTS public.outpatients
(
    appointment_id integer,
    patient_id integer,
    appointment_date date,
    appointment_reason "char",
    doctor_id integer,
    test_msrmnt_dtl character varying(100) COLLATE pg_catalog."default",
    prescription_dtl character varying(50) COLLATE pg_catalog."default"
)


TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.outpatients
    OWNER to postgres;