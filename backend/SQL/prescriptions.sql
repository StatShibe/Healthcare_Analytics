CREATE TABLE public.prescriptions
(
    prescription_id smallserial NOT NULL,
    appointment_id integer NOT NULL,
    details text NOT NULL,
    doctor_incharge character varying NOT NULL,
    PRIMARY KEY (prescription_id)
);

ALTER TABLE IF EXISTS public.prescriptions
    OWNER to postgres;