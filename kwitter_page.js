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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
             function send(){
               msg = document.getElementById("msg").value;
               firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
                });
             
               document.getElementById("msg").value = "";
             }
          } });  }); }
    getData();
    function updatelike(msg_id){
          console.log("click on like button-" + message_id);
          button_id = message_id;
          likes = document.getElementById(button_id).value;
          updated_likes = number(likes) + 1;
          
          firebase.database().ref(room_name).child(message_id).update({
                like:updated_likes
          })
          }
          function Logout(){
                localStorage.removeItem("user_name");
                localStorage.removeItem("room_name");
                window.location.replace("kwitter.html")
          }
          