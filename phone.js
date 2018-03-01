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

$("#button_1").click(function() {
	$("#dial_line").val($("#dial_line").val() + "1");
})

$("#button_2").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "2");
})

$("#button_3").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "3");
})

$("#button_4").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "4");
})

$("#button_5").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "5");
})

$("#button_6").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "6");
})

$("#button_7").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "7");
})

$("#button_8").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "8");
})

$("#button_9").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "9");
})

$("#button_0").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "0");
})

$("#button_star").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "*");
})

$("#button_pound").click(function() {
	$("#dial_line").val($("#dial_line").val()+ "#");
})

$("#button_clear").click(function() {
	$("#dial_line").val("");
})
