import http from "http"

const server = http.createServer()

server.on("request", (request, response)=>{
    if(request.method === "GET"){
        console.log(`Getting a resource`);
    }

    if(request.method === "POST"){
        console.log(`Adding a Resource`);
    }

    if(request.method === "PATCH"){
        console.log(`Updating a Resource`);
    }

    if(request.method === "DELETE"){
        console.log(`Deleting a resource`);
    }

    response.end("Thanks for visiting")
    
})

server.listen(8000, "localhost", () =>{
    console.log("Listening to http://localhost:8000");
})