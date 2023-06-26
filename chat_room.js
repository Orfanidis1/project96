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
    document.getElementById("user_name").innerHTML = "Welcome "+user_name;

    function addRoom(){
      room_name = document.getElementById("room_name").value;
      console.log(room_name)
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "letschat_page.html";
    }

    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    console.log(Room_names);
    //Start code
    console.log("Room name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
    //End code
    });});}
    getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}