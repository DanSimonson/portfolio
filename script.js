
//toggle the font awesome icons in a ul li
$("#icon").click(function() {
  $("ul.hideShow").toggle();
  $("ul.hideShow > li").css('display', 'inline-block');
});
