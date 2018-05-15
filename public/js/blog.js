//This page contains js for blog
var config = {
  apiKey: "AIzaSyC18bxhVaauMyqjk4fvZkiUZkCU5qB9mDc",
  authDomain: "udabuddy.firebaseapp.com",
  databaseURL: "https://udabuddy.firebaseio.com",
  projectId: "udabuddy",
  storageBucket: "gs://udabuddy.appspot.com/",
  messagingSenderId: "460323300752"
};
firebase.initializeApp(config);
var database = firebase.database();
var storage = firebase.storage();

initApp = function () {
  $(document).ready(function () {
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }

    );
    // START OPEN
    $('.modal').modal();
    M.updateTextFields();
  });


  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // Please write your code inside here
      var elem = document.querySelector('.sidenav');
      var instance = M.Sidenav.init(elem, {});
      var title = document.querySelector('#title');
      var content = document.querySelector('#textarea1');
      var list = document.querySelector('.post_list');
      var post_btn = document.querySelector('#post');
      let name = firebase.auth().currentUser.displayName;
      let imgUrl = firebase.auth().currentUser.photoURL;
      var userId = firebase.auth().currentUser.uid;
      var fileButton = document.getElementById('fileBtn');
      var uploader = document.getElementById('uploader');
      post_btn.addEventListener('click', () => {
        let blog = {
          name: name,
          title: title.value,
          text: content.value,
          comment: {},
          likes: {},
          tags: {},
          timeStamp: new Date().getTime(),
          imgUrl:imgUrl
        };
        fileButton.addEventListener('change', function(e){
          var file = e.target.files[0];
          console.log(file);
         });
        var post_ref = firebase.database().ref('blog/').push().set(blog);
      var storageRef = firebase.storage().ref(`blog/${post_ref}`).child(file.name);
      var task = storageRef.put(file);
      task.on('state_changed',(snapshot)=> {
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        uploader.value = percentage;
        if(firebase.storage.TaskState.RUNNING==snapshot.state)
        console.log('q');
        // document.location.reload();

      }, function error(err) {
        console.log(err);

      },function complete() {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL);
      });
    });


// window.open('/blog', '_self');

      });

      database.ref('blog/').orderByChild('timeStamp').on('value', (data) => {
        var store = data.val();
        console.log(store);
        var template;
        for (var x in store) {
          console.log(store[x])
          var z = store[x];
          template =
            `<div class="col s12 m12 ">

              <div class="card horizontal">
                <div class="card-image">
                  <img src="https://images.unsplash.com/photo-1485617698980-9bdd50acca0a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=9c8eac19af585fdab019bc58fb3d12a2">

                </div>
                 <div class="card-stacked">
                  <div class="card-content">
                    <span class="card-title">${z.title}</span>
                    <p>${z.text}
                      </p>
                  </div>
                  <div class="card-action">
                      <a href="/blogShow?post_id=${x}"><i class="material-icons grey-text">open_in_new</i></a>

                                <a href="#" class="right grey-text"><i class="material-icons grey-text">more_horiz</i></a>

                  <a href="#" class="right grey-text"><i class="material-icons ">share</i></a>
                   <a href="#" class="right grey-text"><i class="material-icons">comment</i>45</a>

                  <a href="#" class="right grey-text"><i class="material-icons">star</i>344</a>
                  </div>
                </div>
              </div>
            </div>`;
          list.insertAdjacentHTML('afterbegin', template);
        }

      });



    }

     else {
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
