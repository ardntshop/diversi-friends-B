'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
}

$('.connectionRequestButtons').click(function() {
	var name = $(this).attr("name");
	$.get('/showConnectionRequest?name='+name, null);
	$(this).hide();
	alert("Your Connect Request has been sent!");
	alert("test for AB test click");
	ga("send", "event", "connectionRequestButtons", "click");
});

$('.acceptConnection').click(function() {
	var name = $(this).attr("name");
	$.get('/acceptConnection?name='+name, acceptConnectionCallback);
	$(this).parent().parent().hide();
	alert("You have accepted the connection! They will be added to your friends list.");
});


$('.hideProfile').click(function() {
	var name = $(this).attr("name");
	$.get('/hideMatch?name='+name, hideMatchCallback);
	$(this).parent().parent().hide();
});

$('.hideRequest').click(function() {
	var name = $(this).attr("name");
	$.get('/hideRequest?name='+name, hideRequestCallback);
	
	$(this).parent().parent().hide();
});

$('.hideFriend').click(function() {
	var name = $(this).attr("name");
	$.get('/hideFriend?name='+name, hideFriendCallback);
	
	$(this).parent().parent().hide();
});

$('.updatePersonalStatement').click(function(){
	var personalStatement = $(this).attr("personalStatement");
	$.get('/updatePersonalStatement='+personalStatement, updatePersonalStatementCallback);
});









//callbacks
function hideMatchCallback(result){
}

function hideRequestCallback(result){
}

function acceptConnectionCallback(){	
}

function hideFriendCallback(){	
}

function updatePersonalStatementCallback(){
}



$('.removeFriend').click(function() {
	alert("You have removed the friend from your list.");
});

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}