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


  for( var filmNum = 0; filmNum < films.length; filmNum++ ){

      var currentFilm = films[filmNum];

      var filmTitleContainer = document.createElement( 'h2' );
      filmTitleContainer.className = 'filmTitle';
      filmTitleContainer.innerHTML = currentFilm.title;

      var planetTitleContainer = document.createElement( 'h3' );
      planetTitleContainer.className = 'planetTitle';
      planetTitleContainer.innerHTML = 'Planets';
      filmTitleContainer.appendChild( planetTitleContainer );

      var planetsContainer =document.createElement( 'ul' );
      planetsContainer.className = 'filmPlanets';

      var planetArray = currentFilm.planets;
      for( var planetNum = 0; planetNum < planetArray.length; planetNum++ ){

        ( function (currentPlanetsContainer){
          var currentPlanet = planetArray[planetNum];

          var newRequest = new XMLHttpRequest();
          newRequest.addEventListener( 'load', function (){
            var response = JSON.parse( this.responseText );
            var listContainerOfSinglePlanet = document.createElement( 'li' );
            listContainerOfSinglePlanet.className = 'planet';

            var planetContainer = document.createElement( 'h4' );
            planetContainer.innerHTML = response.name;
            listContainerOfSinglePlanet.appendChild( planetContainer );

            currentPlanetsContainer.appendChild( listContainerOfSinglePlanet );
          } );
          newRequest.open( 'GET', currentPlanet );
          newRequest.send();

        }) ( planetsContainer );

        filmTitleContainer.appendChild( planetsContainer );
    }
    var filmListTarget = document.getElementById( 'filmList' );
    filmListTarget.appendChild( filmTitleContainer );

  }
}
/*        <!-- example
          <li class="film">
            <h2 class="filmTitle"></h2>
            <h3>Planets</h3>
            <ul class="filmPlanets">
              <li class="planet">
                <h4 class="planetName"></h4>
              </li>
            </ul>
          </li>
        -->*/

/*function worldRequest(){
  var newPlanet = document.createElement( 'ul' );
  var response = JSON.parse( this.responseText );
  var mostRecentFilmAppended = document.getElementsByClassName( 'filmTitle' );

  newPlanet.innerHTML = response.name;
  mostRecentFilmAppended[mostRecentFilmAppended.length-1].appendChild( newPlanet );
}*/


(function(){
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
  var response = xhrRequest3.response;
})();
