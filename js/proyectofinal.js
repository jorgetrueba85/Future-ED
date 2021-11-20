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
        document.getElementById("state").innerHTML = estadou;
        document.getElementById("forecast").innerHTML = desc;
        document.getElementById("temp").innerHTML = temp + " Cº";
        document.getElementById("humidity").innerHTML = "Humedad: " + humidity + "%";
        document.getElementById("pressure").innerHTML = "Presión Atmosférica: " + pressure + "hPA";
        document.getElementById("sensation").innerHTML = "Sensación Térmica: " + sensation + " Cº";
        document.getElementById("sun").classList.add('selectorbuttonfocus');
        document.getElementById("wind").classList.remove('selectorbuttonfocus');
        document.getElementById("extra").classList.remove('selectorbuttonfocus');
    break;

    case 'wind':
        document.getElementById("modal").style.display = "block";
        document.getElementById("state").innerHTML = estadou;
        document.getElementById("forecast").innerHTML = "Velocidad: " + wndspd + ' m/s';
        document.getElementById("temp").innerHTML = "Aceleración: " + wndgust + "";
        document.getElementById("sensation").innerHTML = "Hacia: " + wnddeg + 'º';
        document.getElementById("humidity").innerHTML = '';
        document.getElementById("pressure").innerHTML = "Presión Atmosférica: " + pressure + "hPA";
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
var estadou;

function buscar(estado){
estadou = estado;
   switch(estado){
       case "Baja California":
           lat = 32.61;
           lon = -115.52;
           modo('sun');
           break;

        case "Baja California Sur":
            lat = 24.11;
            lon = -110.37;
            modo('sun');
           break;

        case "Coahuila":
            lat = 25.43;
            lon = -101.05;
            modo('sun');
           break;

        case "Chihuahua":
            lat = 28.67;
            lon = -106.20;
            modo('sun');
           break;

        case "Durango":
            lat = 24.02;
            lon = -104.71;
            modo('sun');
           break;

        case "Sinaloa":
            lat = 24.80;
            lon = -107.49;
            modo('sun');
           break;

        case "Sonora":
            modo('sun');
           break;

        case "Zacatecas":
            modo('sun');
           break;

        case "Nuevo León":
            modo('sun');
           break;

        case "San Luis Potosí":
            modo('sun');
            break;
 
        case "Tamaulipas":
            modo('sun');
            break;
 
        case "Aguascalientes":
            modo('sun');
            break;
 
        case "Colima":
            modo('sun');
            break;
 
        case "Jalisco":
            modo('sun');
            break;
 
        case "Michoacán":
            modo('sun');
            break;
 
        case "Nayarit":
            modo('sun');
            break;
 
        case "Campeche":
            modo('sun');
            break;
 
        case "Oaxaca":
            modo('sun');
            break;

        case "Puebla":
            modo('sun');
           break;

        case "Tabasco":
            modo('sun');
           break;

        case "Tlaxcala":
            modo('sun');
           break;

        case "Distrito Federal":
            modo('sun');
           break;

        case "Guanajuato":
            modo('sun');
           break;

        case "Guerrero":
            modo('sun');
           break;

        case "Hidalgo":
            modo('sun');
           break;

        case "México":
            modo('sun');
           break;

        case "Morelos":
            modo('sun');
           break;

        case "Querétaro":
            modo('sun');
           break;

        case "Veracruz":
            modo('sun');
           break;

        case "Chiapas":
            modo('sun');
           break;

        case "Quintana Roo":
            modo('sun');
           break;

        case "Yucatán":
            lat = 20.98;
            lon = 89.77;
            modo('sun');
           break;

        case "Test":
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