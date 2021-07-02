var firebaseConfig = {
      apiKey: "AIzaSyCKxK-_vYvE0ikNNavHNTwJfYciJ7Pg3B8",
      authDomain: "lets-chat-ce40a.firebaseapp.com",
      databaseURL: "https://lets-chat-ce40a-default-rtdb.firebaseio.com",
      projectId: "lets-chat-ce40a",
      storageBucket: "lets-chat-ce40a.appspot.com",
      messagingSenderId: "79953368245",
      appId: "1:79953368245:web:f53e49b203d348612e1afc",
      measurementId: "G-T8YFP5NFLV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names+"<div><hr>"
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}