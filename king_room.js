
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC7TUu9KmW1tF3Q9YGGc18T6EePTrupQBU",
  authDomain: "kingstergram-1b0da.firebaseapp.com",
  databaseURL: "https://kingstergram-1b0da-default-rtdb.firebaseio.com",
  projectId: "kingstergram-1b0da",
  storageBucket: "kingstergram-1b0da.appspot.com",
  messagingSenderId: "961605303792",
  appId: "1:961605303792:web:176198abf8a27cbee43135",
  measurementId: "G-25L2QTP87W"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({

            purpose: "adding room name "
      });

      localStorage.setItem("room_name", room_name);

      window.location = "king_page.html";
}



function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;

                  console.log("room_name =" + Room_names);

                  row = "<div class = 'room_name' id = " + Room_names + "onclick = 'redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;


                  //End code
            });
      });
}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      Window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}