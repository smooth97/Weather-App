let timezone = document.querySelector('.location-timezone');
let degree = document.querySelector('.temperature-degree');
let temperatureDescription = document.querySelector('.temperature-description');
const iconBox = document.querySelector('.icon');
const temperatureSpan = document.querySelector('.temperature span');
let temperatureSection = document.querySelector('.degree-section');

let lat; // latitude 위도
let long; // longitude 경도

window.addEventListener('load', () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            const proxy = `https://cors-anywhere.herokuapp.com/`
            const api = `${proxy}https://api.darksky.net/forecast/3eefe18fd11e56024dad2d7abeda4a5a/${lat},${long}`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary, icon} = data.currently;
                    
                    // Set DOM Elements form the API
                    degree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    timezone.textContent = data.timezone;
                    
                    // Set Icon
                    
                    setIcons(icon, iconBox);

                    //Change temperature to C/F
                    
                });
        });
    }

    function setIcons (icon, iconID){
        var skycons = new Skycons({"color": "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.add(iconID, Skycons[currentIcon]);
    }
});


temperatureSection.addEventListener('click', () => {
    if(temperatureSpan === "F") {
        temperatureSpan.textContent = "C";
    }else {
        temperatureSpan.textContent = "F";
    }
});