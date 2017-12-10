
   $(document).ready(function () {
    
      //initial check to make sure jquery loaded
      //alert('jquery loaded');
      
      //force load to top
      $(this).scrollTop(0);
  
  //toggle the font awesome icons in a ul li
  $("#icon").click(function() {
    //alert ('clicked button');
    $("ul.hideShow").slideToggle(2000);
    //$("ul.hideShow").toggle();
     $("ul.hideShow > li").css('display', 'inline-block');
  });

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

  window.addEventListener("scroll", yScroll);

  var pagetop, menu, yPos;
  function yScroll(){
    pagetop = document.getElementById('pagetop');
    menu = document.getElementById('menu');
    yPos = window.pageYOffset;
    if(yPos > 150){
      pagetop.style.height = "36px";
      pagetop.style.paddingTop = ".1px";
      menu.style.height = "0px";
      $("#icon").fadeIn(3000);

    } else {
      pagetop.style.height = "150px";
      pagetop.style.paddingTop = ".1px";
      menu.style.height = "5px";
      $("#icon").fadeOut(3000);
    }
  }
  

  /* make navbar change on scroll 
    $(window).scroll(function() {
      var top = $(document).scrollTop();

      if (top > 60) {
        $('.navbar').css('background-color','#376D5C');
      } else {
        $('.navbar').css('background-color', 'transparent');
     }
   });
  */
  });
