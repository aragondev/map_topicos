//<script>

//alert("Si funciona");

//Codigo de javascript
var markers = [];
var map;
var markersCircle = [];

function initMap() {
  var latitud = -17.784224488634607;
  var longitud = -63.18161043286134;

  var coordenas = {
    lng: longitud,
    lat: latitud,
  };

  var verticesPoligono = [
    { lat: -17.7876979434141, lng: -63.186266747711194 },
    { lat: -17.786267705509303, lng: -63.17746910214235 },
    { lat: -17.77927980708502, lng: -63.1785419857483 },
    { lat: -17.779647598027015, lng: -63.18605217099 },
    //Aqui termina
    { lat: -17.7876979434141, lng: -63.186266747711194 },
  ];

  generarMapa(coordenas, verticesPoligono);
}




window.initMap = initMap;

function generarMapa(coordenadas, verticesP) {
  map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 15, //Antes era 12 --max 18
    center: new google.maps.LatLng(coordenadas.lat, coordenadas.lng),
  });

  var vertices = new google.maps.Polygon({
    paths: verticesP,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    editable:true,

  });

  vertices.setMap(map);

  var circulo = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    center: coordenadas,
    radius: 100,
    map: map,
    clickable: false,
    editable: true,
  });




  addMarker(new google.maps.LatLng(coordenadas.lat, coordenadas.lng));
  map.addListener("click", function (event) {
    if (markers.length >= 1) {
      deleteMarkers();
    }

    addMarker(event.latLng);
    document.getElementById("latitud").value = event.latLng.lat();
    document.getElementById("longitud").value = event.latLng.lng();

    // var coordenadasS = {
    //   lng: event.latLng.lng(),
    //   lat: event.latLng.lat(),
    // };
    //
    // var Newcirculo = new google.maps.Circle({
    //   strokeColor: "#FF0000",
    //   strokeOpacity: 0.8,
    //   strokeWeight: 2,
    //   fillColor: "#FF0000",
    //   fillOpacity: 0.35,
    //   center: coordenadasS,
    //   radius: 100,
    //   map: map,
    //   clickable: false,
    //   editable: true,
    // });
  });

}



function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  markers.push(marker);

  var coordenadasS = {
    lng: location.lng(),
    lat: location.lat(),
  };

  var Newcirculo = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    center: coordenadasS,
    radius: 100,
    map: map,
    clickable: false,
    editable: true,
  });

  markersCircle.push(Newcirculo);

}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    markersCircle[i].setMap(map);
  }

}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
  markersCircle =[];
}
//</script>
