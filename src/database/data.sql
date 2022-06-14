--Creando tablas auxiliares para la generacion de datos.

CREATE TABLE NOMBRES (
    nombre varchar,
    sexo varchar
);

-- Insertando los nombres

INSERT INTO public.nombres (nombre, sexo) VALUES ('Ana', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Antonella', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Camila', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Elizabeth', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Isabella', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Mariana', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Nicole', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Rosa', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Samantha', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Sofía', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Valentina', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Valeria', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Victoria', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Ángel', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Antonio', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Carlos', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Diego', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Francisco', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Gabriel', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Jesús', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Jorge', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Juan', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Julio', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Luis', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Manuel', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Miguel', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Pedro', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Rafael', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Ramón', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Samuel', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Víctor', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Sofía', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Isabella', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Valentina', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Emma', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Camila', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Valeria', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Victoria', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Martina', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Ximena', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Luciana', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Santiago', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Mateo', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Sebastián', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Alejandro', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Matías', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Diego', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Samuel', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Nicolás', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Daniel', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Martín', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Abigail', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Ava', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Elizabeth', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Emily', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Emma', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Isabella', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Madison', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Mia', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Olivia', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Sophia', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Aiden', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Alexander', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Ethan', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Jacob', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Jayden', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Liam', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Mason', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Michael', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Noah', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('William', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Alba', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Carla', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Carmen', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Daniela', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Julia', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Lucía', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('María', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Paula', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Sara', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Sofía', 'F');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Adrián', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Alejandro', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Álvaro', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Daniel', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('David', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Diego', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Hugo', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Javier', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Mario', 'M');
INSERT INTO public.nombres (nombre, sexo) VALUES ('Pablo', 'M');

CREATE TABLE APELLIDOS (
    apellido varchar  
);

-- Insertando los apellidos

