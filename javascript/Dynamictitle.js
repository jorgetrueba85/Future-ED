        if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e)
  {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    window.event.returnValue = false;
  });
}
  
var origTitle = document.title;

 // function to change title when focusing on tab
 function oldTitle() {
   document.title = origTitle;
 }

 // function to change title when un-focusing on tab
 function newTitle() {
   document.title = 'Regresaaa :(';
 }

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}
        if (window.matchMedia) {
  // Check if the dark-mode Media-Query matches
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    changeCSS('css/stylesdark.css', 0);
  } else {
    changeCSS('css/styleslight.css', 0);
  }
} else {
  changeCSS('css/stylesdark.css', 0);
}

 // bind functions to blur and focus events
 window.onblur = newTitle;
 window.onfocus = oldTitle;
