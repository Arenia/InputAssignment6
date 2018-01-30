$(document).ready(function() { //do on load document
		$("#dial_page").show(); //show element with ID "dial_page"
		$("#add_page").hide(); // hide element with ID "otherElement"
		$("#contacts_page").hide(); //hide element with ID "contact_page"
});

$("#dial_butt").click(function() { // when "dial_butt" is clicked
	$("#dial_page").show(); // show dial page
	$("#contacts_page").hide(); // hide contact page
	$("#add_page").hide();	// hide add page
});

$("#add_butt").click(function() { // when "add_butt" is clicked
	$("#dial_page").hide();	// hide dial page
	$("#contacts_page").hide(); // hide contact page
	$("#add_page").show(); // show add page
});

$("#contact_butt").click(function() { // when "contact_butt" is clicked
	$("#dial_page").hide(); // hide dial page
	$("#contacts_page").show(); // show contact page
	$("#add_page").hide();	// hide add page
});