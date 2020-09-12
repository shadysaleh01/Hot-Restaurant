const http = require("http")
const PORT = 3000
const express = require("express")
const path = require("path")
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = http.createServer(handleRequest);
server.listen(PORT, function () {
   console.log("App listening on PORT " + PORT);
});


function handleRequest(request, response) {
   const path = request.url;

   $("#view").on("click", function () {
      fs.readFile(__dirname + "/tables.html", (err, data) => {
         if (err) throw err;

         res.writeHead(200, { "Content-Type": "text/html" });
         res.end(data);
      });
   })

   $("#reservation").on("click", function () {
      fs.readFile(__dirname + "/reserve.html", (err, data) => {
         if (err) throw err;

         res.writeHead(200, { "Content-Type": "text/html" });
         res.end(data);
      });
   })
   $("#home").on("click", function () {
      fs.readFile(__dirname + "/home.html", (err, data) => {
         if (err) throw err;

         res.writeHead(200, { "Content-Type": "text/html" });
         res.end(data);
      });
   })


   // switch (path) {
   //    case "/":

   //       break;
   //    case "/reserve":
   //       someHtml("reserve", response);
   //       break;
   //    case "/tables":
   //       someHtml("tables", response);
   //       break;
   //    default:
   //       notFound(request.url, request, response);
   // }
}


// function someHtml(fileName, res) 



// function notFound(url, req, res) {
//    const myHTML = `<html> 
//      <body>
//      <h1>404 NOT FOUND</h1>
//      </body>
//    </html>`;

//    res.writeHead(404, { "Content-Type": "text/html" });
//    res.end(myHTML);
// }