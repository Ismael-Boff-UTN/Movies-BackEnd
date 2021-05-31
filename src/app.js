const express = require('express');
const path = require('path');
const cors = require('cors');


const indexRouter = require('./routes/index');

const moviesRoutes = require('./routes/moviesRoutes');
const genresRoutes = require('./routes/genresRoutes');
const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 4000);

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.use('/', indexRouter);
app.use(moviesRoutes);
app.use(genresRoutes);

//app.listen("3001" || process.env.PORT , () => console.log('Servidor corriendo en el puerto',process.env.PORT));
//Server Inicialization
app.listen(app.get('port'), () => {
    console.log('Server On Port : ', app.get('port'));
});