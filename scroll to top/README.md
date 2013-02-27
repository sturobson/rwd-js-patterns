# A basic scroll to top pattern

A very simple scoll to top pattern that utilises scrollTo.

The HTML -

	<div id="wrapper">

		<header role="banner">
			<h1>A pure JS scroll to top</h1>

		</header> <!-- /header -->

		<main role="main">
			<section>
				<h2>Lots of content</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem non fugit porro quibusdam autem similique commodi tempora natus consequatur temporibus incidunt ducimus sed consequuntur vel ex quos culpa. Sapiente distinctio.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem non fugit porro quibusdam autem similique commodi tempora natus consequatur temporibus incidunt ducimus sed consequuntur vel ex quos culpa. Sapiente distinctio.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem non fugit porro quibusdam autem similique commodi tempora natus consequatur temporibus incidunt ducimus sed consequuntur vel ex quos culpa. Sapiente distinctio.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem non fugit porro quibusdam autem similique commodi tempora natus consequatur temporibus incidunt ducimus sed consequuntur vel ex quos culpa. Sapiente distinctio.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem non fugit porro quibusdam autem similique commodi tempora natus consequatur temporibus incidunt ducimus sed consequuntur vel ex quos culpa. Sapiente distinctio.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem non fugit porro quibusdam autem similique commodi tempora natus consequatur temporibus incidunt ducimus sed consequuntur vel ex quos culpa. Sapiente distinctio.</p>

				<a id="scroll-to-top">back to top</a>

			</section>

		</main> <!-- /main -->

	</div> <!-- /#wrapper -->

The JavaScript -

	document.getElementById('scroll-to-top').onclick = function () {
	    scrollTo(document.body, 0, 100);
	}

		function scrollTo(element, to, duration) {
	    	if (duration < 0) return;
		    var difference = to - element.scrollTop;
	    	var perTick = difference / duration * 2;

    	setTimeout(function() {
	        element.scrollTop = element.scrollTop + perTick;
        	scrollTo(element, to, duration - 2);
    	}, 10);
	}


### Demo

[Here is a codepen](http://codepen.io/sturobson/pen/equnb)

### Notes
