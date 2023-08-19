"use strict";

let myhttp = require("http");

let myserver = myhttp.createServer(
  function(myRequest, myResponse) {
    console.log(myRequest.url);

    myResponse.writeHead( 200, { "Content-Type": "text/plain" } );
    myResponse.end("Hello World!");
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("Server has started");