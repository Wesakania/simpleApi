let fs = require("fs");
let http = require("http");
let url = require("url");
                     //SERVER
let data = fs.readFileSync(`${__dirname}/dev-data/data.json`,"utf-8")
let dataObj = JSON.parse(data);
      

let server = http.createServer((req,res)=>{
    let pathName = req.url;

    if(pathName==="/" || pathName==="/overview"){
        res.end("This is an OVERVIEW");
    }else if(pathName==="/PRODUCT"){
        res.end("This is the PRODUCT");
    }else if(pathName==="/api"){
        res.writeHead(200, {"content-type":"application/json"})
        res.end(data)

    }
    else{
        res.writeHead(404,{
            "content-type":"text/html",
            "my-own-header":"Hello world"
        })
        res.end("<h1>Page not found</h1>")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("The server is listening on Port 8000")
})