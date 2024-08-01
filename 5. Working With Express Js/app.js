const bodyParser = require('body-parser');
const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
console.log('Server run on port 3000');