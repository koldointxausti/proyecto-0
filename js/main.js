$(document).ready(function(){
	
	// INSERCIÓN DE DATOS DE TEMPORADAS

	let seasonContent = '';
	for(let index = 0; index < temporadas.length; index++){
		seasonContent += '<hr><div>'+
		'<h2>Season' + temporadas[index].numTemporada + '</h2>'+
		'<div class="caps" id="season'+(index+1)+'">';

		for(let i = 0; i < temporadas[index].capitulos.length; i++){
			seasonContent +=
				'<div class="capitulo">'+
					'<h3><strong>'+ temporadas[index].capitulos[i].numCap + '.</strong> ' +temporadas[index].capitulos[i].title +'</h3>'+
					'<p>'+ temporadas[index].capitulos[i].description +'</p>'+
				'</div>';
		}
		seasonContent += '</div>'+
		'</div>';
	}
	$('#seasons').html(seasonContent);

	// INSERCIÓN DE DATOS DE CAST

	let castContent = '<hr><div>'+
		'<h2>Cast</h2><div class="actorContent">';
	for(let index = 0; index < actores.length ; index++){
		castContent += '<div class="actor">'+
			'<strong>'+actores[index].nombre+'</strong><br>'+
			'<span>'+actores[index].personaje+'</span><br>'+
			'<span>'+actores[index].edad+'</span><br>'+
		'</div>';
	}
	castContent += '</div>';
	$('#cast').html(castContent);

	// NAV

	for(let index = 0; index < temporadas.length; index++){
		$('#seasonsNav').append('<li><a href="#season'+(index+1)+'">Season'+(index+1)+'</a></li>');
	}

});