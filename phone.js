$(document).ready(function() { //do on load document
		$("#dial_page").show(); //show element with ID "dial_page"
		$("#add_page").hide(); // hide element with ID "otherElement"
		$("#contacts_page").hide(); //hide element with ID "contact_page"
		$("#gesture_page").hide();
		$("#gest_out").text("Ready");
});

$("#dial_butt").click(function() { // when "dial_butt" is clicked
	$("#dial_page").show(); // show dial page
	$("#contacts_page").hide(); // hide contact page
	$("#add_page").hide();	// hide add page
	$("#gesture_page").hide();
});

$("#add_butt").click(function() { // when "add_butt" is clicked
	$("#dial_page").hide();	// hide dial page
	$("#contacts_page").hide(); // hide contact page
	$("#add_page").show(); // show add page
	$("#gesture_page").hide();
});

$("#contact_butt").click(function() { // when "contact_butt" is clicked
	$("#dial_page").hide(); // hide dial page
	$("#contacts_page").show(); // show contact page
	$("#add_page").hide();	// hide add page
	$("#gesture_page").hide();
});

$("#gesture_butt").click(function() {
	$("#dial_page").hide();
	$("#contacts_page").hide();
	$("#add_page").hide();
	$("#gesture_page").show();
})


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

var downX = 0;
var downY = 0;

$("#gest_area").mousedown(function(event) {
	$("#gest_out").text("Mouse Down");
	downX = event.pageX;
	downY = event.pageY;
})

$("#gest_area").mouseup(function(event) {
	upX = event.pageX;
	upY = event.pageY;	
	splitX = upX - downX;
	splitY = downY - upY;
	angle = Math.abs(splitY+1)/Math.abs(splitX+1);
	alert(angle);
	if (splitX > 0 && angle < 1) {
		$("#gest_out").text("Swipe Right");
	}
	else if (splitX < 0 && angle < 1) {
		$("#gest_out").text("Swipe Left");
	}
	else {
		if(splitY > 0) {
			$("#gest_out").text("Swipe Up");
		}
		else if (splitY < 0) {
			$("#gest_out").text("Swipe Down");
		}
		else {
			$("#gest_out").text("Mouse Up");
		}
	}
})