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

### Resizing the browser

If your user was to resize the browser from small to large after opening and closing the navigation the menu could be lost. Adding these lines of JavaScript will force the menu to be shown for when the browser is resized.

	window.onresize = function() {
		mainnav.style.display = 'block';
	}

### Notes

Make sure you progressively enhance your code to make the menu hide at your desired viewport width so that it will display if the users device does not have JavaScript.

### Demo

[Here is a codepen](http://codepen.io/sturobson/pen/fwaiz)

### Support

According to the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/DOM/document.getElementById) browser support for the JavaScript is

* Chrome 1.0 +
* Firefox (Gecko) 1.0 +
* Internet Explorer 5.5 +
* Opera 7.0 +
* Safari (Webkit) 1.0 +