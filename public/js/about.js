// This page contains js for about page
  // Initialize Firebase
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
        
      }
    }, function(error) {
      console.log(error);
    });
  };

  window.addEventListener('load', function() {
    initApp()
  });

  $(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll<60){
      $('nav').attr('style','background-color: transparent !important');
    }else{
      $('nav').attr('style','background-color: rgba(89, 164, 196, .8) !important');
    }
  });