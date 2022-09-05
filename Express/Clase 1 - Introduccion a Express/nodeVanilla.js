const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  /**
   * Capturamos la url de la de la request recibida por el servidor
   * y el método.
   */
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Ingresar mensaje</title><head>');
    res.write(`
    <body>
    <h1>Ingresar mensaje<h1>
      <form action="/message" method="POST">
        <input type="text" name="message" placeholder="Mensaje">
        <button type="submit">Enviar</button>
      </form>
    </body>
    `);
    res.write('</html>');
    return res.end();
  }

  /**
   * En caso de que la url sea "message" y el método POST,
   * escribimos el archivo message.txt con el contenido
   * del form. Para eso, en cada evento "data" almacenamos
   * el chunk de data emitido en un array, que luego parseamos con Buffer.
   * 
   * Por último, el evento "end" indica que ya recibimos toda la data.
   * En ese momento, escribimos el archivo con el mensaje.
   */
  
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  /**
   * Esta url termina el proceso de Node, por lo cual
   * el servidor deja de funcionar.
   */
  if (url === '/downserver') {
    process.exit();
  }

  /**
   * El código debajo es la respuesta que enviará el servidor
   * si ninguna de las condiciones anteriores se cumple.
   */

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
