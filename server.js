const path = require('path');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');

// Import routes
const mainRoutes = require('./routes/mainRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();


// MongoDB connection
mongoose.connect('mongodb://localhost/news',  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB ga muvaffaqiyatli ulandik!"))
    .catch((e) => console.log(e));


// Set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded());

app.use('/', mainRoutes);
app.use('/admin', adminRoutes);


app.use(morgan('tiny'));
app.use(helmet());
app.use(express.static(__dirname + '/public'));


app.use((req, res) => { 
    res.status(404).render('404', {layout: '404'});
})

const PORT = 3000;
app.listen(PORT, () => { console.log(`${PORT} - portda ishlayabmiz! `) });
