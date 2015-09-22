$( document ).ready(function() {
	console.log('have a pleasant day!');

	$('.addDVD').on('click', function() {
		alert('Yes!!!');
		$('.mediaForm').toggle();
	});

	$(window).resize(sizeContent);

	function sizeContent() {
		var newHeight = $("html").height() - $("#header").height() - $("#footer").height() + "px";
		$("#mediaInput").css("height", newHeight);
	}
		alert('Work!!!');

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
