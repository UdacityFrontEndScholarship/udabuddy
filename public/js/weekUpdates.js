// this page contains js for weekly Updates
var config = {
    apiKey: "AIzaSyC18bxhVaauMyqjk4fvZkiUZkCU5qB9mDc",
    authDomain: "udabuddy.firebaseapp.com",
    databaseURL: "https://udabuddy.firebaseio.com",
    projectId: "udabuddy",
    storageBucket: "",
    messagingSenderId: "460323300752"
  };
  firebase.initializeApp(config);


  initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // Please write your code inside here
      } else {
        // User is signed out.
        window.location.replace('/');
      }
    }, function(error) {
      console.log(error);
    });
  };

  window.addEventListener('load', function() {
    initApp()
  });