# A basic scroll to top pattern

A very simple scoll to top pattern that utilises scrollTo.

The HTML -

	<!DOCTYPE html>
<!--[if lt IE 8]> <html class="no-js lt-ie8" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title>scroll to top vanilla JS pattern</title>

	<meta name="author" content="Stuart Robson">
	<meta name="description" content="">

	<meta http-equiv="cleartype" content="on">

	<meta name="HandheldFriendly" content="True">
	<meta name="MobileOptimized" content="320">
	<meta name="viewport" content="width=device-width">

	<!--[if IE]>    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>    <![endif]-->

	<script>
	(function(H){H.className=H.className.replace(/bnojsb/,'js')})
	(document.documentElement)
	</script>

	<script src="scroll-to-top.js"></script>
	<style>

	</style>
	</head>
	<body>

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

		<footer role="contentinfo">


		</footer> <!-- /footer -->

	</div> <!-- /#wrapper -->

</body>
</html>


The JavaScript -

	document.getElementById('scroll-to-top').onclick = function () {
	    scrollTo(document.body, 0, 300);
	}
	
		function scrollTo(element, to, duration) {
	    	if (duration < 0) return;
		    var difference = to - element.scrollTop;
	    	var perTick = difference / duration * 2;

    	setTimeout(function() {
	        element.scrollTop = element.scrollTop + perTick;
        	scrollTo(element, to, duration - 0);
    	}, 10);
	}


### Notes
