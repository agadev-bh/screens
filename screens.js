function panel(urls, time){
var newFrame = document.getElementById("targetFrame");

newFrame.style["width"] = "100%";
newFrame.style["height"] = "100%";

document.getElementsByTagName("body")[0].style["margin"] = "0px";
document.getElementsByTagName("body")[0].style["padding"] = "0px";

	var counter=0;

	var rotateScreens = function () {
		//Time for rotating the screens
		var timeWait = time * 1000;
		var customTime = 120; //Custom time in seconds

		//Restart the counter
		if(counter == urls.length){
			counter=0;
		}

		//Custom time for a screen
		if(counter == 50){
			timeWait = customTime * 1000;
		}

		newFrame.src = urls[counter];
		setTimeout(rotateScreens,timeWait);
		counter++;
	}
	rotateScreens();
}
