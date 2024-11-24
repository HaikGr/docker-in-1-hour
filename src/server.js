const express = require('express');
const app = express();

app.get('/', (req,res)=>{
     res.send("Created DockerImage and runned by Docker on port 1234!"); 
 });

app.listen(3000, function () {
    console.log("app listening on port 3000");
});
