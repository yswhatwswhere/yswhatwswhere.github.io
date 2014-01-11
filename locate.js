var map;
var infowindow;
var sophia;
var siberia = new google.maps.LatLng(60, 105);
var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
var myOptions = {
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
var market;
var place;
/*var dist;
var distT;
var time;
var timeT;
var price;
var quality;
var isin;*/

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
  navigator.geolocation.getCurrentPosition(function(position) {
      sophia = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(sophia);
      var request = {
    location: sophia,
    radius: 30000,
    keyword: 'supermarket'
  };
  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }

    place = results;
/*    price = Array(results.length);
    for (var i = 0; i < price.length; i++)
        price[i] = Math.floor((Math.random()*30)+1);
    quality = Array(results.length);
    for (var i = 0; i < quality.length; i++)
        quality[i] = Math.floor((Math.random()*5)+1);
    isin = Array(results.length);
    for (var i = 0; i < price.length; i++)
        price[i] = 1;
    dist = Array(results.length);
    time = Array(results.length);
    distT = Array(results.length);
    timeT = Array(results.length);*/
    var dest = Array(results.length);
//    var orig = Array(results.length);
    for (var i = 0; i < results.length; i++) {
        dest[i] = results[i].geometry.location;
  //      orig[i] = sophia;
    }
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [sophia],
        destinations: dest,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, distInfo);
}

function distInfo(response, status) {
    market = Array(place.length);
    for (var i = 0; i < market.length; i++) {
        market[i] = {
                    name: place[i].name,
                    dist: response.rows[0].elements[i].distance.value,
                    distT: response.rows[0].elements[i].distance.text,
                    time: response.rows[0].elements[i].distance.value,
                    timeT: response.rows[0].elements[i].distance.text,
                    price: Math.floor((Math.random()*30)+1),
                    quality: Math.floor((Math.random()*5)+1),
                    isin: 1
                    }
    }
    market.sort(compare);
}

function compare(a, b) {
    return a.price - b.price;
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

  function handleNoGeolocation(errorFlag) {
    if (errorFlag == true) {
      alert("Geolocation service failed.");
      initialLocation = newyork;
    } else {
      alert("Your browser doesn't support geolocation. We've placed you in Siberia.");
      initialLocation = siberia;
    }
    map.setCenter(initialLocation);
  }

google.maps.event.addDomListener(window, 'load', initialize);

