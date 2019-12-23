function validateInfo() {
	var customerName = document.forms["contactForm"]["nameInput"].value;
	var customerEmail = document.forms["contactForm"]["emailInput"].value;
	var customerPhone = document.forms["contactForm"]["phone"].value;
	// To verify input of at least one day to contact the user
	// We must first store an array of the checkbox elements, then
	// parse through that array for at least one checked box
	// If no boxes are checked, print an error, else proceed
	var checks = document.getElementsByName("days");
	var daysChecked = 0;
	
	// Scan each required field (Name, email, phone number, and best contact days
	// for valid input. Prompt user if information is missing
	if (customerName == "") {
		alert("Please provide your name");
		document.forms["contactForm"]["nameInput"].focus();
		return false;
	}
	
	if (customerEmail == "") {
		alert("Please provide a valid email address (ex. name@example.com)");
		document.forms["contactForm"]["emailInput"].focus();
		return false;
	}
	
	if (customerPhone == "") {
		alert("Please provide a properly formatted US telephone number (ex. 1-(555)-555-555)");
		document.forms["contactForm"]["phone"].focus();
		return false;
	}
	
	for (var i = 0; i < checks.length; i++) {
		if(checks[i].checked) {
			daysChecked++;
		}
	}
	
	if (daysChecked < 1){
		alert("Please check at least one day to contact you");
		document.forms["contactForm"]["monday"].focus();
		return false;
	}
	
	alert("Thank you for your inquiry! We'll get back to you as soon as possible");
	return false;
}
