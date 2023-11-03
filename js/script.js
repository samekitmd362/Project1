jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  document.querySelector('form').addEventListener('submit', function(event) {
    var emailInput = document.querySelector('input[type="email"]');
    var email = emailInput.value;
   
    if (!validateEmail(email)) {
       alert('Please enter a valid email address.');
       event.preventDefault();
    }
   });
});
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
 } 
 var form = document.getElementById('form');

function alertFunction() {
    if (form.checkValidity()) {
        alert("Thanks for Signing Up! See you at the Elbertsons soon!");
    }
}