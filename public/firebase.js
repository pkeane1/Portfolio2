var firebaseConfig = {
    apiKey: "AIzaSyCRMTYGgjBq7HjNuUXyTmwEFIGo5mrjuxs",
    authDomain: "portfolio-b0c39.firebaseapp.com",
    databaseURL: "https://portfolio-b0c39.firebaseio.com",
    projectId: "portfolio-b0c39",
    storageBucket: "portfolio-b0c39.appspot.com",
    messagingSenderId: "501100126504",
    appId: "1:501100126504:web:bc038620b91e6781"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messageRef = firebase.database().ref('messages');



  $("#sendMessageButton").on("click",function(e){
      e.preventDefault();
      const name = $("#name").val().trim();
      const email = $("#email").val().trim();
      const number = $("#phone").val().trim();
      const message = $("#message").val().trim();
      console.log(name,email)

      saveMessage(name,email,number,message);
    //alert messge has been sent  
      document.querySelector("#success").style.display = "block";

      setTimeout(function(){
        document.querySelector("#success").style.display = "none"
      },3000);

      document.getElementById("contactForm").reset();
})

function getinputVal(id) {
  return document.getElementById(id).value;

}


function saveMessage(name,email,number,message){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name:name,
    email:email,
    number:number,
    message:message
  })
}
