//myaudio = new Sound("lethergo.mp3");
//myaudio.play();
//myaudio.pan(-1);
/*function checkcheck()
{
var x = document.getElementById("11").checked;
document.getElementById("para").innerHTML=x;
}*/



(function()
{
	clap = new Sound("clap.wav");
	hat = new Sound("hat.wav");
	kick = new Sound("kick.wav");
	snare = new Sound("snare.wav");
	tom = new Sound("tom.wav");

	window.addEventListener("keydown",onKeyDown);
	
	function onKeyDown(e)
	{	//alert(e.keyCode);
		//lasersound.play();
		//lasersound.play();
		if(e.keyCode==76)
		{	//alert("abouttoplay");
			myloop();
			//hat.play();
			//kick.play();
			//snare.play();
			//tom.play();
		}if(e.keyCode==90)
		{	//alert("abouttoplay");
			clap.play();
			//hat.play();
			//kick.play();
			//snare.play();
			//tom.play();
		}
		if(e.keyCode==88)
		{	//alert("abouttoplay");
			//clap.play();
			hat.play();
			//kick.play();
			//snare.play();
			//tom.play();
		}if(e.keyCode==67)
		{	//alert("abouttoplay");
			//clap.play();
			//hat.play();
			kick.play();
			//snare.play();
			//tom.play();
		}if(e.keyCode==86)
		{	//alert("abouttoplay");
			//clap.play();
			//hat.play();
			//kick.play();
			snare.play();
			//tom.play();
		}if(e.keyCode==66)
		{	//alert("abouttoplay");
			//clap.play();
			//hat.play();
			//kick.play();
			//snare.play();
			tom.play();
		}	//x
	}
} () );

alert("end")

