var x = 0;
$( document ).ready(function() {

  $('tr').click(function() {
  x = x + 1;
  if ($(this).find('td:first-child').hasClass('color-p1')){
    $('td', this).find('td:nth-child(x)').addClass('color-p1');
  } else {
    $(this).find('td:nth-child(1)').addClass('color-p1');
  }});

});
/*
if ($(this).hasClass('color-p1')){
  $('tr:first-child').removeClass('color-p1');}
else {*/
