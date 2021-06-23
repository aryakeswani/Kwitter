
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBh-q830YW2eiBh9pUA0MBCkgDuVALJeiE",
  authDomain: "kwitter-97ee3.firebaseapp.com",
  databaseURL: "https://kwitter-97ee3-default-rtdb.firebaseio.com",
  projectId: "kwitter-97ee3",
  storageBucket: "kwitter-97ee3.appspot.com",
  messagingSenderId: "606911653007",
  appId: "1:606911653007:web:5b8eb63740226258f8bcfa"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}