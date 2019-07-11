var express = require('express');
    app  = express();
    bodyParser = require('body-parser');
    port = process.env.PORT || 3000;
  

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var todoRoutes = require('./routes/todos');

    app.get("/",function(req,res){
        res.send("Hello from root");
    })

    app.use("/api/todos",todoRoutes);

app.listen(port,function(req,res){
    console.log("server is running");
})