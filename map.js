mapping = {
  waypoints: [
    '100 cherokee avenue, atlanta ga',
    'anatolia cafe, atlanta ga',
  ],

  initialize: function() {
    map = L.map('map');
    var apiKey = 'd9c90387c1314bc49a6922344ab43bc1';
    L.tileLayer('http://{s}.tile.cloudmade.com/'+apiKey+'/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
    }).addTo(map);
    map.locate({setView: true, maxZoom: 12});
    map.on('locationfound', function(e) {
      map.setZoom(13);
    });
  },

  click: function() {
    map.on('click', addWaypoint);
  },

  addDirections: function() {
    dir = MQ.routing.directions();
    dir.route({
        locations: mapping.waypoints
    }); 
    map.addLayer(MQ.routing.routeLayer({
        directions: dir,
        fitBounds: true
    }));
  }
}
if (typeof window.jQuery != "undefined") {
  jQuery(mapping.initialize);
  jQuery(mapping.click);
  jQuery(mapping.addDirections);
}

function addWaypoint(e) {
  var position = {latLng: { lat: e.latlng.lat, lng: e.latlng.lng}};
  mapping.waypoints.push(position);
  jQuery(mapping.addDirections);
}
