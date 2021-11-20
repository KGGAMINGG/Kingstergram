//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name");

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name : user_name, 
messege : msg, 
like : 0 
});
 document.getElementById("msg").value = " ";


}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log( firebase_messege_id );     
console.log( messege_data ); 
name = messege_data['name'];
messege = messege_data['messege'];
like = messege_data['like'];

name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png' ></h4>";
messege_with_tag = "<h4 class = 'messege_h4'>" + messege + "</h4>";
like_button_tag = "<button class = 'btn btn-warning' id = "+firebase_message_id+" value = "+like+" onclick = 'updatelike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> like : " + like + "</span> </button> <hr>";
row = name_with_tag + messege_with_tag +like_button_tag + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
console. log ("clicked on like button - "
+ message_id);
button_id = message_id;
likes = document. getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console. log (updated_likes);
firebase.database(). ref (room_name) .child(message_id).update({
like : updated_likes
});

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
