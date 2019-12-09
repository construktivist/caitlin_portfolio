window.onload = function() {
    console.log("Hello World");

    $('.mobile-nav-button').on('click', function(){
        $('ul').toggleClass('open');
    })
}