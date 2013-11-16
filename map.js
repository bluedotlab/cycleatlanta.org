mapping = {
  waypoints: [],
  routeLayer: {},

  initialize: function() {
    map = L.map('map').setView([33.754269, -84.387493], 13);
    var apiKey = 'd9c90387c1314bc49a6922344ab43bc1';
    L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OSM Cycle Map</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18
    }).addTo(map);
  },

  click: function() {
    map.on('click', addWaypoint);
  },

  updateDirections: function() {
    dir = MQ.routing.directions();
    dir.route({
        locations: mapping.waypoints,
        options: {},
    }); 
    mapping.routeLayer = MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true
    });
    map.addLayer(mapping.routeLayer);
  },

  removeDirections: function() {
    for (var layerid in mapping.routeLayer._layers) {
      map.removeLayer(mapping.routeLayer._layers[layerid]);
    }
  },
}
if (typeof window.jQuery != "undefined") {
  jQuery(mapping.initialize);
  jQuery(mapping.click);
}

function addWaypoint(e) {
  var position = {latLng: { lat: e.latlng.lat, lng: e.latlng.lng}};
  mapping.waypoints.push(position);
  if (mapping.waypoints.length == 1) {
    mapping.startMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  }
  else if (mapping.waypoints.length > 1) {
    if (mapping.waypoints.length > 2) jQuery(mapping.removeDirections);
    jQuery(mapping.updateDirections);
  }
}
