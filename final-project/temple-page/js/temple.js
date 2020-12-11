//Function to toggle hamburger button
function menu() {
	document.getElementById("navi").classList.toggle("responsive");
}

//Function for service nav
function service() {
    document.getElementById("services-more").classList.toggle("more");
}
const URL1 = "https://juswes16.github.io/final-project/temples.json";

//Temples json
fetch(URL1)
  .then((response) => response.json())
  .then((jsObject) => {
    const temples = jsObject['temples'];
    console.log(jsObject);

    for(i = 0; i < temples.length; i++){
      let text = document.createElement('section');
      let name = document.createElement("h2");
      let contact_div = document.createElement("div");
      let contact = document.createElement("h3");
      let address =document.createElement("p");
      let phone =document.createElement("p");
      let email = document.createElement("p");
      let services_div = document.createElement("div");
      let services_h = document.createElement("h3");
      let services = document.createElement("ul");
      let history_div = document.createElement("div");
      let history_h = document.createElement("h3");
      let history = document.createElement("p");
      let ordinance_div = document.createElement("div");
      let ordinance_h = document.createElement("h3");
      let ordinance = document.createElement("ul");
      let session_div = document.createElement("div");
      let session_h = document.createElement("h3");
      let session = document.createElement("ul");
      let closure_div = document.createElement("div");
      let closure_h = document.createElement("h3");
      let closure = document.createElement("ul");

      name.textContent = temples[i].name;
      contact.textContent = "Contact Information";
      address.textContent = "Address: " + temples[i].address;
      phone.textContent = "Phone Number: " + temples[i].phone;
      email.textContent = "Email: " + temples[i].email;
      services_h.textContent = "Temple Services";
      for(x = 0; x < temples[i].services.length; x++){
        let service = document.createElement("li");
        service.textContent = temples[i].services[x];
        services.appendChild(service);
      }
      history_h.textContent = "History";
      history.textContent = temples[i].history;
      ordinance_h.textContent = "Ordinance Schedule";
      for(y = 0; y < temples[i].ordinance.length; y++){
        let time_o = document.createElement("li");
        time_o.textContent = temples[i].ordinance[y];
        ordinance.appendChild(time_o);
      }
      session_h.textContent = "Endowment Session Schedule";
      for(z = 0; z < temples[i].session.length; z++){
        let time_s = document.createElement("li");
        time_s.textContent = temples[i].session[z];
        session.appendChild(time_s);
      }
      closure_h.textContent = "Temple Closure Dates";
      for(ii = 0; ii < temples[i].closure.length; ii++){
        let close = document.createElement("li");
        close.textContent = temples[i].closure[ii];
        closure.appendChild(close);
      }

      contact_div.classList.add("contact");
      contact_div.appendChild(contact);
      contact_div.appendChild(address);
      contact_div.appendChild(phone);
      contact_div.appendChild(email);

      services_div.classList.add("services");
      services_div.appendChild(services_h);
      services_div.appendChild(services);

      history_div.classList.add("history");
      history_div.appendChild(history_h);
      history_div.appendChild(history);

      ordinance_div.classList.add("ordinance");
      ordinance_div.appendChild(ordinance_h);
      ordinance_div.appendChild(ordinance);

      session_div.classList.add("session");
      session_div.appendChild(session_h);
      session_div.appendChild(session);

      closure_div.classList.add("closure");
      closure_div.appendChild(closure_h);
      closure_div.appendChild(closure);

      text.appendChild(name);
      text.appendChild(contact_div);
      text.appendChild(services_div);
      text.appendChild(history_div);
      text.appendChild(ordinance_div);
      text.appendChild(session_div);
      text.appendChild(closure_div);

      if(temples[i].name == 'Boston Massachusetts'){
        document.getElementById("boston").appendChild(text);
      }
      else if(temples[i].name == 'Oakland California'){
        document.getElementById("oakland").appendChild(text);
      }
      else if(temples[i].name == 'Memphis Tennessee'){
        document.getElementById("memphis").appendChild(text);
      }
      else {
        document.getElementById("draper").appendChild(text);
      }
    }
});

//Weather API Boston
const URL2 = "https://api.openweathermap.org/data/2.5/weather?id=4930956&&units=imperial&appid=49dff8e39e45697704945111bde85895";

fetch(URL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let summery = document.createElement("section");
    let weather = document.createElement("h3");
    let temperature = document.createElement("p");
    let humid = document.createElement("p");
    let current = document.createElement("p");
    let wind_speed = document.createElement("p");
    let wind_chill = document.createElement("p");
    let image = document.createElement("img");

    weather.textContent = "Current Weather Summery";
    current.textContent = "Currently: " + jsObject.weather[0].main;
    temperature.textContent = "Temperature: " + Math.round(jsObject.main.temp, 0) + '\xB0F';
    humid.textContent = "Humidity: " + jsObject.main.humidity + '%';
    wind_speed.textContent = "Wind Speed: " + Math.round(jsObject.wind.speed, 0) + "MPH";
    image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png');

    summery.appendChild(weather);
    summery.appendChild(current);
    summery.appendChild(image);
    summery.appendChild(temperature);
    summery.appendChild(humid);
    summery.appendChild(wind_speed);
    summery.appendChild(wind_chill);

    document.getElementById('weather').appendChild(summery);

    let wind = jsObject.wind.speed;
    let temp = jsObject.main.temp;
    let chill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(wind, 0.16))) + (0.4275 * temp * (Math.pow(wind, 0.16)));
    if (temp <= 50 && wind > 3){
      wind_chill.textContent = "Wind Chill: " + Math.round(chill, 0) + '\xB0F';
    } else {
      wind_chill.textContent = "Wind Chill: N/A";
    }
  }); 

