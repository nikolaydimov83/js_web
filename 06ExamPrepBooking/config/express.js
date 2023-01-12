const express=require('express');
const handlebars=require('express-handlebars');
const cookieParser=require('cookie-parser');
const tokenValidity=require('../middlewares/tokenValidity');
const trimBody=require('../middlewares/trimBody');

module.exports=(app)=>{
const hbs =handlebars.create({
    extname:'.hbs'
});

app.engine('.hbs',hbs.engine);
app.set('view engine', '.hbs');
app.use('/static', express.static('static'));
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(tokenValidity());
app.use(trimBody());
}