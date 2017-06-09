/*Get a Person object from the SWAPI, http://swapi.co/api/people/4/

fill in person4Name with the value of Person's name
fill in person4HomeWorld with the value of Person's homeworld (name)
Get a Person object from the SWAPI, http://swapi.co/api/people/14/
*/
function people4Request (){
  var response = JSON.parse( this.responseText );
  var nameTarget = document.getElementById( 'person4Name' );

  var homeworld = response.homeworld;
  var worldRequest = new XMLHttpRequest();
  worldRequest.addEventListener( 'load', people4WorldRequest );
  worldRequest.open( 'GET', homeworld );
  worldRequest.send();

  nameTarget.innerHTML = response.name;

}

function people4WorldRequest (){
  var response = JSON.parse( this.responseText );
  var worldTarget = document.getElementById( 'person4HomeWorld' );
  worldTarget.innerHTML = response.name;
}

/*
fill in person14Name with the value of Person's name
fill in person14Species with the value of Person's (first) species (name)
*/

function people14Request (){
  var response = JSON.parse( this.responseText );
  var nameTarget = document.getElementById( 'person14Name' );

  var species = response.species;
  var speciesRequest = new XMLHttpRequest();
  speciesRequest.addEventListener( 'load', people14SpeciesRequest );
  speciesRequest.open( 'GET', species );
  speciesRequest.send();

  nameTarget.innerHTML = response.name;
}

function people14SpeciesRequest (){
  var response = JSON.parse( this.responseText );
  var speciesTarget = document.getElementById( 'person14Species' );
  speciesTarget.innerHTML = response.name;
}
/*
Get a list of all the films from the SWAPI, http://swapi.co/api/films/
fill in filmList with a new <li> element for each film
fill in each film's filmTitle with the title of the film
create a new <li> in this film's filmPlanets for each planet that appeared in this film
fill in each planetTitle with the name of the planet*/

function filmRequest (){
  var response = JSON.parse( this.responseText );
  var films = response.results;
  var filmListTarget = document.getElementById( 'filmList' );


  for( var filmNum = 0; filmNum < films.length; filmNum++ ){
    var currentFilm = films[filmNum];
    var createFilmItem = document.createElement( 'li' );
    createFilmItem.innerHTML = currentFilm.title;

    var planetArray = currentFilm.planets;
    for( var planetNum = 0; planetNum < planetArray.length; planetNum++ ){

    }


    filmListTarget.appendChild( createFilmItem );

  }
}

var xhrRequest1 = new XMLHttpRequest();
xhrRequest1.addEventListener( 'load', people4Request );
xhrRequest1.open( 'GET',  'http://swapi.co/api/people/4' );
xhrRequest1.send();



var xhrRequest2 = new XMLHttpRequest();
xhrRequest2.addEventListener( 'load', people14Request );
xhrRequest2.open( 'GET', 'http://swapi.co/api/people/14/' );
xhrRequest2.send();


var xhrRequest3 = new XMLHttpRequest();
xhrRequest3.addEventListener( 'load', filmRequest );
xhrRequest3.open( 'GET', 'http://swapi.co/api/films/' );
xhrRequest3.send();
