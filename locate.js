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
/*var dist;
var distT;
var time;
var timeT;
var price;
var quality;
var isin;*/
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
  if (status == google.maps.places.PlacesServiceStatus.OK) {
/*    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }*/
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

function onUpdate() {
    address = document.getElementById('address').value;
    if(address != currAddr) {
        currAddr = address;
        geocoder.geocode( { 'address': address}, changeToThere); 
    }
    else
        updateResults();
}

function changeToThere(results, status) {
    currLoc = results[0].geometry.location;
    service.nearbySearch({
           location: currLoc,
           radius: 20000,
           keyword: 'supermarket'
           }, callback);
}

function updateResults() {
    list = document.getElementById('markets');
    list.innerHTML = "";
    setAllMap(null);
    markers = [];
    time = document.getElementById('time').value;
    distance = document.getElementById('distance').value;
    budget = document.getElementById('budget').value;
    quality = getQuality();
    var n = 0;
    for (var i = 0; i < market.length; i++) {
        if ((market[i].dist <= distance) && (market[i].time <= time) && (market[i].price <= budget) && (market[i].quality >= quality)) {
            var newItem = document.createElement("li");
            newItem.innerHTML = "<span itemprop=\"name\">"+market[i].name+"</span>"+", "+market[i].distT+", "+market[i].timeT+", "+market[i].price+" &euro;";
            newItem.setAttribute("itemscope", "true");
            newItem.setAttribute("itemtype", "http://schema.org/LocalBusiness");
            list.appendChild(newItem);
            createMarker(market[i].info);
            n++;
            if (n == 1)
                map.setCenter(market[i].info.geometry.location);
        }
        if (n == 3)
            break;
    }
    setAllMap(map);
}

function getQuality() {
    var checked = false;
    var q = 0;

    if(document.getElementById('radio1').checked)
        q = 5;
    if(document.getElementById('radio2').checked)
        q = 4;
    if(document.getElementById('radio3').checked)
        q = 3;
    if(document.getElementById('radio4').checked)
        q = 2;
    if(document.getElementById('radio5').checked)
        q = 1;
    
    return q;
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

