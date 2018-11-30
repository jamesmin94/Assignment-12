let map = L.map('map').setView([28.5, -81], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/jamesmin94/cjp4b1k3k3tdt2rojeptezgky/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFtZXNtaW45NCIsImEiOiJjam91YzFoYWUwdWg1M3BvNHF6bWw0Mnp5In0.IsZSl9-Eo7F0akLuD9SLnA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 8
}).addTo(map);

for ( let i = 0; i < places.length; i++) {
  L.marker ( [places[i].latitude, places[i].longitude])
  .bindPopup('<h3>Annual Violent Crimes in ' + places[i].name + '</h3>' + '<p> The Number of Annual Violent Crimes (AVC) per 100,000 population is <b>' + places[i].AVC + '</b>.</p>')
  .addTo(map);
}
