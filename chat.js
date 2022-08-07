// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCTS6AOI0hWPfi-ePBpM-L7vK8ip5pzq6A",
    authDomain: "letschat-web-app-ab7a7.firebaseapp.com",
    databaseURL: "https://letschat-web-app-ab7a7-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-ab7a7",
    storageBucket: "letschat-web-app-ab7a7.appspot.com",
    messagingSenderId: "146274975777",
    appId: "1:146274975777:web:612b73a1aab7fc891de360"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



