function logo(){
    document.getElementById("modal").style.display = "none";
        document.getElementById("sun").classList.remove('selectorbuttonfocus');
        document.getElementById("wind").classList.remove('selectorbuttonfocus');
        document.getElementById("extra").classList.remove('selectorbuttonfocus');
}

function portfolio(){
    location.href='index2.html';
}



function temacache(){
 var root = document.querySelector(':root');
 var rootStyles = getComputedStyle(root);
 var state=localStorage.getItem("Theme");

 if (state == 'dark'){
    root.style.setProperty('--selectoractive', 'rgb(255,255,255)');
     root.style.setProperty('--navbar', 'rgb(43,43,43)');
     root.style.setProperty('--icons', 'white');
     root.style.setProperty('--bg','rgb(1, 1, 82)');
     root.style.setProperty('--map','rgb(88,88,88)');
     root.style.setProperty('--border','rgba(255,255,255,100%)');
     root.style.setProperty('--maphover','rgb(15, 52, 94)');
     localStorage.setItem("Tema",'1');
     localStorage.setItem("Theme",'dark');
 }

 else{
    root.style.setProperty('--selectoractive','black');
     root.style.setProperty('--navbar', 'rgb(255,255,255)');
     root.style.setProperty('--icons', 'black');
     root.style.setProperty('--bg','rgb(18, 63, 114)');
     root.style.setProperty('--map','grey');
     root.style.setProperty('--maphover','rgb(15, 52, 94)');
     root.style.setProperty('--border','rgba(0,0,0,0)');
     localStorage.setItem("Tema",'0');
     localStorage.setItem("Theme",'light');
 }

 if (window.matchMedia("(orientation: portrait)").matches) {
    document.getElementById("vertical").style.display = "flex";
    document.getElementById("horizontal").style.display = "none";
}
 
 if (window.matchMedia("(orientation: landscape)").matches) {
    document.getElementById("vertical").style.display = "none";
    document.getElementById("horizontal").style.display = "flex";
 }

}

function temas(){
    var state=localStorage.getItem("Tema");
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);

    if (state == 0){
        root.style.setProperty('--selectoractive', 'rgb(255,255,255)');
        root.style.setProperty('--navbar', 'rgb(43,43,43)');
        root.style.setProperty('--icons', 'white');
        root.style.setProperty('--bg','rgb(1, 1, 82)');
        root.style.setProperty('--map','rgb(88,88,88)');
        root.style.setProperty('--border','rgba(255,255,255,100%)');
        root.style.setProperty('--maphover','rgb(15, 52, 94)');
        localStorage.setItem("Tema",'1');
        localStorage.setItem("Theme",'dark');
    }

    else{
        root.style.setProperty('--selectoractive','black');
        root.style.setProperty('--navbar', 'rgb(255,255,255)');
        root.style.setProperty('--icons', 'black');
        root.style.setProperty('--bg','rgb(18, 63, 114)');
        root.style.setProperty('--map','grey');
        root.style.setProperty('--maphover','rgb(15, 52, 94)');
        root.style.setProperty('--border','rgba(0,0,0,0)');
        localStorage.setItem("Tema",'0');
        localStorage.setItem("Theme",'light');
    }
}

function modo(modo){
    switch(modo){
    case 'sun':
        document.getElementById("modal").style.display = "block";
        document.getElementById("forecast").innerHTML = desc;
        document.getElementById("temp").innerHTML = temp;
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById("pressure").innerHTML = pressure;
        document.getElementById("sensation").innerHTML = sensation;
        document.getElementById("sun").classList.add('selectorbuttonfocus');
        document.getElementById("wind").classList.remove('selectorbuttonfocus');
        document.getElementById("extra").classList.remove('selectorbuttonfocus');
    break;

    case 'wind':
        document.getElementById("modal").style.display = "block";
        document.getElementById("forecast").innerHTML = wndspd + ' m/s';
        document.getElementById("temp").innerHTML = wnddeg + 'º';
        document.getElementById("humidity").innerHTML = '';
        document.getElementById("pressure").innerHTML = '';
        document.getElementById("sun").classList.remove('selectorbuttonfocus');
        document.getElementById("wind").classList.add('selectorbuttonfocus');
        document.getElementById("extra").classList.remove('selectorbuttonfocus');
    break;

    case 'extra':
        document.getElementById("modal").style.display = "block";
        document.getElementById("forecast").innerHTML;
        document.getElementById("sun").classList.remove('selectorbuttonfocus');
        document.getElementById("wind").classList.remove('selectorbuttonfocus');
        document.getElementById("extra").classList.add('selectorbuttonfocus');
    break;

    default:
        document.getElementById("info").style.display = "none";
    }
  
}

var url = "https://api.openweathermap.org/data/2.5/weather?lat=";
var lat;
var dlon = "&lon=";
var lon;
var apikey = "&appid=03bf9e823e71f8ceae954d3f97babfdf&units=metric&lang=es";
var datos;
var desc;
var temp;
var wnddeg;
var wndspd;
var sensation;
var pressure;
var humidity;


function buscar(estado){
   switch(estado){
       case "Baja California":
           lat = 32.61;
           lon = -115.52;
           break;

        case "Baja California Sur":
            lat = 24.11;
            lon = -110.37;
           break;

        case "Coahuila":
            lat = 25.43;
            lon = -101.05;
           break;

        case "Chihuahua":
            lat = 28.67;
            lon = -106.20;
           break;

        case "Durango":
            lat = 24.02;
            lon = -104.71;
           break;

        case "Sinaloa":
            lat = 24.80;
            lon = -107.49;
           break;

        case "Sonora":
           break;

        case "Zacatecas":
           break;

        case "Nuevo León":
           break;

        case "San Luis Potosí":
            break;
 
        case "Tamaulipas":
            break;
 
        case "Aguascalientes":
            break;
 
        case "Colima":
            break;
 
        case "Jalisco":
            break;
 
        case "Michoacán":
            break;
 
        case "Nayarit":
            break;
 
        case "Campeche":
            break;
 
        case "Oaxaca":
            break;

        case "Puebla":
           break;

        case "Tabasco":
           break;

        case "Tlaxcala":
           break;

        case "Distrito Federal":
           break;

        case "Guanajuato":
           break;

        case "Guerrero":
           break;

        case "Hidalgo":
           break;

        case "México":
           break;

        case "Morelos":
           break;

        case "Querétaro":
           break;

        case "Veracruz":
           break;

        case "Chiapas":
           break;

        case "Quintana Roo":
           break;

        case "Yucatán":
            lat = 20.98;
            lon = 89.77;
           break;

        default:
            break;
   }
   
   
   
    fetch(url+lat+dlon+lon+apikey).then(function(response){
        return response.json();    
    })

    .then(function(data){
        datos = data;
        desc = data.weather[0].description;
        wndspd = data.wind.speed;
        wnddeg = data.wind.deg;
        wndgust = data.wind.gust;
        humidity = data.main.humidity;
        temp = data.main.temp;
        sensation = data.main.feels_like;
        pressure = data.main.pressure;
    })
console.log(datos);

}