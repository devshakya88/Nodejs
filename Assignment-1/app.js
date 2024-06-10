const http = require("http");

const handleHome = require("./routes/handleHome");
const handleUsers = require("./routes/handleUsers");
const handleCreateUser = require("./routes/handleCreateUser");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    return handleHome(req, res);
  }

  if (url === "/users" && method === "GET") {
    return handleUsers(req, res);
  }

  if (url === "/create-user" && method === "POST") {
    return handleCreateUser(req, res);
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      ); res.write('
      <head>
        <title>Page Not Found</title>
      </head>
      res.write('
      <body>
        <h1>Page Not Found</h1>
      </body>
      ') ') res.write(
    </html>`);
  res.end();
});

server.listen(3000, () => {
  console.log("Sever is running on Port 3000");
});
