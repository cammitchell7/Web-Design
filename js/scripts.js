/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// The JS to validate an email address
function checkmail() {
  var email = document.getElementById('signuptop');
	if(email.value=='')
	{
		 $('.cst-error').text('enter  email').show().addClass('cst-danger').removeClass('cst-success');
		 return false;
	}
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
    $('.cst-error').text('invalid email').show().addClass('cst-danger').removeClass('cst-success');

    email.focus;
    return false;
 }
 else{
	  $('.cst-error').text('succes').show().addClass('cst-success').removeClass('cst-danger');
	 }
}
