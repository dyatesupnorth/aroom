var express = require("express");
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

app.get("/hotels", function(req, res) {
  res.json([
    {
      name: "hotelone",
      starRating: 5,
      facilities: ["car park", "pool"]
    },
    {
      name: "hoteltwo",
      starRating: 3,
      facilities: ["car park", "gym"]
    },
    {
      name: "hotelthree",
      starRating: 3,
      facilities: []
    }
  ]);
});

app.listen(3001);
