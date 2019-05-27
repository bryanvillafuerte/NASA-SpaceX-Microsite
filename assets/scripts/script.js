// This function is for the APOD section.
function getPhotoOfTheDay() {
    var request = new XMLHttpRequest()
    var api_key = 'n4s6U5u8Tc5MzpfYauL7w9vuiVo2Z8IzIliGYFok';

    request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=' + api_key, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            console.log(data);

            var container = document.createElement("div");
            container.setAttribute("class", "apod");

            var title = document.createElement("h3");
            title.style.color = "#ffffff";
            title.textContent = data.title;

            var media = data.media_type;
            if (media = "image") {
                var img = document.createElement("img");
                var imageUrl = data.url;
                img.setAttribute("src", imageUrl);
                img.setAttribute("class", "img");
            } else {
                console.log('error');
            }

            var explanation = document.createElement("p");
            explanation.style.color = "#ffffff";
            explanation.textContent = data.explanation;

            container.appendChild(title);
            container.appendChild(img);
            container.appendChild(explanation);

            apodContainer.children[0].appendChild(container);

        } else {
            console.log('error')
        }
    }

    request.send()
}

// This function is for the ISS live tracking map.
/*function getISScoordinates() {
    var request = new XMLHttpRequest()

    request.open('GET', 'http://api.open-notify.org/iss-now.json', true)
    request.onload = function() {
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            // Creating map options
            var mapOptions = {
            center: [data.iss_position.longitude, data.iss_position.latitude],
            zoom: 8
            }
            
            // Creating a map object
            var map = new L.map('map', mapOptions);
            
            // Creating a Layer object
            var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
            
            // Adding layer to the map
            map.addLayer(layer);

            // Icon options
            var iconOptions = {
                iconUrl: 'https://image.flaticon.com/icons/svg/1789/1789775.svg',
                iconSize: [50, 50]
            }
            // Creating a custom icon
            var customIcon = L.icon(iconOptions);
            
            // Creating Marker Options
            var markerOptions = {
                title: "ISS Location",
                clickable: true,
                draggable: false,
                icon: customIcon
            }
            // Creating a Marker
            var marker = L.marker([data.iss_position.longitude, data.iss_position.latitude], markerOptions);
            
            // Adding popup to the marker
            marker.bindPopup('Internation Space Station').openPopup();
            
            // Adding marker to the map
            marker.addTo(map);

            console.log(data.iss_position.latitude);
            console.log(data.iss_position.longitude);

        } else {
            console.log('error')
        }
    }

    request.send()
}

getISScoordinates();*/