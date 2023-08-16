CREATE TABLE USUARIO (
    idUsuario INT IDENTITY(1,1) PRIMARY KEY,
    usuario varchar(255),
    contrasena varchar(255)
);

CREATE TABLE ESTUDIANTE (
    idEstudiante INT IDENTITY(1,1) PRIMARY KEY,
    nombre varchar(255),
    apellido varchar(255),
    nivel varchar(255),
    seccion varchar(255)
);

CREATE TABLE CURSO (
    idCurso INT IDENTITY(1,1) PRIMARY KEY,
    nombreCurso varchar(255)
);

CREATE TABLE CURSO_ESTUDIANTE (
    idCursoEstudiante INT IDENTITY(1,1) PRIMARY KEY,
    idEstudiante INT FOREIGN KEY REFERENCES ESTUDIANTE(idEstudiante),
    idCurso INT FOREIGN KEY REFERENCES CURSO(idCurso)
);