CREATE TABLE USUARIOS (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    usuario varchar(255),
    contrasena varchar(255)
);

CREATE TABLE ESTUDIANTES (
    idEstudiante INT AUTO_INCREMENT PRIMARY KEY,
    nombre varchar(255),
    apellido varchar(255),
    nivel varchar(255),
    seccion varchar(255)
);

CREATE TABLE CURSOS (
    idCurso INT AUTO_INCREMENT PRIMARY KEY,
    nombreCurso varchar(255)
);

CREATE TABLE CURSO_ESTUDIANTES (
    idCursoEstudiante INT AUTO_INCREMENT PRIMARY KEY,
    idEstudiante INT FOREIGN KEY REFERENCES ESTUDIANTE(idEstudiante),
    idCurso INT FOREIGN KEY REFERENCES CURSO(idCurso)
);