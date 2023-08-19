"use strict";

let myhttp = require("http");

let myserver = myhttp.createServer(
  function(myRequest, myResponse) {
    console.log(myRequest.url);
    let display;
    if (myRequest.url === "/cat") {
      display = '<!DOCTYPE html><html><head><title>Cat</title></head><body><img src="img/cat.png" alt="a cute cat"></body></html>';
    } else if (myRequest.url === "/dog") {
      display = '<!DOCTYPE html><html><head><title>Cat</title></head><body><img src="img/dog.png" alt="a cute dog"></body></html>';
    } else {
      display = "<h2>WHAT ARE YOU DOING?!</h2>";
    }

    myResponse.writeHead(200, { "Content-Type": "text/html" });
    myResponse.end(display);
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("Server has started");