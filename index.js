var express = require("express");

var app = express();

app.listen(process.env.PORT || 3000, error=>
{
    if(error)
    {
        console.log(error)
    }
    else
    {
        console.log(`Corriendo en puerto ${process.env.PORT ? process.env.PORT : 3000 }`);
    }
});