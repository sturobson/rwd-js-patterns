# A basic navicon pattern

A very simple show/hide pattern that utilises 	document.getElementById(id).

The HTML -

	<header role="banner">
		<h1>A pure JS show/hide</h1>
		<button id="navicon">menu</button>
		<nav role="navigation" id="mainnav">
			<ul>
				<li><a href=""></a>home</li>
				<li><a href=""></a>products</li>
				<li><a href=""></a>help</li>
				<li><a href=""></a>reviews</li>
				<li><a href=""></a>about</li>
				<li><a href=""></a>contact</li>
			</ul>
		</nav> <!-- /nav -->

	</header> <!-- /header -->

The JavaScript -

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

## notes

Make sure you progressively enhance your code to make the menu hide at your desired viewport width so that it will display if the users device does not have JavaScript.

## demo

[Here is a codepen](http://codepen.io/sturobson/pen/fwaiz)