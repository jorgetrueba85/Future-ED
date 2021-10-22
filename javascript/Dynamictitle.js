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

 // bind functions to blur and focus events
 window.onblur = newTitle;
 window.onfocus = oldTitle;
