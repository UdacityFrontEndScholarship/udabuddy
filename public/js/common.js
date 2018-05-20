initApp = function() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        // Please write your code inside here
      var logOut = document.querySelector('#logOut');        
        logOut.addEventListener('click', () => {
            firebase.auth().signOut().then(() => {
              window.location.replace('/');
            });
          });
        
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