window.alert("start")

var context;
window.addEventListener('load', init, false);
function init()
{
	try
	{
		window.AudioContext = window.AudioContext||window.webkitAudioContext;
		context = new AudioContext();
	}

	catch(e)
	{
		alert('not supported');
	}
}

/*bufferloader = new BufferLoader(
	context,
	[
		'../sounds/Bass_2'
	],
	finishedLoading
	);
	bufferLoader.Load();
}*/

var request = new XMLHttpRequest();
alert("1");
request.open("GET", "../sounds/Beat_7.ogg", true);
alert("2");
request.responseType = "arraybuffer";
alert("3");
request.onload = function()
{
	var audioData = request.response;
	createSoundSource(audioData);
};
alert("4");
request.send();
alert("5");
soundSource = context.createBufferSource();
alert("6");
soundBuffer = context.createBuffer(audioData, true);
alert("7");
soundSource.buffer = soundBuffer;
alert("8");
soundSource.connect(context.destination);
alert("9");
source.start(0);

function myFunction()
{
var x = document.getElementById("11").checked;
document.getElementById("para").innerHTML=x;
}
//document.write(names);
window.alert("end");
//window.alert(names);
