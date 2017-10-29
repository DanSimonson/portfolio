
  //toggle the font awesome icons in a ul li
  $("#icon").click(function() {
    $("ul.hideShow").toggle();
    $("ul.hideShow > li").css('display', 'inline-block');
  });

  //add animation classes on mouseover to bigIcons
  $(".bigIcon").on('mouseover', function() {
      $("a.fa-github.bigIcon").addClass('animated swing infinite');
      $("a.fa-linkedin.bigIcon").addClass('animated wobble infinite');
      $("a.fa-facebook.bigIcon").addClass('animated bounce infinite');
      $("a.fa-twitter.bigIcon").addClass('animated jello infinite');
  });

  //remove animation classes on mouseover to bigIcons
  $(".bigIcon").on('mouseout', function() {
    $(".bigIcon").removeClass('animated');
  });
