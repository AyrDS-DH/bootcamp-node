// CONCAT
SELECT CONCAT(first_name, " ", last_name) FROM actors

// A su vez podemos asignarle un ALIAS a la función CONCAT dado que devuelve una columna con la concatenación.

SELECT CONCAT(first_name, " ", last_name) AS "Nombre y Apellido" FROM actors