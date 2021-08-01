$(document).ready(function(){
  $('.btn').click(function(){
    $('form').toggle(600);
  });
  $('.fa-eye').click(function(){
    $(this).toggleClass("fa-eye-slash")
  });
  $('.fa-eye').click(function(){
    $(this).toggleClass('active');
    if($ (this).hasClass('active')){
      $(this).prev('input').attr('type','text');
    } else{
    $(this).prev('input').attr('type','password');
    }
  });
});
