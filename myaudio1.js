//myaudio = new Sound("lethergo.mp3");
//myaudio.play();
//myaudio.pan(-1);
/*function checkcheck()
{
var x = document.getElementById("11").checked;
document.getElementById("para").innerHTML=x;
}*/

function loop(bpm)
{	var delay=60/(bpm/1000);
	for(var i=0;;i++)
	{
    		setTimeout(function(){
			if(document.getElementById(String(i)+"1").checked)
			{
				clap.play();
			}
			if(document.getElementById(String(i)+"2").checked)
			{
				hat.play();
			}
				
			if(document.getElementById(String(i)+"3").checked)
			{
				kick.play();
			}
				
			if(document.getElementById(String(i)+"4").checked)
			{
				snare.play();
			}
				
			if(document.getElementById(String(i)+"5").checked)
			{
				tom.play();
			}
				
				
    		},delay);

		i=i%7
	}
}


(function()
{
	clap = new Sound("clap.wav");
	hat = new Sound("hat.wav");
	kick = new Sound("kick.wav");
	snare = new Sound("snare.wav");
	tom = new Sound("tom.wav");

	window.addEventListener("keydown",onKeyDown);

	function onKeyDown(e)
	{	alert(e.keyCode);
		//lasersound.play();
		//lasersound.play();
		if(e.keyCode==90)
		{	alert("abouttoplay");
			loop(1000);		
		}	//x
	}
} () );

alert("end")

