const express = require('express')
var path = require('path');
const app = express()
const mongoose = require('mongoose');

const Dishes = require('./models/dishes');
const port = process.env.PORT || 3000;

const connect = mongoose.connect('mongodb://localhost:27017/DishData', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  keepAlive: true
}).then((db) => {
  console.log('Connected correctly to server');
}, (err) => { console.log(err); });

var indexRouter = require('./routes/index');
var dishRouter = require('./routes/dishRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/dishes', dishRouter);

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`)
})