










var config = {
    apiKey: "AIzaSyC18bxhVaauMyqjk4fvZkiUZkCU5qB9mDc",
    authDomain: "udabuddy.firebaseapp.com",
    databaseURL: "https://udabuddy.firebaseio.com",
    projectId: "udabuddy",
    storageBucket: "",
    messagingSenderId: "460323300752"
  };
  firebase.initializeApp(config);



<<<<<<< HEAD
=======
  // // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCsDJB4t23I_O0NGf9j49IBK86JdebzMlM",
  //   authDomain: "udabuddy-c7ab1.firebaseapp.com",
  //   databaseURL: "https://udabuddy-c7ab1.firebaseio.com",
  //   projectId: "udabuddy-c7ab1",
  //   storageBucket: "",
  //   messagingSenderId: "750838584343"
  // };
  // firebase.initializeApp(config);



>>>>>>> d5847cf... dashboard updated with basic ui
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


<<<<<<< HEAD
var clk_resources = document.querySelector('#resources');
clk_resources.addEventListener('click', function(){
  window.location.replace('/resources');
});

var clk_profile = document.querySelector('#profile');
clk_profile.addEventListener('click', function(){
  window.location.replace('/profile');
});



=======
>>>>>>> d5847cf... dashboard updated with basic ui
$(document).ready(function(){
  $(".dropdown-trigger").dropdown();
  $('.collapsible').collapsible();

});


CreateChart()






$(window).resize(function(){
   CreateChart();
});


function CreateChart() {
  //chart
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Activity');
    data.addColumn('number', 'Completed');
    data.addRows([
      ['Courses', 3],
      ['Posts', 1],
      ['Job Offers', 1],
      ['Tutorials', 1],
      ['Projects', 2]
    ]);

    // Set chart options
    var options = {'title':'Your activity on Udabuddy',
                   'width':'100%',
                   'height':'100%'};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }
}
