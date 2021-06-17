const fs=require("fs");
const { stringify } = require("querystring");
//fs.writeFile("build.txt","today is awesome day",(err)=>{
 // console.log("file is created");
 // console.log(err)});
 fs.readFile("build.txt","UTF-8",(err,data)=>{
   console.log("file is");
   console.log(data);
  });
   