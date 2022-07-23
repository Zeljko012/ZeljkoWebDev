$(window).load(function() {
    co = $('.container');
    $('.loader').animate({
        opacity: '0'
    }, 500, function() {
        co.animate({
            width: '100%',
            height: '100%',
            top: '0%',
            left: '0%'
        }, 500, function() {
            $(this).find('*').delay(250).animate({
                opacity: '1'
            }, 500);
            $(this).css('overflow', 'auto');
        });
    });
});