var firebaseConfig = {
    apiKey: "AIzaSyCUwfEyTL4E8cQcPWCEs1DgknAAwh0mG2c",
    authDomain: "practice-203c9.firebaseapp.com",
    databaseURL: "https://practice-203c9-default-rtdb.firebaseio.com",
    projectId: "practice-203c9",
    storageBucket: "practice-203c9.appspot.com",
    messagingSenderId: "748134227378",
    appId: "1:748134227378:web:bc172bce6cfd4bcf2658ab"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }