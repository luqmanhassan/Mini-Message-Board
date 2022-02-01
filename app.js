const express = require('express');
const app = express();
const indexRouter = require('./routes/index.js');

app.listen(3000);
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use((req, res) => {
  res.status(404).render('404', {title: '404 Page'});
});

module.exports = app;
