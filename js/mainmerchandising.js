$(document).ready(function() {
	//Merchandising info

	let tShirts = '';
	for(let i = 0; i < merchandising.tshirts.length; i++){
		tShirts+=
		'<div class="tshirt"><img src="img/merchandising/tshirts/'+merchandising.tshirts[i+1]+'.jpg">'+
			'</div>';
	}
	$('#tshirts').html(tShirts);
});