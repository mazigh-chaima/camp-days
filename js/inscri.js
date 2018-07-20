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
var contact  = getInputVal('contact');
var country =getInputVal('country');
var adress =getInputVal('address');
var occupation= getInputVal('occupation');
    saveMessage(name,email,contact,country,adress,occupation);
    document.getElementById('form').reset();
}
// References the messages collection
var messagesRef = firebase.database().ref('messages');
function getInputVal(id){
    return document.getElementById(id).value;
}
// Save message to firebase
function saveMessage(name,email,contact,country,adress,occupation){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        contact:contact,
        country: country,
        adress:adress,
         occupation: occupation,

    });
  }

       