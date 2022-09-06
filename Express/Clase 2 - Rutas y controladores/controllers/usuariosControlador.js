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

const usuariosControlador = {

   buscarUsuario: (req, res) => {
      // const { id } = req.params;
      const id = Number(req.params.id);

      if (!id) {
         return res.send(users);
      }

      const usuario = users.filter(el => el.id === id);
      return res.send(usuario);
   },

   perfilUsuario: (req, res) => {
      const usuario = req.params.usuario;

      res.send(usuario);
   },

   eliminarUsuario: (req, res) => {
      res.send('Elimiar usuario')
   }
};



module.exports = usuariosControlador;