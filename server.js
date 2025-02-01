var express = require('express');
var app = express();
app.use(express.json());

app.post('/api/getNearbyPoints', function(req, res) {
  // Implement your logic to get nearby points based on req.body.latitude and req.body.longitude
  // and send them back as response
});

app.get('/api/claimURL/:id', function(req, res) {
  // Implement your logic to get the claim URL based on req.params.id and redirect to it
});

app.listen(3000, function () {
  console.log('App is listening on port 3000!');
});