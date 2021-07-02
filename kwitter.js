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
function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location = "kwitter_room.html";
}