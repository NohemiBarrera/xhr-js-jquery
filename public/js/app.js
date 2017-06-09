$.getJSON("http://pokeapi.co/api/v2/pokemon/", function(response){
	var pokemons = response.results;
	crearPokemons(pokemons);
});

//var xhr = new XMLHttpRequest();
//tiene dos métodos que nos sirven para validar el JSON:

/*xhr.onreadystatechange = function (e) {
	if (this.readyState === 4) {
		if (this.status === 200) {
			var response = JSON.parse(this.response);
			var pokemons = response.results;

			crearPokemons(pokemons);*/
			/*var squads = JSON.parse(this.response);	
			crearSquads(squads);*/
	//	}
		
//	}
//};

/*xhr.open("GET", "http://pokeapi.co/api/v2/pokemon/");

xhr.send();*/

function crearPokemons(pokemons) {
	var ul = document.getElementById("pokemons");

	pokemons.forEach(function (pokemon) {
		var image = document.createElement("img");
		var li = document.createElement("li");
		li.textContent = pokemon.name;
		image.src = pokemon.source;
		ul.appendChild(image);
		ul.appendChild(li);
	});
}

