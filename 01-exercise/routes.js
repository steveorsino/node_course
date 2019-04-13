const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if ( url === '/' ) {
    res.write('<html>');
    res.write('<head><title>Exercise 1</title></head>');
    res.write('<body><h2>Hello, create a user</h2><br><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if ( url === '/users' ) {
    res.write('<html>');
    res.write('<head><title>Exercise 1</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data',(chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    })
  }
}

module.exports = requestHandler