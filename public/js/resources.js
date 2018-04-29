var config = {
  apiKey: "AIzaSyC18bxhVaauMyqjk4fvZkiUZkCU5qB9mDc",
  authDomain: "udabuddy.firebaseapp.com",
  databaseURL: "https://udabuddy.firebaseio.com",
  projectId: "udabuddy",
  storageBucket: "",
  messagingSenderId: "460323300752"
};
firebase.initializeApp(config);


initApp = function () {
//Please edit this scroll 
  // function scrollFunction() {
  //     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
  //         document.getElementById("navbar").style.top = "0";
  //     } else {
  //         document.getElementById("navbar").style.top = "-50px";
  //     }
  // }
  // window.onscroll = function() {scrollFunction()};
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // Please write your code inside here

      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem, {});

    } else {
      // User is signed out.
      window.location.replace('/');
    }
  }, function (error) {
    console.log(error);
  });
};



window.addEventListener('load', function () {
  initApp()
});
