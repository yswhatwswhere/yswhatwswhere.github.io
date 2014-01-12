var geocoder;
var map;
var infowindow;
var currLoc;
var siberia = new google.maps.LatLng(60, 105);
var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
var myOptions = {
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
var market;
var place;
var markers = [];
var currAddr = "";
var service;

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), myOptions);
  geocoder = new google.maps.Geocoder();
  navigator.geolocation.getCurrentPosition(function(position) {
      currLoc = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(currLoc);
      var request = {
    location: currLoc,
    radius: 20000,
    keyword: 'supermarket'
  };
  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
    }, function() {
      handleNoGeolocation(browserSupportFlag);
    });
}

function callback(results, status) {

    place = results;
   var dest = Array(results.length);
    for (var i = 0; i < results.length; i++)
        dest[i] = results[i].geometry.location;
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [currLoc],
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
                    info: place[i],
                    name: place[i].name,
                    dist: response.rows[0].elements[i].distance.value,
                    distT: response.rows[0].elements[i].distance.text,
                    time: response.rows[0].elements[i].duration.value,
                    timeT: response.rows[0].elements[i].duration.text,
                    price: Math.floor((Math.random()*35)+5),
                    quality: Math.floor((Math.random()*5)+1),
                    isin: 1
                    }
    }
    market.sort(compare);
    updateResults();
}

function updateResults() {
    list = document.getElementById('markets');
    list.innerHTML = "";
    setAllMap(null);
    markers = [];
    var n = 0;
    for (var i = 0; i < market.length; i++) {
            var newItem = document.createElement("li");
            newItem.innerHTML = "<span itemprop=\"name\">"+market[i].name+"</span>"+", "+market[i].distT+", "+market[i].timeT;
            newItem.setAttribute("itemscope", "true");
            newItem.setAttribute("itemtype", "http://schema.org/LocalBusiness");
            list.appendChild(newItem);
            createMarker(market[i].info);
            n++;
            if (n == 1)
                map.setCenter(market[i].info.geometry.location);
        if (n == 3)
            break;
    }
    setAllMap(map);
}

function compare(a, b) {
    return a.dist - b.dist;
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  markers.push(marker);
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

function setAllMap(themap) {
     for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(themap);
  }
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

