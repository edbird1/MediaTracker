$( document ).ready(function() {
	console.log('have a pleasant day!');

	$('.addDVD').on('click', function() {
		console.log('Yes DVD!!!');
		$('#formDVD').toggle();
	});

	$('.addCD').on('click', function() {
		console.log('Yes CD!!!');
		$('#formCD').toggle();
	});

	$('.addBook').on('click', function() {
		console.log('Yes Book!!!');
		$('#formBook').toggle();
	});

	function sizeContent() {
		var docHeight = $(window).height();
		console.log ('docHeight = ' + docHeight);
		var headerHeight = $('#header').height();
		console.log ('headerHeight = ' + headerHeight);
		var footerHeight = $('#footer').height();
		console.log ('footerHeight = ' + footerHeight);
		var newHeight = docHeight - headerHeight - footerHeight - 2 + "px";
		$("#sidebar").css("height", newHeight);
	}

	$(window).resize(sizeContent());

	console.log('Work!!!');

});


/*var mediaInputHeight = $("mediaInput").height();
	$(".sidebar").height(mediaInputHeight);*/

/*
function showHide (name){
    obj = document.getElementById(name);
    alert("Suck It!!!");
    if (obj.style.visibility == "visible") {
        obj.style.visibility =  "hidden";
    } else {
        obj.style.visibility =  "visible"
    }
} */
