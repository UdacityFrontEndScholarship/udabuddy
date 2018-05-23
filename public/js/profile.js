// Profile Tabs Initialization
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
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // Please write your code inside here
      const tabs = document.querySelector(".tabs");
      const instance = M.Tabs.init(tabs);
      var elem = document.querySelectorAll('.modal');
      var ins = M.Modal.init(elem, {});
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

$(function(){
  $('.sidenav').sidenav();
})
