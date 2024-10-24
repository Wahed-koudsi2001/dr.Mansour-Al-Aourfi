(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.navbar').fadeIn('slow').css('display', 'flex');
    //     } else {
    //         $('.navbar').fadeOut('slow').css('display', 'none');
    //     }
    // });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Open popup when .popup-click-one is clicked
    $('.popup-click-one').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        $('#pop-up-one').addClass('show'); // Target specific pop-up
    });

    // Close popup when .close-pop-up is clicked
    $('.close-pop-up').on('click', function () {
        $('#pop-up-one').removeClass('show'); // Target specific pop-up
    });

    // Close popup when clicking outside the .inner or trigger
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.inner, .popup-click-one').length) {
            $('#pop-up-one').removeClass('show'); // Ensure it closes on outside click
        }
    });

    // Open popup when .popup-click-one is clicked
    $('.popup-click-two').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        $('#pop-up-two').addClass('show'); // Target specific pop-up
    });

    // Close popup when .close-pop-up is clicked
    $('.close-pop-up').on('click', function () {
        $('#pop-up-two').removeClass('show'); // Target specific pop-up
    });

    // Close popup when clicking outside the .inner or trigger
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.inner, .popup-click-two').length) {
            $('#pop-up-two').removeClass('show'); // Ensure it closes on outside click
        }
    });


    // Open popup when .popup-click-one is clicked
    $('.popup-click-three').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        $('#pop-up-three').addClass('show'); // Target specific pop-up
    });

    // Close popup when .close-pop-up is clicked
    $('.close-pop-up').on('click', function () {
        $('#pop-up-three').removeClass('show'); // Target specific pop-up
    });

    // Close popup when clicking outside the .inner or trigger
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.inner, .popup-click-three').length) {
            $('#pop-up-three').removeClass('show'); // Ensure it closes on outside click
        }
    });


    // Open popup when .popup-click-one is clicked
    $('.popup-click-four').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        $('#pop-up-four').addClass('show'); // Target specific pop-up
    });

    // Close popup when .close-pop-up is clicked
    $('.close-pop-up').on('click', function () {
        $('#pop-up-four').removeClass('show'); // Target specific pop-up
    });

    // Close popup when clicking outside the .inner or trigger
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.inner, .popup-click-four').length) {
            $('#pop-up-four').removeClass('show'); // Ensure it closes on outside click
        }
    });

    // Open popup when .popup-click-one is clicked
    $('.popup-click-five').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        $('#pop-up-five').addClass('show'); // Target specific pop-up
    });

    // Close popup when .close-pop-up is clicked
    $('.close-pop-up').on('click', function () {
        $('#pop-up-five').removeClass('show'); // Target specific pop-up
    });

    // Close popup when clicking outside the .inner or trigger
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.inner, .popup-click-five').length) {
            $('#pop-up-five').removeClass('show'); // Ensure it closes on outside click
        }
    });

    // Open popup when .popup-click-one is clicked
    $('.popup-click-six').on('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        $('#pop-up-six').addClass('show'); // Target specific pop-up
    });

    // Close popup when .close-pop-up is clicked
    $('.close-pop-up').on('click', function () {
        $('#pop-up-six').removeClass('show'); // Target specific pop-up
    });

    // Close popup when clicking outside the .inner or trigger
    $(document).on('click', function (event) {
        if (!$(event.target).closest('.inner, .popup-click-six').length) {
            $('#pop-up-six').removeClass('show'); // Ensure it closes on outside click
        }
    });

    $(document).ready(function () {
        // When the modal is hidden (after close)
        $('#successModal').on('hidden.bs.modal', function () {
            $('#coordinatorNumber').val('');
            $('#message').val('');
            $('#coordinatorNumber1').val('');
        });
    });


    $(document).ready(function () {
        // When the close button is clicked
        $('.close-pop-email').on('click', function () {
            $('#successModal').modal('hide');
            $('#coordinatorNumber').val('');  
            $('#message').val('');           
            $('#coordinatorNumber1').val('');
        });
    });

})(jQuery);