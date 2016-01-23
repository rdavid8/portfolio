(function(module) {
  pageView = {};

  pageView.initPage = function(){
    Project.all.forEach(function(a){
      $('#portfolio').append(a.postProj());
    });
  };

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
  $(function($){
    $( '.menu-btn' ).click(function(){
      $('.responsive-menu').addClass('expand');
      $('.menu-btn').addClass('btn-none');
    });

    $( '.close-btn' ).click(function(){
      $('.responsive-menu').removeClass('expand');
      $('.menu-btn').removeClass('btn-none');
    });
  });

  module.pageView = pageView;
})(window);
