var i = 0;
var content = document.getElementById("content").innerHTML;
var speed = 50;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("content").innerHTML += content.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

document.getElementById("content").innerHTML = "";
typeWriter();