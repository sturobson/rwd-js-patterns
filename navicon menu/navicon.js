var button = document.getElementById('navicon');

button.onclick = function() {
	var div = document.getElementById('mainnav');
	if (div.style.display !== 'block') {
		div.style.display = 'block';
	}
	else {
		div.style.display = 'none';
	}
};

window.onresize = function() {
	mainnav.style.display = 'block';
}
