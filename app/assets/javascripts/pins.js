$(document).ready(function(){
  alert("hello");
  $('#pins').imagesLoaded
  $('#pins').masonry({
    itemSelector: ".box",
    isAnimated: true
  });
});