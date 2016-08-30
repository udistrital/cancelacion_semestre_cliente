-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.8.1
-- PostgreSQL version: 9.4
-- Project Site: pgmodeler.com.br
-- Model Author: ---


-- Database creation must be done outside an multicommand file.
-- These commands were put in this file only for convenience.
-- -- object: new_database | type: DATABASE --
-- -- DROP DATABASE IF EXISTS new_database;
-- CREATE DATABASE new_database
-- ;
-- -- ddl-end --
-- 

-- object: public.tipo_cancelacion_semestre | type: TABLE --
-- DROP TABLE IF EXISTS public.tipo_cancelacion_semestre CASCADE;
CREATE TABLE public.tipo_cancelacion_semestre(
	id serial NOT NULL,
	tipo character varying(50) NOT NULL,
	descripcion character varying(200),
	CONSTRAINT tipo_cancelacion_semestre_pk PRIMARY KEY (id)

);
-- ddl-end --
COMMENT ON TABLE public.tipo_cancelacion_semestre IS 'especifica el tipo de cancelacion, retiro voluntario o no renovacion de matricula(aplazar semestre)';
-- ddl-end --
COMMENT ON COLUMN public.tipo_cancelacion_semestre.id IS 'una secuencia que identifica el tipo de cancelacion';
-- ddl-end --
COMMENT ON COLUMN public.tipo_cancelacion_semestre.tipo IS 'el nombre del tipo de descripcion, corto y significativo';
-- ddl-end --
COMMENT ON COLUMN public.tipo_cancelacion_semestre.descripcion IS 'una descripcion profunda sobre el tipo registrado';
-- ddl-end --
ALTER TABLE public.tipo_cancelacion_semestre OWNER TO postgres;
-- ddl-end --

-- object: public.cancelacion_semestre | type: TABLE --
-- DROP TABLE IF EXISTS public.cancelacion_semestre CASCADE;
CREATE TABLE public.cancelacion_semestre(
	id serial NOT NULL,
	id_tipo integer NOT NULL,
	id_estudiante smallint,
	motivo character varying(200),
	observaciones character varying(100),
	num_folios_anexados smallint,
	estado_aprobado bool,
	motivo_estado_aprobado character varying(100),
	fecha_solicitud timestamp,
	fecha_aprobacion timestamp,
	CONSTRAINT cancelacion_semestre_pkey PRIMARY KEY (id)

);
-- ddl-end --
COMMENT ON TABLE public.cancelacion_semestre IS 'Se consagran los datos relacionados al evento de cancelar semestre';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.id IS 'identificador serial del evento';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.id_estudiante IS 'es el codigo del estudiante que solicita la cancelacion';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.motivo IS 'motivo por el cual se aplaza, cancela semestre, este es rellenado por el estudiante';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.observaciones IS 'observaciones adicionales al proceso, se llena por el estudiante';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.num_folios_anexados IS 'numero de folios anexados, aparece en el formato de cancelacion';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.estado_aprobado IS 'si el evento fue aprobado o no, esto lo llena coordinacion u otro ente competente';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.motivo_estado_aprobado IS 'el motivo por el cual se aprueba o deniega la solicitud, es llenado por el funcionario correspondiente';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.fecha_solicitud IS 'fecha en que se realiza la solicitud';
-- ddl-end --
COMMENT ON COLUMN public.cancelacion_semestre.fecha_aprobacion IS 'fecha en que se aprueba la solicitud';
-- ddl-end --
ALTER TABLE public.cancelacion_semestre OWNER TO postgres;
-- ddl-end --

-- object: tipo_cancelacion_semestre_id_tipo_fkey | type: CONSTRAINT --
-- ALTER TABLE public.cancelacion_semestre DROP CONSTRAINT IF EXISTS tipo_cancelacion_semestre_id_tipo_fkey CASCADE;
ALTER TABLE public.cancelacion_semestre ADD CONSTRAINT tipo_cancelacion_semestre_id_tipo_fkey FOREIGN KEY (id_tipo)
REFERENCES public.tipo_cancelacion_semestre (id) MATCH FULL
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


