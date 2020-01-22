window.onload = function() {
    console.log("Hello World");

    $('.mobile-nav-button').on('click', function(){
        $('ul').toggleClass('open');
    })

    $('a').on('click', function(){
        $("a.active").toggleClass('active');
        $(this).toggleClass('active');
    })

    $('#about-section').scroll(function(){
        $('#about-link').toggleClass('active');
    })
}