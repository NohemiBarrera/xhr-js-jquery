

var plantillaPokes = '<div data-url="**url**" data-img="**imgPokes**" class="miau card">' +
		'<a href="#modalPokes">' +
			'<img src="**direccionImg**"">' +
			'<span>**nombrePoke**</span>' +
		'</a>' +
	'</div>';

var imagenes = [
'img/bulbasaur.png', 'img/ivysaur.png', 'img/venusaur.png', 'img/charmander.png', 
'img/charmeleon.png', 'img/charizard.png', 'img/squirtle.png', 'img/wartortle.png',
'img/blastoise.png', 'img/caterpie.png', 'img/metapod.png', 'img/butterfree.png', 
'img/weedle.png', 'img/kakuna.png', 'img/beedrill.png', 'img/pidgey.png',
'img/pidgeotto.png', 'img/pidgeot.png', 'img/rattata.png', 'img/raticate.png'
];

var plantillaModal = 
    '<div class="modal-content">' +
      '<h4>Detalles: </h4>' +
      '<img src="**imagenPokes**">' +
      '<p>Color:**color**</p>' +
      '<p>Habitat:**habitat**</p>' +
      '<p>Generación:**generacion**</p>' +
    '</div>' +
  '</div>';

var cargarPagina = function(){
	var url = 'http://pokeapi.co/api/v2/pokemon/';
$.getJSON(url, function(response){
	var pokemons = response.results;
	crearPokemons(pokemons);
	$('.modal').modal();
	$('.nuevosPokes').click(obtenerDetalles);
	});
};

var obtenerDetalles = function (pokemon, imagen){
	var nombre = pokemon.name[0].name;
	var color = pokemon.color.name;
	var habitat = pokemon.habitat.name;
	var generacion = pokemon.generation.name;
	var plantillaFinal = "";
	plantillaFinal += plantillaModal.replace('**nombrePoke**', nombre)
	.replace('**color**', color)
	.replace('**habitat**', habitat)
	.replace('**generacion**', generacion)
	.replace('**imagenPokes**', imagen);
	$('#modalPokes').html(plantillaFinal);
};

var masInfo = function(){
	var urlEspecie = $(this).data('url').replace('pokemon', 'pokemon-species')
	.replace("http://", 'https://');
	var imagen = $(this).data("img");
	$.getJSON(urlEspecie, function(response){
		obtenerDetalles(response, imagen);
	});
};

var crearPokemons = function(pokemons){
	plantillaFinal = "";
	pokemons.forEach(function(pokemon, z){
		plantillaFinal += plantillaPokes.replace("**nombrePoke**", pokemon.name)
		.replace("**direccionImg**", imagenes[z])
		.replace("**url**", pokemon.url)
		.replace("**imgPokes**", imagenes[z]);
	});
	//$('#pokedex').html(plantillaFinal);
};




$(document).ready(cargarPagina);





