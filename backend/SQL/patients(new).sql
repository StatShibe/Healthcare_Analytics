CREATE TABLE public.patients
(
    patient_id smallserial NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50),
    age integer NOT NULL,
    gender "char" NOT NULL,
    primary_ph_no integer NOT NULL,
    secondary_ph_no integer,
    address text,
    last_visit date,
    treatment_status character varying NOT NULL DEFAULT 'Ongoing',
    CONSTRAINT pk_patientid PRIMARY KEY (patient_id)
);

ALTER TABLE IF EXISTS public.patients
    OWNER to postgres;