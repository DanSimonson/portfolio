//add animation classes on mouseover to bigIcons
$(".bigIcon").on('mouseover', function() {
  $("a.fa-github.bigIcon").addClass('animated swing infinite');
  $("a.fa-linkedin.bigIcon").addClass('animated wobble infinite');
  $("a.fa-facebook.bigIcon").addClass('animated bounce infinite');
  $("a.fa-twitter.bigIcon").addClass('animated jello infinite');
});
//remove animation classes on mouseover to bigIcons
$(".bigIcon").on('mouseout', function() {
  $("a.fa-github.bigIcon").removeClass('animated swing infinite');
  $("a.fa-linkedin.bigIcon").removeClass('animated wobble infinite');
  $("a.fa-facebook.bigIcon").removeClass('animated bounce infinite');
  $("a.fa-twitter.bigIcon").removeClass('animated jello infinite');
});
