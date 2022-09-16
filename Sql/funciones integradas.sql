// CONCAT

SELECT CONCAT(first_name, " ", last_name) FROM actors

SELECT CONCAT(first_name, " ", last_name) AS "Nombre y Apellido" FROM actors
// A su vez podemos asignarle un ALIAS a la función CONCAT dado que devuelve una columna con la concatenación


// COALESCE
SELECT title, COALESCE(rating, "Sin rating") FROM actors

// DATEDIFF
SELECT title, DATEDIFF(NOW(), created_at) FROM actors
// devuelve la diferencia entre la fecha de hoy la fecha del created_at

// EXTRACT
SELECT title, EXTRACT(day, created_at) FROM actors
// extrae una parte de una fecha en particular, podes utilizar month y year como parametros

// DATE_FORMAT
SELECT title, DATE_FORMAT(created_at, "%y/%m/%d") FROM actors
// parsea el tipo fecha, formate de salida "2020/10/25"
