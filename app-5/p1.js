var http = require("http");
var fs = require("fs");

//1 create the server
var server = http.createServer(function(request,response){
    switch(request.url){
        case "/read":
            // response.setHeader("Content-type","text/plain");
            fs.readFile("./Notes.txt","utf8",function(error,data){
                if(error==null){
                    response.writeHead(200);
                    response.write(data);
                    response.end();
                }else{
                    response.writeHead(500);
                    response.write("Cannot Read the data from the File");
                    response.end();
                }
              
            });
            break;
        default:
            response.write("Home Page");
            response.end();

    }
     
});

//2. listen to the server
//ok its correct bye
server.listen(7000,function(){
    console.log("Server Side Listening at 7000");
}); 
