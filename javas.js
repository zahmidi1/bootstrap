$(document).ready(function(){
    $('.navbar-toggler').click(function(){
$('.collapse').slideToggle()
    });
})


  
      
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        Host : "smtp.gmail.com",
        Username : "zahmidi",
       
        To : 'abderahman.zahmidi.solicode@gmail.com',
        From : "abderahmanzahmidi@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
       alert("oky")
    );

 
  