//Weather API Oakland
const URL3 = "https://api.openweathermap.org/data/2.5/weather?id=5378538&units=imperial&appid=49dff8e39e45697704945111bde85895";

fetch(URL3)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let summery = document.createElement("section");
    let weather = document.createElement("h3");
    let temperature = document.createElement("p");
    let humid = document.createElement("p");
    let current = document.createElement("p");
    let wind_speed = document.createElement("p");
    let wind_chill = document.createElement("p");
    let image = document.createElement("img");

    weather.textContent = "Current Weather Summery";
    current.textContent = "Currently: " + jsObject.weather[0].main;
    temperature.textContent = "Temperature: " + Math.round(jsObject.main.temp, 0) + '\xB0F';
    humid.textContent = "Humidity: " + jsObject.main.humidity + '%';
    wind_speed.textContent = "Wind Speed: " + Math.round(jsObject.wind.speed, 0) + "MPH";
    image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png');

    summery.appendChild(weather);
    summery.appendChild(current);
    summery.appendChild(image);
    summery.appendChild(temperature);
    summery.appendChild(humid);
    summery.appendChild(wind_speed);
    summery.appendChild(wind_chill);

    document.getElementById('weather2').appendChild(summery);

    let wind = jsObject.wind.speed;
    let temp = jsObject.main.temp;
    let chill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(wind, 0.16))) + (0.4275 * temp * (Math.pow(wind, 0.16)));
    if (temp <= 50 && wind > 3){
      wind_chill.textContent = "Wind Chill: " + Math.round(chill, 0) + '\xB0F';
    } else {
      wind_chill.textContent = "Wind Chill: N/A";
    }
  });

  //Weather API Memphis
const URL4 = "https://api.openweathermap.org/data/2.5/weather?id=4641239&units=imperial&appid=49dff8e39e45697704945111bde85895";

fetch(URL4)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let summery = document.createElement("section");
    let weather = document.createElement("h3");
    let temperature = document.createElement("p");
    let humid = document.createElement("p");
    let current = document.createElement("p");
    let wind_speed = document.createElement("p");
    let wind_chill = document.createElement("p");
    let image = document.createElement("img");

    weather.textContent = "Current Weather Summery";
    current.textContent = "Currently: " + jsObject.weather[0].main;
    temperature.textContent = "Temperature: " + Math.round(jsObject.main.temp, 0) + '\xB0F';
    humid.textContent = "Humidity: " + jsObject.main.humidity + '%';
    wind_speed.textContent = "Wind Speed: " + Math.round(jsObject.wind.speed, 0) + "MPH";
    image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png');

    summery.appendChild(weather);
    summery.appendChild(current);
    summery.appendChild(image);
    summery.appendChild(temperature);
    summery.appendChild(humid);
    summery.appendChild(wind_speed);
    summery.appendChild(wind_chill);

    document.getElementById('weather3').appendChild(summery);

    let wind = jsObject.wind.speed;
    let temp = jsObject.main.temp;
    let chill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(wind, 0.16))) + (0.4275 * temp * (Math.pow(wind, 0.16)));
    if (temp <= 50 && wind > 3){
      wind_chill.textContent = "Wind Chill: " + Math.round(chill, 0) + '\xB0F';
    } else {
      wind_chill.textContent = "Wind Chill: N/A";
    }
  });

  //Weather API Draper
const URL5 = "https://api.openweathermap.org/data/2.5/weather?id=5774001&units=imperial&appid=49dff8e39e45697704945111bde85895";

fetch(URL5)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let summery = document.createElement("section");
    let weather = document.createElement("h3");
    let temperature = document.createElement("p");
    let humid = document.createElement("p");
    let current = document.createElement("p");
    let wind_speed = document.createElement("p");
    let wind_chill = document.createElement("p");
    let image = document.createElement("img");

    weather.textContent = "Current Weather Summery";
    current.textContent = "Currently: " + jsObject.weather[0].main;
    temperature.textContent = "Temperature: " + Math.round(jsObject.main.temp, 0) + '\xB0F';
    humid.textContent = "Humidity: " + jsObject.main.humidity + '%';
    wind_speed.textContent = "Wind Speed: " + Math.round(jsObject.wind.speed, 0) + "MPH";
    image.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png');

    summery.appendChild(weather);
    summery.appendChild(current);
    summery.appendChild(image);
    summery.appendChild(temperature);
    summery.appendChild(humid);
    summery.appendChild(wind_speed);
    summery.appendChild(wind_chill);

    document.getElementById('weather4').appendChild(summery);

    let wind = jsObject.wind.speed;
    let temp = jsObject.main.temp;
    let chill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(wind, 0.16))) + (0.4275 * temp * (Math.pow(wind, 0.16)));
    if (temp <= 50 && wind > 3){
      wind_chill.textContent = "Wind Chill: " + Math.round(chill, 0) + '\xB0F';
    } else {
      wind_chill.textContent = "Wind Chill: N/A";
    }
  });
