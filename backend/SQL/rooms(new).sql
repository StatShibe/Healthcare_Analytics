CREATE TABLE IF NOT EXISTS public.rooms
(
    room_id smallint NOT NULL DEFAULT nextval('rooms_room_id_seq'::regclass),
    current_capacity integer NOT NULL,
    total_capacity integer NOT NULL,
    room_type character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_roomid PRIMARY KEY (room_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.rooms
    OWNER to postgres;