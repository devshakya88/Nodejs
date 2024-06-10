const handleUsers = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html>
      <head>
        <title>List</title>
      </head>
      <body>
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </body>
    </html>`);
  res.end();
};

module.exports = handleUsers;
