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

function modalPhotoOfTheDay() {
    const modalContainer = document.getElementById("apodModalContent")
    var request = new XMLHttpRequest();
    var api_key = 'n4s6U5u8Tc5MzpfYauL7w9vuiVo2Z8IzIliGYFok';

    request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=' + api_key, true)
    request.onload = function() {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            console.log(data);

            var containerImg = document.createElement("div");
            containerImg.setAttribute("class", "modalImg");

            var close = document.createElement("span");
            close.setAttribute("class", "closeImg")

            var img = document.createElement("img");
            var imageUrl = data.url;
            img.setAttribute("src", imageUrl);
            img.setAttribute("class", "modal-contentImg");

            containerImg.appendChild(img);
            containerImg.appendChild(close);

            modalContainer.children[0].appendChild(containerImg);

        } else {
            console.log('error')
        }
    }

    request.send()
}

function viewApodImg() {
    var apodImg = document.getElementById("apodModal");
    if (apodImg.style.display === "none") {
        apodImg.style.display = "block";
    } else {
        apodImg.style.display = "none";
    }
}

function closeApodImg() {
    var closeApod = document.getElementById("apodModal")
    closeApod.style.display = "none";
}

// The following functions are for the SpaceX Rocket Tech Section.
    // Falcon Rocket Section
    function viewMoreFalcon() {
        var moreInfo = document.getElementById("falconHidden");
        var buttonText = document.getElementById("falconMore");
        if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        buttonText.textContent = "VIEW LESS"
        } else {
        moreInfo.style.display = "none";
        buttonText.textContent = "VIEW MORE"
        }
    }

    function getFalcon9Tech() {
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

    function getFalconHeavyTech() {
        const falHeavy = document.getElementById("falHeavy");
        var request = new XMLHttpRequest();
    
        request.open("GET", "https://api.spacexdata.com/v3/rockets/falconheavy", true)
        request.onload = function() {
            var data = JSON.parse(this.response)
    
            if (request.status >= 200 && request.status < 400) {
                console.log(data);
    
                var containerFalcon = document.createElement("div");
                containerFalcon.setAttribute("class", "containerFalcon")
    
                var falconTitle = document.createElement("h2");
                falconTitle.textContent = data.rocket_name;
    
                var falconImage = document.createElement("img");
                falconImage.setAttribute("src", "https://farm5.staticflickr.com/4711/40126461411_aabc643fd8_b.jpg");
                
                var falconDescription = document.createElement("p");
                falconDescription.textContent = data.description;
    
                var falconWiki = document.createElement("a")
                falconWiki.textContent = "More Info on Wikipedia";
                falconWiki.setAttribute("href", data.wikipedia);
    
                containerFalcon.appendChild(falconTitle);
                containerFalcon.appendChild(falconImage);
                containerFalcon.appendChild(falconDescription);
                containerFalcon.appendChild(falconWiki);
    
                falHeavy.children[0].appendChild(containerFalcon);
    
            } else {
                console.log("error")
            }
        }
    
        request.send()
    }

    // Dragon Spacecraft Section
    function viewMoreDragon() {
        var moreInfo = document.getElementById("dragonHidden");
        var buttonText = document.getElementById("dragonMore");

        if (moreInfo.style.display === "none") {
            moreInfo.style.display = "block";
            buttonText.textContent = "VIEW LESS"
        } else {
            moreInfo.style.display = "none";
            buttonText.textContent = "VIEW MORE"
        }
    }

    function getDragon1Tech() {
        const drag1 = document.getElementById("drag1Box");
        var request = new XMLHttpRequest();
    
        request.open("GET", "https://api.spacexdata.com/v3/dragons/dragon1", true)
        request.onload = function() {
            var data = JSON.parse(this.response)
    
            if (request.status >= 200 && request.status < 400) {
                console.log(data);
    
                var containerDragon = document.createElement("div");
                containerDragon.setAttribute("class", "containerFalcon")
    
                var dragonTitle = document.createElement("h2");
                dragonTitle.textContent = data.name;
    
                var dragonImage = document.createElement("img");
                dragonImage.setAttribute("src", "https://farm9.staticflickr.com/8618/16649075267_d18cbb4342_b.jpg");
                
                var dragonDescription = document.createElement("p");
                dragonDescription.textContent = data.description;
    
                var dragonWiki = document.createElement("a")
                dragonWiki.textContent = "More Info on Wikipedia";
                dragonWiki.setAttribute("href", data.wikipedia);
    
                containerDragon.appendChild(dragonTitle);
                containerDragon.appendChild(dragonImage);
                containerDragon.appendChild(dragonDescription);
                containerDragon.appendChild(dragonWiki);
    
                drag1.children[0].appendChild(containerDragon);
    
            } else {
                console.log("error")
            }
        }
    
        request.send()
    }

    function getDragon2Tech() {
        const drag1 = document.getElementById("drag2Box");
        var request = new XMLHttpRequest();
    
        request.open("GET", "https://api.spacexdata.com/v3/dragons/dragon2", true)
        request.onload = function() {
            var data = JSON.parse(this.response)
    
            if (request.status >= 200 && request.status < 400) {
                console.log(data);
    
                var containerDragon = document.createElement("div");
                containerDragon.setAttribute("class", "containerFalcon")
    
                var dragonTitle = document.createElement("h2");
                dragonTitle.textContent = data.name;
    
                var dragonImage = document.createElement("img");
                dragonImage.setAttribute("src", "https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg");
                
                var dragonDescription = document.createElement("p");
                dragonDescription.textContent = data.description;
    
                var dragonWiki = document.createElement("a")
                dragonWiki.textContent = "More Info on Wikipedia";
                dragonWiki.setAttribute("href", data.wikipedia);
    
                containerDragon.appendChild(dragonTitle);
                containerDragon.appendChild(dragonImage);
                containerDragon.appendChild(dragonDescription);
                containerDragon.appendChild(dragonWiki);
    
                drag1.children[0].appendChild(containerDragon);
    
            } else {
                console.log("error")
            }
        }
    
        request.send()
    }

    

    // Tesla Roadster Section
    function viewMoreRoadster() {
        var moreInfo = document.getElementById("roadsterHidden");
        var buttonText = document.getElementById("roadsterMore");
        if (moreInfo.style.display === "none") {
            moreInfo.style.display = "block";
            buttonText.textContent = "VIEW LESS"
        } else {
            moreInfo.style.display = "none";
            buttonText.textContent = "VIEW MORE"
        }
    }

    function getRoadsterTech() {
        const roadster = document.getElementById("roadsterBox");
        var request = new XMLHttpRequest();
    
        request.open("GET", "https://api.spacexdata.com/v3/roadster", true)
        request.onload = function() {
            var data = JSON.parse(this.response)
    
            if (request.status >= 200 && request.status < 400) {
                console.log(data);
    
                var containerRoadster = document.createElement("div");
                containerRoadster.setAttribute("class", "containerFalcon")
    
                var roadsterTitle = document.createElement("h2");
                roadsterTitle.textContent = data.name;
    
                var roadsterImage = document.createElement("img");
                roadsterImage.setAttribute("src", "https://farm5.staticflickr.com/4676/40110297852_5e794b3258_b.jpg");
                
                var roadsterDescription = document.createElement("p");
                roadsterDescription.textContent = data.details;
    
                var roadsterWiki = document.createElement("a")
                roadsterWiki.textContent = "More Info on Wikipedia";
                roadsterWiki.setAttribute("href", data.wikipedia);
    
                containerRoadster.appendChild(roadsterTitle);
                containerRoadster.appendChild(roadsterImage);
                containerRoadster.appendChild(roadsterDescription);
                containerRoadster.appendChild(roadsterWiki);
    
                roadster.children[0].appendChild(containerRoadster);
    
            } else {
                console.log("error")
            }
        }
    
        request.send()
    }

// This function is to open the Contact Form
function openContactForm() {
    var contactForm = document.getElementById("myModal")
    contactForm.style.display = "block";
}

function closeContactForm() {
    var closeContact = document.getElementById("myModal")
    closeContact.style.display = "none";
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