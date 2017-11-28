
$(document).ready(function () {

  //initial check to make sure jquery loaded
  //alert('jquery loaded');

  //add bigIcons animation classes on mouseover
  $(".bigIcon").on('mouseover', function () {
    $("a.fa-github.bigIcon").addClass('animated swing infinite');
    $("a.fa-linkedin.bigIcon").addClass('animated wobble infinite');
    $("a.fa-facebook.bigIcon").addClass('animated bounce infinite');
    $("a.fa-twitter.bigIcon").addClass('animated jello infinite');
  });
  //remove bigIcons animation classes on mouseout
  $(".bigIcon").on('mouseout', function () {
    $("a.fa-github.bigIcon").removeClass('animated swing infinite');
    $("a.fa-linkedin.bigIcon").removeClass('animated wobble infinite');
    $("a.fa-facebook.bigIcon").removeClass('animated bounce infinite');
    $("a.fa-twitter.bigIcon").removeClass('animated jello infinite');
  });

  /* make navbar change on scroll */
  $(window).scroll(function () {
    var top = $(document).scrollTop();

    if (top > 200) {
      //alert('here');
      $('.navbar').css('background-color', 'green');
      $('.navbar').css('opacity', '1');
      $('.navbar-right li > a').css('color', '#D5D5D5');
      //$('.navbar-brand').css('color', '#D5D5D5');

    } else {
      $('.navbar').css('background', 'rgba(255, 255, 255, 0.3');
      //$('.navbar').css('background-color', 'white');
      //$('.navbar').css('opacity', '.5');
      $('.navbar-right li > a').css('color', 'black');
      $('.navbar-brand').css('color', 'black');

    }
  });

  /* change menu items on hover */
  $('.navbar-right li').hover(function () {
    //alert('here');
    
    $(this).addClass('hove');
  }, function () {
    $(this).removeClass('hove');
  });
  /* make card flip on click*/
  $('.flip-container').click(function() {
    $(this).toggleClass('flipped');
  });

});


