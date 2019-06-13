// Function for the navigation menu.
function openMenu() {
    var menuIcon = document.getElementById("menuContainer");
    if (menuIcon.style.display === "inline-block") {
        menuIcon.style.display = "none";
    } else {
        menuIcon.style.display = "inline-block";
    }
}

// This function is for the APOD section.
function getPhotoOfTheDay() {
    const apodContainer = document.getElementById("apodContainer")
    var request = new XMLHttpRequest();
    var api_key = 'n4s6U5u8Tc5MzpfYauL7w9vuiVo2Z8IzIliGYFok';

    request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=' + api_key, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            console.log(data);

            var container = document.createElement("div");
            container.setAttribute("class", "apodContainer");

            var title = document.createElement("h3");
            title.textContent = data.title;
            title.setAttribute("class", "apodTitle");

            var img = document.createElement("img");
            var imageUrl = data.url;
            img.setAttribute("src", imageUrl);
            img.setAttribute("class", "apodImg");

            var explanation = document.createElement("p");
            explanation.textContent = data.explanation;
            explanation.setAttribute("class", "apodText");

            container.appendChild(img);
            container.appendChild(title);
            container.appendChild(explanation);

            apodContainer.children[0].appendChild(container);

        } else {
            console.log('error')
        }
    }

    request.send()
}

// The following functions are for the SpaceX Rocket Tech Section.
    // Falcon Rocket Section
    function viewMoreFalcon() {
        var moreInfo = document.getElementById("falconHidden");
        if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        } else {
        moreInfo.style.display = "none";
        }
    }

    function getFalconTech() {
        const falBox = document.getElementById("falBox");
        var request = new XMLHttpRequest();
    
        request.open("GET", "https://api.spacexdata.com/v3/rockets/falcon9", true)
        request.onload = function() {
            var data = JSON.parse(this.response)
    
            if (request.status >= 200 && request.status < 400) {
                console.log(data);
    
                var containerFalcon = document.createElement("div");
                containerFalcon.setAttribute("class", "containerFalcon")
    
                var falconTitle = document.createElement("h2");
                falconTitle.textContent = data.rocket_name;
    
                var falconImage = document.createElement("img");
                falconImage.setAttribute("src", "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg");
                
                var falconDescription = document.createElement("p");
                falconDescription.textContent = data.description;
    
                var falconWiki = document.createElement("a")
                falconWiki.textContent = "More Info on Wikipedia";
                falconWiki.setAttribute("href", data.wikipedia);
    
                containerFalcon.appendChild(falconTitle);
                containerFalcon.appendChild(falconImage);
                containerFalcon.appendChild(falconDescription);
                containerFalcon.appendChild(falconWiki);
    
                falBox.children[0].appendChild(containerFalcon);
    
            } else {
                console.log("error")
            }
        }
    
        request.send()
    }

    // Dragon Spacecraft Section
    function viewMoreDragon() {
        var moreInfo = document.getElementById("dragonHidden");
        if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        } else {
        moreInfo.style.display = "none";
        }
    }

    // Tesla Roadster Section
    function viewMoreRoadster() {
        var moreInfo = document.getElementById("roadsterHidden");
        if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        } else {
        moreInfo.style.display = "none";
        }
    }

/* This function is for the ISS live tracking map.
function drawMap(){
    var mapOptions = {
        center: ['47.9213', '132.4005'],
        zoom: 5
    }
    var map = new L.map('map', mapOptions);
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    var iconOptions = {
         iconUrl: 'https://image.flaticon.com/icons/svg/1789/1789775.svg',
         iconSize: [50, 50]
    }
    var customIcon = L.icon(iconOptions);

    var markerOptions = {
        title: "ISS Location",
        clickable: true,
        draggable: false,
        icon: customIcon
    }

    var marker;
    setInterval(() => {
    fetch('https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json')
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        marker = L.marker([result.iss_position.latitude, result.iss_position.longitude], markerOptions);
        marker.bindPopup('Internation Space Station').openPopup();
        marker.addTo(map)
        console.log(result.iss_position);
    })
    }, 1000);
}

drawMap();*/