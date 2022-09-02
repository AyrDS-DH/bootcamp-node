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
   .then(data => console.log(data))
   .catch(err => console.log(err))
   .finally(() => {
      console.log('Finally');
   });



//Async/await ✅
const handlerUsers = async () => {
   console.log('cargando...');

   try {
      const users = await allUsers();

      console.log(users);
   } catch (msg) {
      console.log(msg);
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
