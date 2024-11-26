const express = require('express');
const app = express();

app.get('/', (req,res)=>{
     res.send("Dev branch action that create DockerImage and deploy to my server on port 4321! Update"); 
 });

app.listen(3000, function () {
    console.log("app listening on port 3000");
});
