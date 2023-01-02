const express = require('express');
const bodyParser = require('body-parser');

const fs = require("fs");

const app = express();

const adminRoutes = require('./routes/login');
//const chatRoutes = require('./routes/chat');
app.use(bodyParser.urlencoded({extended: false}));

//app.use(chatRoutes);
app.use(adminRoutes);


app.get('/',(req,res,next) => {
   // console.log('In another middleware!');
    fs.readFile('username.txt', (err, data)=> {
        if(err){
            console.log(err)
            data = 'No chat Exists'
        }
        res.send(
            `${data}<form action="/" onsubmit= "document.getElementById('username').value=localStorage.getItem('username')"
            method="POST">
         
            <input id="message" name="message" type="text"placeHolder="message">
            <input name="username" id="username">
            <button type="submit">send</button>
            
            </form>`
            );
    })
});









// app.use((req, res, next) => {
//     res.status(404).send('<h1>Page not found</h1>');
// });


app.listen(3000);