INSERT INTO public.apellidos (apellido) VALUES ('González');
INSERT INTO public.apellidos (apellido) VALUES ('Rodríguez');
INSERT INTO public.apellidos (apellido) VALUES ('Pérez');
INSERT INTO public.apellidos (apellido) VALUES ('Hernández');
INSERT INTO public.apellidos (apellido) VALUES ('Gracía');
INSERT INTO public.apellidos (apellido) VALUES ('Martínez');
INSERT INTO public.apellidos (apellido) VALUES ('Sánchez');
INSERT INTO public.apellidos (apellido) VALUES ('López');
INSERT INTO public.apellidos (apellido) VALUES ('Díaz');
INSERT INTO public.apellidos (apellido) VALUES ('Rojas');
INSERT INTO public.apellidos (apellido) VALUES ('Ramírez');
INSERT INTO public.apellidos (apellido) VALUES ('Castillo');
INSERT INTO public.apellidos (apellido) VALUES ('Gómez');
INSERT INTO public.apellidos (apellido) VALUES ('Romero');
INSERT INTO public.apellidos (apellido) VALUES ('Fernández');
INSERT INTO public.apellidos (apellido) VALUES ('Torres');
INSERT INTO public.apellidos (apellido) VALUES ('Mendoza');
INSERT INTO public.apellidos (apellido) VALUES ('Medina');
INSERT INTO public.apellidos (apellido) VALUES ('Moreno');
INSERT INTO public.apellidos (apellido) VALUES ('Gutiérrez');
INSERT INTO public.apellidos (apellido) VALUES ('Jiménez');
INSERT INTO public.apellidos (apellido) VALUES ('Rivas');
INSERT INTO public.apellidos (apellido) VALUES ('Álvarez');
INSERT INTO public.apellidos (apellido) VALUES ('Salazar');
INSERT INTO public.apellidos (apellido) VALUES ('Márquez');
INSERT INTO public.apellidos (apellido) VALUES ('Suárez');
INSERT INTO public.apellidos (apellido) VALUES ('Flores');
INSERT INTO public.apellidos (apellido) VALUES ('Silva');
INSERT INTO public.apellidos (apellido) VALUES ('Peña');
INSERT INTO public.apellidos (apellido) VALUES ('Contreras');
INSERT INTO public.apellidos (apellido) VALUES ('Morales');
INSERT INTO public.apellidos (apellido) VALUES ('Herrera');
INSERT INTO public.apellidos (apellido) VALUES ('Vargas');
INSERT INTO public.apellidos (apellido) VALUES ('Méndez');
INSERT INTO public.apellidos (apellido) VALUES ('Parra');
INSERT INTO public.apellidos (apellido) VALUES ('Ruiz');
INSERT INTO public.apellidos (apellido) VALUES ('Ramos');
INSERT INTO public.apellidos (apellido) VALUES ('Blanco');
INSERT INTO public.apellidos (apellido) VALUES ('Rivero');
INSERT INTO public.apellidos (apellido) VALUES ('Quintero');
INSERT INTO public.apellidos (apellido) VALUES ('Briceño');
INSERT INTO public.apellidos (apellido) VALUES ('Reyes');
INSERT INTO public.apellidos (apellido) VALUES ('Zambrano');
INSERT INTO public.apellidos (apellido) VALUES ('Vásquez');
INSERT INTO public.apellidos (apellido) VALUES ('León');
INSERT INTO public.apellidos (apellido) VALUES ('Delgado');
INSERT INTO public.apellidos (apellido) VALUES ('Velásquez');
INSERT INTO public.apellidos (apellido) VALUES ('Rondón');
INSERT INTO public.apellidos (apellido) VALUES ('Marcano');
INSERT INTO public.apellidos (apellido) VALUES ('Castro');
INSERT INTO public.apellidos (apellido) VALUES ('Molina');
INSERT INTO public.apellidos (apellido) VALUES ('Acosta');
INSERT INTO public.apellidos (apellido) VALUES ('Tovar');
INSERT INTO public.apellidos (apellido) VALUES ('Barrios');
INSERT INTO public.apellidos (apellido) VALUES ('Alvarado');
INSERT INTO public.apellidos (apellido) VALUES ('Gil');
INSERT INTO public.apellidos (apellido) VALUES ('Marín');
INSERT INTO public.apellidos (apellido) VALUES ('Mora');
INSERT INTO public.apellidos (apellido) VALUES ('Colmenares');
INSERT INTO public.apellidos (apellido) VALUES ('Escalona');
INSERT INTO public.apellidos (apellido) VALUES ('Brito');
INSERT INTO public.apellidos (apellido) VALUES ('Lugo');
INSERT INTO public.apellidos (apellido) VALUES ('Rangel');
INSERT INTO public.apellidos (apellido) VALUES ('Muñoz');
INSERT INTO public.apellidos (apellido) VALUES ('Torrealba');
INSERT INTO public.apellidos (apellido) VALUES ('Pacheco');
INSERT INTO public.apellidos (apellido) VALUES ('Guerrero');
INSERT INTO public.apellidos (apellido) VALUES ('Guzmán');
INSERT INTO public.apellidos (apellido) VALUES ('Durán');
INSERT INTO public.apellidos (apellido) VALUES ('Urdaneta');
INSERT INTO public.apellidos (apellido) VALUES ('Montilla');
INSERT INTO public.apellidos (apellido) VALUES ('Ortiz');
INSERT INTO public.apellidos (apellido) VALUES ('Chirinos');
INSERT INTO public.apellidos (apellido) VALUES ('Núñez');
INSERT INTO public.apellidos (apellido) VALUES ('Guevara');
INSERT INTO public.apellidos (apellido) VALUES ('Ortega');
INSERT INTO public.apellidos (apellido) VALUES ('Chacón');
INSERT INTO public.apellidos (apellido) VALUES ('Soto');
INSERT INTO public.apellidos (apellido) VALUES ('Espinoza');
INSERT INTO public.apellidos (apellido) VALUES ('Guerra');
INSERT INTO public.apellidos (apellido) VALUES ('Bolívar');
INSERT INTO public.apellidos (apellido) VALUES ('Salas');
INSERT INTO public.apellidos (apellido) VALUES ('Colina');
INSERT INTO public.apellidos (apellido) VALUES ('Campos');
INSERT INTO public.apellidos (apellido) VALUES ('Cedeño');
INSERT INTO public.apellidos (apellido) VALUES ('Figueroa');
INSERT INTO public.apellidos (apellido) VALUES ('Leal');
INSERT INTO public.apellidos (apellido) VALUES ('Arias');
INSERT INTO public.apellidos (apellido) VALUES ('Camacho');
INSERT INTO public.apellidos (apellido) VALUES ('Aguilar');
INSERT INTO public.apellidos (apellido) VALUES ('Pinto');
INSERT INTO public.apellidos (apellido) VALUES ('Morillo');
INSERT INTO public.apellidos (apellido) VALUES ('Cordero');
INSERT INTO public.apellidos (apellido) VALUES ('Bravo');
INSERT INTO public.apellidos (apellido) VALUES ('Araujo');
INSERT INTO public.apellidos (apellido) VALUES ('Linares');
INSERT INTO public.apellidos (apellido) VALUES ('Rincón');
INSERT INTO public.apellidos (apellido) VALUES ('Pererira');
INSERT INTO public.apellidos (apellido) VALUES ('Navarro');
INSERT INTO public.apellidos (apellido) VALUES ('Pineda');

