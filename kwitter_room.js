var firebaseConfig = {
      apiKey: "AIzaSyCiuJmrSF9nbH2_hE5Nw1s3gJGXFqrl8ug",
      authDomain: "kwiter-1caf1.firebaseapp.com",
      databaseURL: "https://kwiter-1caf1-default-rtdb.firebaseio.com",
      projectId: "kwiter-1caf1",
      storageBucket: "kwiter-1caf1.appspot.com",
      messagingSenderId: "119974944518",
      appId: "1:119974944518:web:5955ffb262d2a596824887"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);
      row = "<div class='room_name' id="+Room_name+"oncloick='redirectToRoomName(this.id)'.#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
      room_name =document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            pupose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location ="index.html";
}
