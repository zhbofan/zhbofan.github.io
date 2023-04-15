/* Map API

Google maps now requires a billing account
Use generic Leaflet.js mapping library
Similar use of objects
Similar process from function to HTML page
Get the code: https://jsfiddle.net/MillerCP/85avdxke/3/

*/

function mapLoad(){
    //Define the coordinate
    var latLng = [36.101212, 114.328131];

    //Set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiemhib2ZhbiIsImEiOiJjbGVtOXYzdXYwemN1M3VuaDVpbmF1NDN1In0.rjDtxNOqGoUFzUzxMF5Nbg';
    
    //Define two tile layer variables

    var grayscale = L.tileLayer(mbUrl, {
        id:'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr
    });

    var streets = L.tileLayer(mbUrl, {
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        attribution: mbAttr
    });

    //Define map object

    var map = L.map('map', { // the map <div> in the html
        center: latLng,
        zoom: 16,
        layers: [streets]
    });

    //Add tile layers to base layer object
    //Add to the map
    //Add a marker with pop-up

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };
    
    L.control.layers(baseLayers).addTo(map);

    L.marker(latLng).addTo(map).bindPopup("<b>Xin'anzhuang<br>West, Anyang</b>").openPopop();

    //Add a nifty click event
    var popup = L.popup();

    function onMapClick(e){
        popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }
    map.on('click', onMapClick);
}