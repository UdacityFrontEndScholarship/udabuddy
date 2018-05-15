var config = {
  apiKey: "AIzaSyC18bxhVaauMyqjk4fvZkiUZkCU5qB9mDc",
  authDomain: "udabuddy.firebaseapp.com",
  databaseURL: "https://udabuddy.firebaseio.com",
  projectId: "udabuddy",
  storageBucket: "",
  messagingSenderId: "460323300752"
};
firebase.initializeApp(config);

var database = firebase.database();
initApp = function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // Please write your code inside here
      var show_id = document.querySelector('#show_id');
      let params = (new URL(document.location)).searchParams;
      let post_id = params.get("post_id");
      var name= document.querySelector('#name');
      var title= document.querySelector('#title');
      var content=document.querySelector('#content');
      console.log(post_id);
      var userId = firebase.auth().currentUser.uid;
      show_id.innerHTML=`The post id is ${post_id}`;
      database.ref(userId +'/blog/'+post_id).on('value', (data) => {
        var store = data.val();
        console.log(store);
        name.innerHTML=`User name is ${store.name}`;
        title.innerHTML=`Title of the post is ${store.title}`;
        content.innerHTML=`description of the post is ${store.text}`;


      });
    } else {
      // User is signed out.

    }
  }, function (error) {
    console.log(error);
  });
};

window.addEventListener('load', function () {
  initApp()
});
