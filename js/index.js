
function showText(){

	function typeWriter() {
	  if (i < txt.length) {
	    document.getElementById("jumbrotonText").innerHTML += txt.charAt(i);
	    i++;
	    setTimeout(typeWriter, speed);
	  }
	};


	function getloader(){		
		document.getElementById("loaderScreen").style.display = "none";
		document.getElementById("contentScreen").style.display = "block";
		document.getElementsByTagName("body")[0].style.backgroundImage = "linear-gradient(to bottom right, rgba(0, 24, 66), rgba(2, 39, 105),rgba(4, 66, 179),rgba(81, 115, 176))";
	}

	setTimeout(getloader,8000);
	var i = 0;
	var txt = ' I am a web-developer, competetive coder and  movie enthusiast'; 
	var speed = 50;
	setTimeout(typeWriter,10000);
};


