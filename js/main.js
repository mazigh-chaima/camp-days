
function myMap()
{
  myCenter=new google.maps.LatLng(41.878114, -87.629798);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}


function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDA1MtL8TX3JbtEQ5ijKM7AfvLkcpUldBk",
    authDomain: "camp-days.firebaseapp.com",
    databaseURL: "https://camp-days.firebaseio.com",
    projectId: "camp-days",
    storageBucket: "",
    messagingSenderId: "1015701760329"
  };
firebase.initializeApp(config);
// Get the modal



document.getElementById("form").addEventListener("submit",submitForm);
function submitForm(e){
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var email  = getInputVal('email');
var message  = getInputVal('message');

    saveMessage(name,email,message);
    document.getElementById('form').reset();
}
// References the messages collection
var messagesRef = firebase.database().ref('contact');
function getInputVal(id){
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name,email,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        message:message,


    });
  }

       