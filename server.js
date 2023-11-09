const http = require("http");
const url = require("url");
const fs = require("fs");
const { error } = require("console");

const srever = http.createServer((req,res)=>{
    const path = url.parse(req.url,true)
    if(path.pathname === "/"){
        fs.readFile("./index.html","utf-8",(error,data)=>{
            if(error){
                console.log(error);
                return;
            }
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data);
            res.end()
        })
    }
    if(path.pathname === "/recive-data"){
        let query = path.query;
        fs.writeFile("./User_data/"+query.username+".json",JSON.stringify(query),(error)=>{
            if(error){
                console.log(error);
                return;
            }
        })
    }
})


srever.listen(3000,(error)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log('server start');
})
