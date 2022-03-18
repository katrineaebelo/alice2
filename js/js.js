/**Javascript fil til Alice restaurant 2**/



  // Vejr

  $(document).ready(function() {

      // get the weather data via query URI
      fetch("https://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=da&units=metric&appid=61374304c9fe57243b1cb261dc4fe4f4").then(response => {
          return response.json();
      }).then(data => {

          // Work with JSON data here
          console.log(data); // show what's in the json
          console.log(data.weather[0].description)

          // solnedgang
          var sunsetMs = data.sys.sunset * 1000; // dato-objektet har brug for millisek. Derfor * 1000
          var sunset = new Date(sunsetMs);

          // Datoformattering @URI < https://www.w3schools.com/js/js_date_methods.asp >
          var sunsetTime = sunset.getHours() + ":" + sunset.getMinutes();
          result.innerHTML = `
          <h2> Vejret nu: ${data.name} </h2>
          <p>${data.weather[0].description}</p>

        <!--Henter data omkring temperaturen fra JSON -->
          <h2> Temperatur </h2>
          <p>${data.main.temp}</p>

        <!--Henter data omkring følelsen af temperaturen fra JSON -->
          <h2>Føles som </h2>
          <p>${data.main.feels_like}</p>


        <!--Henter data omkring følelsen af temperaturen fra JSON -->
          <h2>Vindstyrke </h2>
          <p>${data.wind.speed}</p>
          `

          // append = da. tilføj (noget tilføjes et element med id="result"
          $('#result').append(

              // tilføjer ("append") en div til vejroplysninger
              '<div class="weatherInfo">' +

              // tilføjer bynavn
              '<h1> ' + data.name + ' </h1>' +

              // tilføjer en beskrivelse af vejret lige nu
              '<h2>Vejr: ' + data.weather[0].description + '</h2>' +

              // tilføjer vejrsymbol
              '<figure>' +
              '<img src="images/' + data.weather[0].icon + '.png" alt="Vejrsymbol">' +
              '</figure>' +

              // tilføjer klokkeslet for solens nedgang i vest
              '<p> Solnedgang: ' + sunsetTime + '</p>' +

              // afslutter #weatherInfo taggen
              '</div>'); // .append til #result slut

          // here are the icons: https://openweathermap.org/weather-conditions

                  Aarhus.innerHTML = `
                  <h2> Vejret nu: ${data.name} </h2>
                  <p>${data.weather[0].description}</p>

              <!--Henter data omkring temperaturen fra JSON -->
                  <h2> Temperatur </h2>
                  <p>${data.main.temp}</p>

              <!--Henter data omkring følelsen af temperaturen fra JSON -->
                  <h2>Føles som </h2>
                  <p>${data.main.feels_like}</p>
                  `

                  // append = da. tilføj (noget tilføjes et element med id="result"
                  $('#Aarhus').append(

                      // tilføjer ("append") en div til vejroplysninger
                      '<div class="weatherInfo">' +

                      // tilføjer bynavn
                      '<h1> ' + data.name + ' </h1>' +

                      // tilføjer en beskrivelse af vejret lige nu
                      '<h2>Vejr: ' + data.weather[0].description + '</h2>' +

                      // tilføjer vejrsymbol
                      '<figure>' +
                      '<img src="images/' + data.weather[0].icon + '.png" alt="Vejrsymbol">' +
                      '</figure>' +

                      // tilføjer klokkeslet for solens nedgang i vest
                      '<p> Solnedgang: ' + sunsetTime + '</p>' +

                      // afslutter #weatherInfo taggen
                      '</div>'); // .append til #result slut

                    }).catch(err => {
                        // Do something for an error here
                        console.log('There was an error ...');
                    });



/**Popper library til skærm design**/

let rellax = new Rellax('.rellax');

import { createPopper } from '@popperjs/core';
createPopper(popcorn, tooltip, {
  placement: 'right',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 8],
      },
    },
  ],
});

document.querySelector('#container').scrollTop = 520;

const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');

//Se bestillinger

  const a = "salat"

  // Session: lever så længe browseren er åben
  // her gemmer vi
  sessionStorage.setItem("test", a)

  // her henter vi det gemte frem igen


  let sum = 0

  let gem = sessionStorage.setItem("test",23)

  test.addEventListener('click',
    function(){
      bestillinger.innerHTML += salat.innerHTML
      bestillinger.innerHTML +=  parseInt( sessionStorage.getItem("test")) + parseInt( sessionStorage.getItem("test"))
    })

  // betal knap
  betal.addEventListener('click',function(){
    localStorage.setItem("liste",bestillinger.innerHTML)
    })


  let d = new Date(); // kan genbruges andre steder
  let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
  let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];


  // footer som objekt
  const info = {
    author: 'Katrine Aebelo',
    dag: uge[ d.getDay() ],
    maaned: maaneder[ d.getMonth() ],
    dagImaaned: d.getDate(),
    aar: d.getFullYear(),
    time: d.getHours(),
    minut: d.getMinutes(),
    restaurant: 'Alice\'s Restaurant',
    adresse: 'Volden 234 <br>8000 Aarhus C',
    telefon: '4243 4445',

    skrivTilFooter: function() {
      console.log('footeren.skrivTilFooter() = aktiv');
      footerInfo.innerHTML += `
        <div>
          &copy; Opgave - Alice restaurant<br>
          by ${this.author}
          ${this.dag}
          ${this.dagImaaned}.
          ${this.maaned}
          ${this.aar}.
        </div>
      `;
    },
    skrivAdresse: function() {
      footerInfo.innerHTML += `
        <div class="adresse">
          <h3>${this.restaurant}</h3>
          <p>
            ${this.adresse}<br>
            ${this.telefon}
          </p>
        </div>
      `
    }
  }

  info.skrivAdresse();
  info.skrivTilFooter();
