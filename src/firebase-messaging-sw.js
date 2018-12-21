

// import firebase from "https://www.gstatic.com/firebasejs/5.0.4/firebase.js";
importScripts("https://www.gstatic.com/firebasejs/5.0.4/firebase.js");

//importScripts("https://www.gstatic.com/firebasejs/5.0.4/firebase.js");


const config = {
  apiKey: "AIzaSyCASZS-zCX-_B_M31otOLUJwpScufQzofg",
  authDomain: "myapp-1777a.firebaseapp.com",
  databaseURL: "https://myapp-1777a.firebaseio.com",
  projectId: "myapp-1777a",
  storageBucket: "myapp-1777a.appspot.com",
  messagingSenderId: "973439709552"
};



try {
    firebase.initializeApp(config);
    firebase.messaging();
} catch (e) {
    console.log('Unable to Instantiate Firebase Messaing', e);
}