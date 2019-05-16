var express = require("express");
var app = express();

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
