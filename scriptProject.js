
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

  function dotting(){
    let dot = document.getElementById('dot');
    let dotTwo = document.getElementById('dotTwo');
    let dotThree = document.getElementById('dotThree');
    setTimeout( function(){
      dot.innerHTML='&#xf152;';
    }, 1000);
    setTimeout( function(){
      dotTwo.innerHTML='&#xf152;';
    }, 2000);
    setTimeout( function(){
      dotThree.innerHTML='&#xf152;';
    }, 3000);
    setTimeout( function(){
      dot.innerHTML='';
      dotTwo.innerHTML='';
      dotThree.innerHTML='';
    }, 4000);
  }
  //call animation
  dotting()
  //Animate every 4 seconds
  setInterval(dotting, 5000);

  /* make navbar change on scroll 
    $(window).scroll(function() {
      var top = $(document).scrollTop();
      if (top > 50) {
        alert('here');
        $('.navbar').css('background-color','#eaddca');
      } else {
        $('.navbar').css('background', 'transparent');
      }
   });*/
});
