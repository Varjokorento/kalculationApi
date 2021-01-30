const https = require("https");
import { ResponseObject } from "./classes/ResponseObject";

export const post = (message: string, url: string): ResponseObject => {
  const data = JSON.stringify({
    todo: "Buy the milk",
  });
  const options = {
    hostname: "www.jsonplaceholder.typicode.com",
    path: "/todos/1",
    port: 443,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": data.length,
    },
  };

  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });

  req.write(data);
  req.end();
  return null;
};
