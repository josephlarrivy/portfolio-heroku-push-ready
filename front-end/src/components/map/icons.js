import L from 'leaflet';


const homeIcon = new L.Icon({
    iconUrl: require('../map/home-icon-final.png'),
    // iconRetinaUrl: require('../img/marker-pin-person.svg'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    // iconSize: new L.Point(20, 25),
    iconSize: new L.Point(50, 50),
    // className: 'home-icon-div'

});



export { homeIcon };