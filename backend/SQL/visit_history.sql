CREATE TABLE IF NOT EXISTS public.visit_history
(
    appointment_id smallint NOT NULL DEFAULT nextval('visit_history_appointment_id_seq'::regclass),
    customer_id integer NOT NULL,
    type_of_visit character varying COLLATE pg_catalog."default" NOT NULL,
    reason_for_visit text COLLATE pg_catalog."default" NOT NULL,
    room_id integer,
    admission_date date,
    discharge_date date,
    assigned_doctor character varying COLLATE pg_catalog."default",
    CONSTRAINT pk_appointmentid PRIMARY KEY (appointment_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.visit_history
    OWNER to postgres;