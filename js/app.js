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

function people14Request (){
  var response = JSON.parse( this.responseText );
  var nameTarget = document.getElementById( 'person14Name' );
  var species = response.species;

  nameTarget.innerHTML = response.name;
}


var xhrRequest1 = new XMLHttpRequest();
xhrRequest1.addEventListener( 'load', people4Request );
xhrRequest1.open( 'GET',  'http://swapi.co/api/people/4' );
xhrRequest1.send();


/*
fill in person14Name with the value of Person's name
fill in person14Species with the value of Person's (first) species (name)
*/

var xhrRequest2 = new XMLHttpRequest();
xhrRequest2.addEventListener( 'load', people14Request );
xhrRequest2.open( 'GET', 'http://swapi.co/api/people/14/' );
xhrRequest2.send();

/*
Get a list of all the films from the SWAPI, http://swapi.co/api/films/
fill in filmList with a new <li> element for each film
fill in each film's filmTitle with the title of the film
create a new <li> in this film's filmPlanets for each planet that appeared in this film
fill in each planetTitle with the name of the planet*/