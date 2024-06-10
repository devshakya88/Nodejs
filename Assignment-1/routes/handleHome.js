const handleHome = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>Enter Username</title>
      </head>
      <body>
        <h1>Welcome to our Page!</h1>
        <form action="/create-user" metho="POST">
          <input type="text" name="username"></input>
          <button type="submit">Send</button>
        </form>
      </body>
    </html>`);
  res.end();
};

module.exports = handleHome;
