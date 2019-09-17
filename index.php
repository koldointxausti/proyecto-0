<!DOCTYPE html>
<html>
<head>
	<title>Dark</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<link rel='shortcut icon' type='image/x-icon' href='img/symbol.png' >
	<script src="lib/jquery-3.4.1.min.js"></script>
	<script src="js/datos.js"></script>
	<script src="js/main.js"></script>
	<script type="text/javascript" src="lib/moment.js"></script>
	<script type="text/javascript" src="JS/timeScript.js"></script>


</head>
<body>
	<header>
		<h1>DARK</h1>
		<a href="https://www.netflix.com/es-en/title/80100172" target="_blank"><img src="img/netflix-icon.png"></a>
	</header>
	<nav>
		
		<div>
		<?php 
		date_default_timezone_set('Europe/Madrid');
		echo "<div id = 'timePanel'>".
		"<div id = 'date'>".
		date('F jS, Y ').
		"</div>".
		'<div id="hour">'.
		date('G:i:s').
		"</div>".
		"</div>";
		?>
		</div>
		<ul>
			<li><a href="#cast">Cast</a></li>
			<li><a href="#seasons">Seasons</a>
				<ul id="seasonsNav"></ul>
			</li>
		</ul>
	</nav>
	<div id="main">
		<div id="seasons"></div>
		<div id="cast"></div>
	</div>
	<footer><span>Xabier Artola, Koldo Intxausti y Nerea Labandera &copy 2019</span></footer>
</body>

</html>