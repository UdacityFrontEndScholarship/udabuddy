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
        var name=document.querySelector('.name');
        name.innerHTML=user.displayName;
        
        
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




var logOut = document.querySelector('#logOut');

logOut.addEventListener('click', () => {
  firebase.auth().signOut().then(() => {
    window.location.replace('/');
  });
});
