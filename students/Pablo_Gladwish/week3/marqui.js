

// fix test colors for IE and restart marquee
function setText() {
	if (!isWebkit())
		$(".text").css({
			"color" : hashColor(getCurrentProject().css("background-color")),
			"text-shadow" : "2px 2px 0 #0000ff, -2px -2px 0 #0000ff, 2px -2px 0 #0000ff, -2px 2px 0 #0000ff, 2px 2px 0 #0000ff"
		});
	
	restartInterval(getCurrentProject());
}

function bindReadButton() {
	var readSpan = $("#read span");
	$("#read").bind("click", function(e) {
		$(".text").toggleClass("visible");
		if (readSpan.html() === "read")
			readSpan.html("look");
		else
			readSpan.html("read");
	});
}

function restartInterval(project) {
	//start new marquee
	setMarqueeTransition(project, false);
	startMarquee(project);

	//remove old interval
	if (typeof interval !== 'undefined')
		clearInterval(interval);

	interval = setInterval(function(){

		//when marquee is scrolled to the end
		stopMarquee(project, true);
		setTimeout(function() {

			//repeat from start
			setMarqueeTransition(project, true);
			startMarquee(project);
		}, 1);
	}, getMarqueeDuration(project)*1000);
}

//set marquee parameters
function setMarqueeTransition(project, interval) {
	var text = project.find(".text");
	text.css("transition", "transform " + getMarqueeDuration(project) + "s linear, opacity " + (interval ? 0 : 1) + "s linear");
	text.css("-webkit-transition", "-webkit-transform " + getMarqueeDuration(project) + "s linear, opacity " + (interval ? 0 : 1) + "s linear");
}

function startMarquee(project) {
	var text = project.find(".text");
	var width = -1 * (text.width() + $(window).width());
	text.css("opacity", "1");
	text.css("transform", "translate(" + width + "px, -50%)");
	text.css("-webkit-transform", "translate(" + width + "px, -50%)");
}

//scroll marquee back to the start
function stopMarquee(project, interval) {
	var text = project.find(".text");
	text.css("transition", "transform " + (interval ? 0 : 1) + "s linear, opacity " + (interval ? 0 : 1) + "s linear");
	text.css("-webkit-transition", "-webkit-transform " + (interval ? 0 : 1) + "s linear, opacity " + (interval ? 0 : 1) + "s linear");
	text.css("opacity", "0");
	text.css("transform", "translate(0%, -50%)");
	text.css("-webkit-transform", "translate(0%, -50%)");
}

function getMarqueeDuration(project) {
	var width = project.find(".text").width() + $(window).width();
	var duration = width / 300;
	return duration;
}