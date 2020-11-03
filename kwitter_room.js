var firebaseConfig = {
    apiKey: "AIzaSyAMZtg2Xxwx9Zo_s0xbpB5hj1qaAzAt7X8",
    authDomain: "twitter-992d3.firebaseapp.com",
    databaseURL: "https://twitter-992d3.firebaseio.com",
    projectId: "twitter-992d3",
    storageBucket: "twitter-992d3.appspot.com",
    messagingSenderId: "510127775373",
    appId: "1:510127775373:web:0ac4eee10506212d548cc4",
    measurementId: "G-D5XP6QQ8CN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot)
   { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
   { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }
  