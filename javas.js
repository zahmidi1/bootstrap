$(document).ready(function(){
    $('.navbar-toggler').click(function(){
$('.collapse').slideToggle()
    });
})


 

     Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        Host : "smtp.gmail.com",
        Username : "abderahmanzahmidi@gmail.com",
       
        To : 'abderahman.zahmidi.solicode@gmail.com',
        From : Inputs.elements["email"].valus,
        Subject : Inputs.elements["subject"].valus,
        Body : Inputs.elements["message"].valus,
    }).then(msg => alert("oky"));


   

 
  
