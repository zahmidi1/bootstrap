$(document).ready(function(){
    $('.navbar-toggler').click(function(){
$('.collapse').slideToggle()
    });
})


  function send(event) {
      event.preventDefault();           
      Email.send({
        name:document.getElementById('name').value,    
        Host : "smtp.gmail.com",
        Username : "abderahman.zahmidi.solicode@gmail.com",
        Password : "abdelZ1997",
        To : "type u'r email id",
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : document.getElementById('message').value
        }).then(function(response){ 
         if (response == 'OK') {              
             alert("Mail sent succeessfully");
          } else {
              throw new Error("Error: " + response.statusText);
          } 
       });

  }    
