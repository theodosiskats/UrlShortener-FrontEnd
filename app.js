if(process.env.NODE_ENV !== "production") {
  require('dotenv').config();}

// Dependencies
const express = require("express");
const app = express();
const path = require('path');
const flash = require('connect-flash');
const shortRouter = require('./routes/shorts');
const originalRouter = require('./routes/originals');
const axios = require("axios");
const AF_URL = process.env.AZURE_FUNCTION_URL;

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: false}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/short', shortRouter);
app.use('/original', originalRouter)

app.get('', (req,res) => {
  res.render('index')
})

app.get('/terms', (req,res) => {
    res.render('terms')
})

app.get('/rd/:short', async (req, res) => {
    const short = req.params.short;
    let postUrl = AF_URL + "?short=" + short;
    let response = await axios.post(postUrl)
    let result = response.data;
    res.redirect("http://" + result);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    let date = new Date()
    console.log('Port : ${' + port + '}');
    console.log('TimeStamp : ' + date.getHours() + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes());
    console.log('Server Status : Live');
});
