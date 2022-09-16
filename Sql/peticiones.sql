// SELECT

SELECT * FROM `movies`
// Trae todas las películas en la base de datos

// INSERT
INSERT INTO 'movies' (`title`, `rating`, `awards`, `release_date`, `length`, `genre_id`) 
VALUES ('[value-5]','[value-6]','[value-7]','[value-8]','[value-9]') 
// Inserta una pelicula con los valores definidos

// UPDATE
UPDATE `movies` SET `title`='[value-4]',`rating`='[value-5]',`awards`='[value-6]'
WHERE name = "nombre_de_pelicula"
// Actualiza los valores de la tabla peliculas con los datos pasados

// DELETE
DELETE FROM `movies` WHERE name = "nombre_de_pelicula"
// Borra el registro según el nombre de la película