// var config = {
//     apiKey: "AIzaSyDvUqKYPl3rU4SIPAX7rzYLJ-Gkn0bhDZU",
//     authDomain: "project1-8133a.firebaseapp.com",
//     databaseURL: "https://project1-8133a.firebaseio.com",
//     projectId: "project1-8133a",
//     storageBucket: "project1-8133a.appspot.com",
//     messagingSenderId: "738174706840"
//   };
//   firebase.initializeApp(config);
//   var database = firebase.database();
//   $("#add-strain-btn").on("click", function(event) {
//     event.preventDefault();
//     var strainName = $("#strain-name-input").val().trim();
//     database.ref().push(strainName);
//     alert("Strain successfully added");
//     $("#strain-name-input").val("");
// 	var queryURL = "https://www.cannabisreports.com/api/v1.0/strains/search/" +
//         strainName;
//   });
//   database.ref().on("child_added", function(childSnapshot) {
//     console.log(childSnapshot.val());
//     var strainName = childSnapshot.val().strainName;
//     var strainSpecies = #;
//     var strainEffect = #;
//     var strainPicture = #e;
//     console.log(strainName);
//     console.log(strainSpecies);
//     console.log(strainEffect);
//     console.log(strainPicture);
//     var newRow = $("<tr>").append(
//       $("<td>").text(strainName),
//       $("<td>").text(strainSpecies),
//       $("<td>").text(strainEffect),
//       $("<td>").text(strainPicture),
//     );
//     $("#strain-table > tbody").append(newRow);
//   }); 
  
    var map, infoWindow;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
