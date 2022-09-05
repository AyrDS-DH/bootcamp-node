const users = [
   {
      id: 1,
      name: 'Ayrton',
      apellido: 'Da Silva'
   },
   {
      id: 2,
      name: 'Ignacio',
      apellido: 'Feito'
   },
   {
      id: 3,
      name: 'Rodrigo',
      apellido: 'Lauga'
   },
];

const movies = [
   {
      name: 'Titanic',
      genre: 'Drama'
   },
   {
      name: 'El señor de los anillos',
      genre: 'Fantasía'
   },
   {
      name: 'El exorcista',
      genre: 'Terror'
   }
]

const allUsers = () => {
   return new Promise((resolve, reject) => {
      if (true) {
         setTimeout(() => {
            resolve(users);
         }, 3000);
      } else {
         reject('No se pueden obtener todos los usuarios');
      }
   });
}

const allMovies = () => {
   return new Promise((resolve, reject) => {
      if (true) {
         setTimeout(() => {
            resolve(movies);
         }, 2000);
      } else {
         reject('No se pueden obtener todas las peliculas');
      }
   });
}


module.exports = {
   allUsers,
   allMovies
}