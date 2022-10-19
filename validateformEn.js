function validateForm() {
    name =  document.getElementById('name').value;
   if (name == "") {
       document.getElementById('status').innerHTML = "Place your name";
       return false;
   }
   var email =  document.getElementById('email').value;
   if (email == "") {
       document.getElementById('status').innerHTML = "Place an email";
       return false;
   } else {
       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(!re.test(email)){
           document.getElementById('status').innerHTML = "Wrong email";
           return false;
       }
   }
   var subject =  document.getElementById('subject').value;
   if (subject == "") {
       document.getElementById('status').innerHTML = "Place your cell phone number";
       return false;
   }
   var message =  document.getElementById('message').value;
   if (message == "") {
       document.getElementById('status').innerHTML = "Inform us of your query";
       return false;
   }
   
   document.getElementById('status').innerHTML = "Sending...";
   document.getElementById('contact-form').submit();
   

   };
