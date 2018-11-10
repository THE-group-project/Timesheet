
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8sTZD0VxJGmfjAchS311q8wBVedXnmeU",
    authDomain: "esauer-project1.firebaseapp.com",
    databaseURL: "https://esauer-project1.firebaseio.com",
    projectId: "esauer-project1",
    storageBucket: "esauer-project1.appspot.com",
    messagingSenderId: "380680122253"
  };
  firebase.initializeApp(config);
    var database = firebase.database();
    
  $("#add-employee-btn").on("click", function(event){
      event.preventDefault();
 
  var empName = $("#employee-name").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = $("#start-input").val().trim();
  var empRate = $("#rate-input").val().trim();

  var newEmp = {
      name: empName,
      role: empRole,
      start: empStart,
      rate: empRate
  };
  console.log(newEmp);
  console.log("click");
  database.ref().push(newEmp);
});

