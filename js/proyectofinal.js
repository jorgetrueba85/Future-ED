function logo(){
    location.href='index.html';
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

function nombres(nombre){
console.log(nombre);
}