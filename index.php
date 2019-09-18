<!DOCTYPE html>
<html>
<head>
	<title>Dark</title>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<script src="lib/jquery-3.4.1.min.js"></script>
	<script src="js/datos.js"></script>
	<script src="js/main.js"></script>
	<script type="text/javascript" src="lib/moment.js"></script>
	<script type="text/javascript" src="js/timeScript.js"></script>

</head>
<body>
	<header>
		<a href="https://www.netflix.com/es-en/title/80100172" target="_blank"><img src="img/logo.png"></a>
		<img id="scrollDownButton" class="arrows" src="img/dropdown-down.png" alt="down-arrow"/>
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
			<li><a href="#main">Seasons</a>
			<li><a href="#cast">Cast</a></li>
				<ul id="seasonsNav"></ul>
			</li>
			<li><a href="merchandising.php" target="_blank">Merchandising</a></li>
		</ul>
	</nav>
	<div id="main">
		<h1 id="ep-title">Seasons</h1>
		<select id="seasonPicker"></select>
		<div id="seasonContainer"></div>
		<div id="cast"></div>
	</div>
	<footer><span>Xabier Artola, Koldo Intxausti and Nerea Labandera &copy 2019</span></footer>
</body>
</html>