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
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}