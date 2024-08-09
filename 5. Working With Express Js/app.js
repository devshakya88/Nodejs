const bodyParser = require('body-parser');
const express = require('express');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs());
app.set('view engine', 'pug');
// app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found!' });
});

app.listen(3000);
console.log('Server run on port 3000');
