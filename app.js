var myApp = angular.module("myApp", []);
myApp.controller("myCtrl", function($scope, $http) {
  $scope.hide = true;
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    projectId: "<PROJECT_ID>",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>"
  };
  $scope.hideTextField = true;
  $scope.messageList = false;
  var messages = [];
  $scope.load = function() {
    var ele = document.getElementById("toggle");
    if ($scope.hide) {
      $scope.hide = false;
      ele.innerHTML = "Read Less";
    } else {
      $scope.hide = true;
      ele.innerHTML = "Read More";
    }
  };
  $scope.sendMail = function() {
    var name, email, message;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    data = {
      name: name,
      email: email,
      message: message
    };
    var config = "contenttype";
    var req = {
      method: "POST",
      url: "http://localhost:8081/sendmain",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: data
    };
    $http(req).then(
      function() {
        alert("Message sent");
      },
      function() {
        console.log(response);
        alert("Send Failed");
      }
    );
  };
});
