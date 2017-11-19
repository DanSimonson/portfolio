
$(document).ready(function(){

  //initial check to make sure jquery loaded
  //alert('jquery loaded');
  //add bigIcons animation classes on mouseover
  $(".bigIcon").on('mouseover', function() {
    $("a.fa-github.bigIcon").addClass('animated swing infinite');
    $("a.fa-linkedin.bigIcon").addClass('animated wobble infinite');
    $("a.fa-facebook.bigIcon").addClass('animated bounce infinite');
    $("a.fa-twitter.bigIcon").addClass('animated jello infinite');
  });
  //remove bigIcons animation classes on mouseout
  $(".bigIcon").on('mouseout', function() {
    $("a.fa-github.bigIcon").removeClass('animated swing infinite');
    $("a.fa-linkedin.bigIcon").removeClass('animated wobble infinite');
    $("a.fa-facebook.bigIcon").removeClass('animated bounce infinite');
    $("a.fa-twitter.bigIcon").removeClass('animated jello infinite');
  });

  function changeText() {
    let text = document.getElementById('text');
    
    setTimeout( function(){
      text.innerHTML = 'Every once in awhile, a new technology, an old problem, and a big idea turn into innovation.';
    }, 5000);
    setTimeout( function(){
      text.innerHTML = "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.";
    }, 10000);
    setTimeout( function(){
      text.innerHTML = "If I can't explain it to a 6-year old, I don't understand it myself.";
    }, 15000);
    setTimeout( function(){
      text.innerHTML = "My job is to connect to people, to interact with them in a way that leaves them more interested.";
    }, 20000);
    setTimeout( function(){
      text.innerHTML = "People are what they repeatedly do. Excellence, therefore, is not an act, but a habit.";
    }, 25000);
    setTimeout( function(){
      text.innerHTML = "A satisfied customer is the best business strategy of all.";
    }, 30000);
    setTimeout( function(){
      text.innerHTML = "He who knows best knows how little he knows";
    }, 35000);
  }
  //call animation
  changeText();
  //Animate every ... seconds
  setInterval(changeText, 36000);

});
