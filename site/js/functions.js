function openNav() {
	"use strict";
	document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
	"use strict";
	document.getElementById("mySidenav").style.width = "0";
}

function locatorMapOne() {
	"use strict";
    var studioOne = {lat: 45.542703, lng: 9.078482000000008};
    var map = new google.maps.Map(document.getElementById("mapOne"), {
      zoom: 15,
      center: studioOne
    });
    var marker = new google.maps.Marker({
    position: studioOne,
    map: map
	});
}
