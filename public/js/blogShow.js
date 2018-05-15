var config = {
  apiKey: "AIzaSyC18bxhVaauMyqjk4fvZkiUZkCU5qB9mDc",
  authDomain: "udabuddy.firebaseapp.com",
  databaseURL: "https://udabuddy.firebaseio.com",
  projectId: "udabuddy",
  storageBucket: "gs://udabuddy.appspot.com/",
  messagingSenderId: "460323300752"
};
firebase.initializeApp(config);
var storage = firebase.storage();
var database = firebase.database();
initApp = function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // Please write your code inside here
      let params = (new URL(document.location)).searchParams;
      let post_id = params.get("post_id");
      var name= document.querySelector('#name');
      var title= document.querySelector('#title');
      var content=document.querySelector('#content');
      var userId = firebase.auth().currentUser.uid;   
      let uName = firebase.auth().currentUser.displayName;
      let userImgUrl = firebase.auth().currentUser.photoURL;         
      let userImg= document.querySelector('#userImg');
      database.ref('blog/'+post_id).on('value', (data) => {
        var store = data.val();
        name.innerHTML=`Article By ${store.name}`;
        title.innerHTML=`${store.title}`;
        content.innerHTML=`${store.text}`;
        userImg.src=`${store.imgUrl}`
        });
    var pathReference = storage.ref('blog/'+post_id);
    console.log(pathReference);
    pathReference.getDownloadURL().then((url)=>{
      var img = document.querySelector('#postImg');
      img.src=url;
    })

      var cmnt_bnt= document.querySelector('#cmnt_btn');
      cmnt_btn.addEventListener('click',()=>{
        var cmnt=document.querySelector('#cmnt');
        cmnt={
          cmnt:cmnt.value,
          userId:userId,
          uName:uName,
          timeStamp:new Date().getTime()
        }
        var post_ref = firebase.database().ref('blog/'+post_id+'/cmnt').push().set(cmnt);        
      });
      var cmnt_list=document.querySelector('.cmnt_list');
      database.ref('blog/'+post_id+'/cmnt').orderByChild('timeStamp').on('value',(data)=>{
        var store=data.val();
        for(var x in store){
          var z=store[x];
          var template=`<div class="col s12 m6">
          <div class="card">
            <div class="card-title">
              <span class="card-title">${z.uName}</span>
              <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">favorite</i></a>
            </div>
            <div class="card-content">
              <p>${z.cmnt}</p>
            </div>
          </div>
        </div>`;

        }
        cmnt_list.insertAdjacentHTML('afterbegin',template)
      })


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
