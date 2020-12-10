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
      let address =document.createElement("p");
      let phone =document.createElement("p");
      let email = document.createElement("p");
      let services = document.createElement("ul");
      let service = document.createElement("li");
      let service2 = document.createElement("li");
      let service3 = document.createElement("li");
      let service4 = document.createElement("li");
      let history = document.createElement("p");
      let ordinance = document.createElement("ul");
      let time_o1 = document.createElement("li");
      let time_o2 = document.createElement("li");
      let time_o3 = document.createElement("li");
      let time_o4 = document.createElement("li");
      let session = document.createElement("ul");
      let time_s = document.createElement("li");
      let closure = document.createElement("ul");
      let close = document.createElement("li");

      name.textContent = temples[i].name;
      address.textContent = "Address: " + temples[i].address;
      phone.textContent = "Phone Number: " + temples[i].phone;
      email.textContent = "Email: " + temples[i].email;

      for(x = 0; x < temples[i].services.length; x++){
        let service = document.createElement("li");
        service.textContent = temples[i].services[x];
        services.appendChild(service);
      }

      //service1.textContent = temples[i].services[0];
      //service2.textContent = temples[i].services[1];
      //service3.textContent = temples[i].services[2];
      //service4.textContent = temples[i].services[3];

      history.textContent = temples[i].history;

      time_o1.textContent = temples[i].ordinance[0];
      time_o2.textContent = temples[i].ordinance[1];
      time_o3.textContent = temples[i].ordinance[2];
      time_o4.textContent = temples[i].ordinance[3];

      //services.appendChild(service1);
      //services.appendChild(service2);
      //services.appendChild(service3);
      //services.appendChild(service4);

      ordinance.appendChild(time_o1);
      ordinance.appendChild(time_o2);
      ordinance.appendChild(time_o3);
      ordinance.appendChild(time_o4);

      text.appendChild(name);
      text.appendChild(address);
      text.appendChild(phone);
      text.appendChild(email);
      text.appendChild(services);
      text.appendChild(history);
      text.appendChild(ordinance);

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

//Weather API
const URL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=49dff8e39e45697704945111bde85895";

fetch(URL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

  }); 
