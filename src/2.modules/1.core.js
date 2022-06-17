const http = require("http")

http.createServer(function(request, response){
    console.log("Full URl" ,request.headers.referer)
    console.log("Url:" ,request.url)

    if(request.url == "/") {
        response.end("Hello World")
    } else if(request.url =="/employee"){
        response.end("Here is the employee info")
    } else if (request.url =="/user"){
        response.end("Here is the user info")
    } else {
        response.end("Please Contact Administartor")
    }
    
}).listen(1234)