--Definiendo las especialidades de los medicos.

insert into specialty (specialty,created_at,updated_at) values ('CARDIOLOGIA',NOW(),NOW());
insert into specialty (specialty,created_at,updated_at) values ('OFTALMOLOGIA',NOW(),NOW());
insert into specialty (specialty,created_at,updated_at) values ('OTORRINOLARINGOLOGIA',NOW(),NOW());
insert into specialty (specialty,created_at,updated_at) values ('UROLOGIA',NOW(),NOW());
insert into specialty (specialty,created_at,updated_at) values ('PEDIATRIA',NOW(),NOW());
insert into specialty (specialty,created_at,updated_at) values ('NEUROLOGIA',NOW(),NOW());
insert into specialty (specialty,created_at,updated_at) values ('NEFROLOGIA',NOW(),NOW());

-- Rutina que para poblar la tabla doctor.

Create or replace procedure generateDoctors(i int)
language plpgsql    
as $$
declare
cont int; -- counter for the max number of doctors
nombre varchar; -- random name of the doctor
apellido varchar; -- random surname of the doctor
specialty int; -- random specialty
sexo varchar; -- random sex according to the name
ran_latitud int; --random latitude
ran_longitud int; -- random longitude
current_doctor int; -- get the id of the just created doctor
ran_quant int; -- random quantity of specialties the doctor is going to have
max_specialties int; -- the ammount of current specialties in record
count_specialties int; --counter for the while loop to assign specialties
begin
   cont := 0;
	while (cont < i) loop
		-- Getting: a Random name, sex, specialty, latitude and longitude
		select * into nombre,sexo from nombres n order by random() limit 1;
		select * into apellido from apellidos a order by random() limit 1;
		ran_latitud := random() *100 + 5;
		ran_longitud := random() *-100 +5;
		
		--Creating the doctor itself
		insert into doctors (first_name,last_name,sex,"holdType",latitude,longitude,created_at,updated_at,image)
		values (nombre,apellido,Cast(sexo as doctors_sex_enum),'NONE',ran_latitud,ran_longitud,now(),now(),'doc1.jpg');
		
		-- Getting the id of the last doctor
		select max(id) into current_doctor from doctors;
		count_specialties := 0;
		
		-- Getting the ammount of specialties that exists
		select count(*) into max_specialties from specialty;
		
		-- Defining the ammount of specialties the doctor is going to have
		ran_quant := (random()*-1)  + 1;
		raise notice 'cantidad: %',ran_quant;
		while (count_specialties <= ran_quant) loop
			select s.id into specialty from specialty s order by random() limit 1;
			insert into doctors_specialties_specialty ("doctorsId","specialtyId") values (current_doctor,specialty) ON CONFLICT DO NOTHING;
			count_specialties := count_specialties +1;
		end loop;
		cont:= cont+1;
	end loop;
end;$$

-- Generacion de los doctores.
call generateDoctors(100);