
  $(window).scroll(function() {
    if($(this).scrollTop() > 60)  /*height in pixels when the navbar becomes non opaque*/ 
    {
        alert("work");
        $('.nav.opaque-navbar').addClass('.opaque');
    } else {
        $('.nav.opaque-navbar').removeClass('.opaque');
    }
});