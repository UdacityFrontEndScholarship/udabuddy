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
  var uiConfig = {
    signInSuccessUrl: '/dashboard',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };

  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig);


  initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        window.location.replace('/dashboard');
        
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


(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
