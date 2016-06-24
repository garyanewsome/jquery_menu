$(document).ready(function () {
  $('nav li').hover(function () {
    $('ul', this).slideDown();
  },function () {
    $('ul', this).slideUp();
    }
  );
});
