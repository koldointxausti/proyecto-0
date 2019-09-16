$(document).ready(function() {
	//Merchandising info

	let tShirts = '';

	tShirts += '<h2> tShirts </h2>';

	for(let i = 0; i < merchandising.tshirts.length; i++){
		tShirts+=
		'<div class="tshirt"><img src="img/merchandising/tshirts/'+(i+1)+'.jpg">'+
		'<h2>'+ merchandising.tshirts[i].name +' </h2>'+ '<h3>'+ merchandising.tshirts[i].color +' </h3>'+'<h4>'+ merchandising.tshirts[i].prize +' </h4>'+'</div>';
	}

	$('#tshirts').html(tShirts);

	/*PROVISIONAL*/

	let mugs = '';

	mugs += '<h2> mugs </h2>';

	for(let i = 0; i < merchandising.mugs.length; i++){
		mugs+=
		'<div class="tshirt"><img src="img/merchandising/mugs/'+(i+1)+'.jpg">'+
		'<h2>'+ merchandising.mugs[i].name +' </h2>'+'<h4>'+ merchandising.tshirts[i].prize +' </h4>'+'</div>';
	}


	$('#mugs').html(mugs);

	
	let phoneCases = '';

	phoneCases += '<h2> phone cases </h2>';

	for(let i = 0; i < merchandising.phoneCases.length; i++){
		phoneCases+=
		'<div class="tshirt"><img src="img/merchandising/phone-cases/'+(i+1)+'.jpg">'+
		'<h2>'+ merchandising.phoneCases[i].name +' </h2>'+ '<h3>'+ merchandising.tshirts[i].color +' </h3>'+'<h4>'+ merchandising.tshirts[i].prize +' </h4>'+'</div>';
	}

	$('#phoneCases').html(phoneCases);


});