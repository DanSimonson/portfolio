
$(document).ready(function(){

  //initial check to make sure jquery loaded
  //alert('jquery loaded');

  //hourglass animation
  function hourglassTip(){
    let hourglass = document.getElementById('hourGlassTip');
    hourglass.innerHTML = '&#xf251;';

    setTimeout (function(){
      hourglass.innerHTML = '&#xf252;';

    }, 2000);
    setTimeout (function(){
      hourglass.innerHTML = '&#xf253;';

    }, 4000);
  }
  //call animation
  hourglassTip();
  //Animate every 6 seconds
  setInterval(hourglassTip, 6000);

});
