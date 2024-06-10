const handleCreateUser = (req, res) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });

  req.on("end", () => {
    const parseBody = Buffer.concat(body).toString();
    const username = parseBody.split("=")[1];
    console.log("Username:", username);
    res.statusCode = 303;
    res.setHeader("Location", "/");
    res.end();
  });
};

module.exports = handleCreateUser;
