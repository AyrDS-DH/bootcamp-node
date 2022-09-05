const { allUsers, allMovies } = require('./async');


//Callbacks - ❌ Ya casi no lo van a ver asi
function manejoDeUsuarios(id, res) {
   User.findById(id, function (err, data) {
      if (err) {
         return res.err
      } else {
         Task.user(data.id, function (err, data) {
            if (err) {
               return res.err
            } else {

            }
         })
      }
   });
}

//Promesas - then - catch ✅
allUsers()
   .then(data => {
      return data.filter(data => data.id !== 1)
   })
   .then(arr => arr.filter(el => el.id !== 2))
   .then(arr2 => console.log(arr2))
   .catch(err => console.log(err))
   .finally(() => {
      console.log('Finally');
   })


//Async/await ✅
const handlerUsers = async (req, res) => {
   console.log('cargando...');

   try {
      const users = await allUsers();

      console.log(users);
   } catch (msg) {
      console.log(msg);
   } finally {
      console.log('Finally try catch');
   }
}


//Promise.all - Es lo más optimo ✅
const promises = async () => {
   console.log('cargando...');

   try {
      const data = await Promise.all([allUsers(), allMovies()]);

      console.log(data);

   } catch (msg) {
      console.log(msg);
   }
}