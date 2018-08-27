var http = require("http");
var nodemailer = require("nodemailer");
http
  .createServer(function(request, response) {
    if (request.method === "POST") {
      if (request.url === "/sendmain") {
        var requestBody = "";
        request.on("data", function(data) {
          requestBody += data.toString();
          console.log(requestBody);
          sendMail(requestBody);
          response.end();
        });
      } else {
        response.writeHead(404, "Resource Not Found", {
          "Content-Type": "text/html"
        });
        response.end(
          "<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>"
        );
      }
    }
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body as "Hello World"
    response.end("Hello World\n");
  })
  .listen(8081);
function sendMail(body) {
  body = JSON.parse(body.toString());
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "babanag95@gmail.com",
      pass: "kdurbpapltvwxxqw"
    }
  });

  var mailOptions = {
    from: "babanag95@gmail.com",
    to: "yalamart@usc.edu",
    subject: "Ping from " + body.name,
    text: body.message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
