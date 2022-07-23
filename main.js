$(function(){

  $(".login").hide();
  $("#register_text").addClass("active");

  $("#login_text").click(function(){
    $(this).addClass("active");
    $("#register_text").removeClass("active");
    $(".login").show();
    $(".register").hide();
  });

  $("#register_text").click(function(){
    $(this).addClass("active");
    $("#login_text").removeClass("active");
    $(".register").show();
    $(".login").hide();
  });


});