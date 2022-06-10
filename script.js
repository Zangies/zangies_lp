$(function(){
  $('#about, #member, #company, #contact').hover(
    function(){
      const targetId = $(this).attr('id');
      $('.' + targetId).addClass('active');3
      $('.top').removeClass('active');
    },
    function(){
      const targetId = $(this).attr('id');
      $('.' + targetId).removeClass('active');
      $('.top').addClass('active');
    },
  );
});