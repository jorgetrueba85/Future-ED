function logo(){
    document.getElementById("modal").style.display = "none";
        document.getElementById("sun").classList.remove('selectorbuttonfocus');
        document.getElementById("wind").classList.remove('selectorbuttonfocus');
        document.getElementById("extra").classList.remove('selectorbuttonfocus');
        document.getElementById("ipod").style.display = 'flex';
        document.getElementById("mexicon").style.display = 'none';
}

function portfolio(){
    location.href='index2.html';
}

function orientacion(){
 if (window.innerHeight > window.innerWidth) {
    document.getElementById("vertical").style.display = "flex";
    document.getElementById("horizontal").style.display = "none";
} 
else if (window.innerHeight < window.innerWidth) {
    document.getElementById("vertical").style.display = "none";
    document.getElementById("horizontal").style.display = "flex";
 }
}



function temacache(){
 var root = document.querySelector(':root');
 var rootStyles = getComputedStyle(root);
 var state=localStorage.getItem("Theme");
 document.getElementById("ipod").style.display = 'flex';
 document.getElementById("mexicon").style.display = 'none';

 if (state == 'dark'){
    root.style.setProperty('--selectoractive', 'rgb(255,255,255)');
     root.style.setProperty('--navbar', 'rgb(43,43,43)');
     root.style.setProperty('--icons', 'white');
     root.style.setProperty('--bg','rgb(1, 1, 82)');
     root.style.setProperty('--map','rgb(88,88,88)');
     root.style.setProperty('--border','rgba(255,255,255,100%)');
     root.style.setProperty('--maphover','rgb(15, 52, 94)');
     document.getElementById("moonic").style.display = 'none';
     document.getElementById("sunic").style.display = 'flex';
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
     document.getElementById("moonic").style.display = 'flex';
     document.getElementById("sunic").style.display = 'none';
     localStorage.setItem("Tema",'0');
     localStorage.setItem("Theme",'light');
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
        document.getElementById("moonic").style.display = 'none';
        document.getElementById("sunic").style.display = 'flex';
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
        document.getElementById("moonic").style.display = 'flex';
        document.getElementById("sunic").style.display = 'none';
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
        document.getElementById("humidity").innerHTML = "<b>Humedad:  </b>" + humidity + "%";
        document.getElementById("pressure").innerHTML = "<b>Presión Atmosférica:  </b>" + pressure + "hPA";
        document.getElementById("sensation").innerHTML = "<b>Sensación Térmica:  </b>" + sensation + " Cº";
        document.getElementById("mexicon").style.display = 'flex';
        document.getElementById("ipod").style.display = 'none';
        document.getElementById("mensaje").style.display = 'block';
        document.getElementById("sun").classList.add('selectorbuttonfocus');
        document.getElementById("wind").classList.remove('selectorbuttonfocus');
        document.getElementById("extra").classList.remove('selectorbuttonfocus');
    break;

    case 'wind':
        document.getElementById("modal").style.display = "block";
        document.getElementById("state").innerHTML = estadou;
        document.getElementById("forecast").innerHTML = "<b>Velocidad:  </b>" + wndspd + ' m/s';
        document.getElementById("temp").innerHTML = "<b>Aceleración:  </b>" + wndgust + "";
        document.getElementById("sensation").innerHTML = "<b>Hacia:  </b>" + wnddeg + 'º';
        document.getElementById("humidity").innerHTML = '';
        document.getElementById("pressure").innerHTML = "<b>Presión Atmosférica:  </b>" + pressure + "hPA";
        document.getElementById("mexicon").style.display = 'flex';
        document.getElementById("ipod").style.display = 'none';
        document.getElementById("mensaje").style.display = 'none';
        document.getElementById("sun").classList.remove('selectorbuttonfocus');
        document.getElementById("wind").classList.add('selectorbuttonfocus');
        document.getElementById("extra").classList.remove('selectorbuttonfocus');
    break;

    case 'extra':
        document.getElementById("modal").style.display = "block";
        document.getElementById("forecast").innerHTML;
        document.getElementById("ipod").style.display = 'none';
        document.getElementById("sun").classList.remove('selectorbuttonfocus');
        document.getElementById("wind").classList.remove('selectorbuttonfocus');
        document.getElementById("mexicon").style.display = 'flex';
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
var test = false;

function buscar(estado){
estadou = estado;
   switch(estado){
       case "Baja California":
           lat = 32.61;
           lon = -115.52;
           test = false;
           break;

        case "Baja California Sur":
            lat = 24.11;
            lon = -110.37;
            test = false;
           break;

        case "Coahuila":
            lat = 25.43;
            lon = -101.05;
            test = false;
           break;

        case "Chihuahua":
            lat = 28.67;
            lon = -106.20;
            test = false;
           break;

        case "Durango":
            lat = 24.02;
            lon = -104.71;
            test = false;
           break;

        case "Sinaloa":
            lat = 24.80;
            lon = -107.49;
            test = false;
           break;

        case "Sonora":
            lat = 29.08;
            lon = -111.12;
            test = false;
           break;

        case "Zacatecas":
            lat = 22.76;
            lon = -102.62;
            test = false;
           break;

        case "Nuevo León":
            lat = 25.64;
            lon = -100.44;
            test = false;
           break;

        case "San Luis Potosí":
            lan = 22.11;
            lon = -101.09;
            test = false;
            break;
 
        case "Tamaulipas":
            lan = 23.74;
            lon = -99.17;
            test = false;
            break;
 
        case "Aguascalientes":
            lat = 21.88;
            lon = -102.36;
            test = false;
            break;
 
        case "Colima":
            lat = 19.24;
            lon = -103.76;
            test = false;
            break;
 
        case "Jalisco":
            lat = 20.67;
            lon = -103.40;
            break;
 
        case "Michoacán":
            lat = 19.70;
            lon = -101.27;
            break;
 
        case "Nayarit":
            lan = 21.50;
            lon = -104.91;
            break;
 
        case "Campeche":
            lan = 19.83;
            lon = -90.56;
            break;
 
        case "Oaxaca":
            lat = 17.08;
            lon = -96.80;
            break;

        case "Puebla":
            lat = 19.04;
            lon = -98.26;
           break;

        case "Tabasco":
            lat = 17.99;
            lon = -93.02;
           break;

        case "Tlaxcala":
            lat = 19.31;
            lon = -98.25;
           break;

        case "Distrito Federal":
            lat = 19.32;
            lon = -99.43;
           break;

        case "Guanajuato":
            lat = 21.12;
            lon = -101.73;
            break;
            
        case "Guerrero":
            lat = 17.54;
            lon = -99.53;    
           break;

        case "Hidalgo":
           break;

        case "Estado de México":
            lat = 19.29;
            lon = -99.70;
           break;

        case "Morelos":
            lat = 18.93;
            lon = -99.31;
           break;

        case "Querétaro":
           break;

        case "Veracruz":
            lat = 19.54;
            lon = -96.95;
           break;

        case "Chiapas":
            lat = 16.74;
            lon = -93.19;
           break;

        case "Quintana Roo":
            lat = 21.12;
            lot = -86.91;
           break;

        case "Yucatán":
            lat = 20.98;
            lon = 89.77;
            test = false;
           break;

        case "Test":
            lat = 20.98;
            lon = 89.77;
            test = true;
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
if (test == true){
    document.getElementById("modal").style.display = "none";
}
else {
 modo('sun');
}
}