var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var path = require("path");
//var session = require("express-session");
//const flash=require("express-flash");

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

//app.use(session({ // for session
//    secret: 'keyboardkitten',
//    resave: false,
//    saveUninitialized: true,
//    cookie: { maxAge: 60000 }
//}));
//app.use(flash());


require("./server/models/task.js");
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
});