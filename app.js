document.getElementById('share-location').addEventListener('click', function() {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});

function success(position) {
  var latitude  = position.coords.latitude;
  var longitude = position.coords.longitude;

  fetch('/api/getNearbyPoints', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ latitude: latitude, longitude: longitude }),
  })
  .then(response => response.json())
  .then(data => {
    var points = document.getElementById('points');
    points.innerHTML = '';
    data.forEach(function(point) {
      var button = document.createElement('button');
      button.textContent = 'Mint受取';
      button.addEventListener('click', function() {
        window.location.href = '/api/claimURL/' + point.id;
      });
      points.appendChild(button);
    });
  });
}

function error() {
  alert('Unable to retrieve your location');
}