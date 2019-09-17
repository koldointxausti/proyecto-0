$(document).ready(function(){

	// INSERCIÓN DE DATOS DE CAST

	let castContent = '<div>'+
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

	
	// GENERA NAV Y PICKER DEPENDIENDO CUÁNTAS TEMPORADAS HAYA

	for(let index = 0; index < temporadas.length; index++){
		$('#seasonsNav').append('<li><a href="#season'+(index+1)+'">Season'+(index+1)+'</a></li>');
		$('#seasonPicker').append('<option value="'+(index+1)+'">Season'+(index+1)+'</option>');
	}

	// INSERCIÓN DE DATOS DE TEMPORADAS

	let selectedSeason = 1;
	
	$('#seasonPicker').change(function(){
		fillSeasonsContent();
	})

	function fillSeasonsContent(){
		let seasonContent = '';
		selectedSeason = $('#seasonPicker').val();
		let index = $('#seasonPicker').val()-1;
		seasonContent += '<div class="caps" id="seasonContent">'+
		'<img src="img/left-arrow.png" alt="left-arrow" id="capBack" class="capArrows">';

		for(let i = 0; i < temporadas[index].capitulos.length; i++){
			seasonContent +=
				'<div class="capitulo" id="s'+temporadas[index].numTemporada+'c'+temporadas[index].capitulos[i].numCap+'">'+
					'<img src="img/season'+temporadas[index].numTemporada+'/'+temporadas[index].capitulos[i].numCap+'.jpg">'+
					'<div class="capInfo"><h3><strong>'+ temporadas[index].capitulos[i].numCap + '.</strong> ' +temporadas[index].capitulos[i].title +'</h3>'+
					'<p class="capDesc">'+ temporadas[index].capitulos[i].description +'</p></div>'+
				'</div>';
		}
		seasonContent += '<img src="img/right-arrow.png" alt="left-arrow" id="capNext" class="capArrows">'+
		'</div>';
		$('#seasonContainer').html(seasonContent);
		generateCarrousel(selectedSeason);
	}
	fillSeasonsContent();

	// CARRUSEL	

	function generateCarrousel(selectedSeason){
		let selectedCap = 1;
		/*
			Muestra la descripción del capítulo seleccionado por defecto en las definiciones
			de variable de arriba
		*/

		$('#s'+selectedSeason+'c1').find('.capDesc').show();
		$('#capBack').addClass('disabled');
		$('#s'+selectedSeason+'c1').addClass('capSelected');
		
		/*
			Cuando haces click sobre una tarjeta de capítulo se mueve a la posición de selección
			y añade la clase capSelected.
		*/

		$('.capitulo').click(function(){
			let oldSelectedCap = selectedCap;
			$('#s'+selectedSeason+'c'+selectedCap).removeClass('capSelected');
			selectedSeason = parseInt($(this).attr('id').charAt(1));
			selectedCap = parseInt($(this).attr('id').substring(3));
			capsToMove = Math.max(oldSelectedCap, selectedCap) - Math.min(oldSelectedCap, selectedCap);
			$('#s'+selectedSeason+'c1').animate({'marginLeft':(Math.max(oldSelectedCap, selectedCap) === selectedCap ? '-=' : '+=')+(30*capsToMove) +'%'},500);
			$('#s'+selectedSeason+'c'+selectedCap).addClass('capSelected');
			$('#s'+selectedSeason+'c'+oldSelectedCap).find('.capDesc').fadeOut(50);
			$('#s'+selectedSeason+'c'+selectedCap).find('.capDesc').fadeIn(200);

			if(selectedCap === temporadas[selectedSeason-1].capitulos.length+2)
				$('#capNext').addClass('disabled');
			else
				$('#capNext').removeClass('disabled');

			if(selectedCap === 1)
				$('#capBack').addClass('disabled');
			else
				$('#capBack').removeClass('disabled');
		});

		/*
			Mueve y cambia el capítulo seleccíonado al hacer click con los botones
		*/

		$('#capNext').click(function(){
			$('#capBack').removeClass('disabled');
			if(selectedCap === temporadas[selectedSeason-1].capitulos.length+1)
				$('#capNext').addClass('disabled');

			if(selectedCap <= temporadas[selectedSeason-1].capitulos.length+1){
				if(selectedCap != 1){
					$('#s'+selectedSeason+'c1').animate({'marginLeft':'-=30%'},800);
				}else{
					$('#s'+selectedSeason+'c'+selectedCap).animate({'marginLeft':'-=30%'},800);
				}
				$('#s'+selectedSeason+'c'+selectedCap).removeClass('capSelected');
				selectedCap++;
				$('#s'+selectedSeason+'c'+selectedCap).addClass('capSelected');
				$('#s'+selectedSeason+'c'+selectedCap).find('.capDesc').fadeIn(100);
			}
		});
		$('#capBack').click(function(){
			$('#capNext').removeClass('disabled');
			if(selectedCap === 2)
				$('#capBack').addClass('disabled');

			if(selectedCap > 1){
				$('#s'+selectedSeason+'c'+selectedCap).find('.capDesc').fadeOut(50);
				$('#s'+selectedSeason+'c'+selectedCap).removeClass('capSelected');
				selectedCap--;
				$('#s'+selectedSeason+'c1').animate({'marginLeft':'+=30%'},800);
				$('#s'+selectedSeason+'c'+selectedCap).addClass('capSelected');
			}else{
				$('#capBack').addClass('disabled');
			}
		});
	}
	

});