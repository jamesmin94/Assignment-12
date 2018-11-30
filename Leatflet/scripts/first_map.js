let map = L.map('map1').setView([35.672, 139.742], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/jamesmin94/cjp4b1k3k3tdt2rojeptezgky/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFtZXNtaW45NCIsImEiOiJjam91YzFoYWUwdWg1M3BvNHF6bWw0Mnp5In0.IsZSl9-Eo7F0akLuD9SLnA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12.5
}).addTo(map);

//Shinjuku
let marker1 = L.marker([35.690, 139.701]).addTo(map);
marker1.bindPopup("I went to Shinjuku Station.");

//Shibuya
let marker2 = L.marker([35.659, 139.701]).addTo(map);
marker2.bindPopup("I went to Shibuya Station.");

//Daikanyama
let marker3 = L.marker([35.650, 139.700]).addTo(map);
marker3.bindPopup("I went to Daikanyama T-Site store.");

//Odaiba
let marker4 = L.marker([35.632, 139.778]).addTo(map);
marker4.bindPopup("I went to Odaiba Marine Park.");

//Ueno Park
let marker5 = L.marker([35.715, 139.773]).addTo(map);
marker5.bindPopup("I went to Odaiba Ueno Park.");
