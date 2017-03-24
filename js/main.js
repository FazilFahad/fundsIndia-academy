$(document).ready(function() {

    function headRoom() {
        var header = new Headroom(document.querySelector("#header"), {
            tolerance: {
                up: 8,
                down: 5
            },
            offset: 120,
        });
        header.init();
    }
    // headRoom();


    function faqToggle() {
        $(".faq_single h3").click(function() {
            console.log("toggle class");
            $(this).toggleClass("icon");
            $(this).next(".faq_content").slideToggle(350);
        });
    }
    faqToggle();

    function showPassword() {
        $('.hide-show').show();
        $('.hide-show span').addClass('show_text')

        $('.hide-show span').click(function() {
            if ($(this).hasClass('show_text')) {
                $('input[name="login[password]"]').attr('type', 'text');
                $(this).removeClass('show_text');
            } else {
                $('input[name="login[password]"]').attr('type', 'password');
                $(this).addClass('show_text');
            }
        });

        // $('form button[type="submit"]').on('click', function() {
        //     $('.hide-show span').addClass('show_text');
        //     $('.hide-show').parent().find('input[name="login[password]"]').attr('type', 'password');
        // });
    }
    showPassword();

    function formStyle() {
        $(".icon_wrapper").focusin(function() {
            $(this).find(".input-icon").animate({ "opacity": "0" }, 100);
        });

        $(".icon_wrapper").focusout(function() {
            $(this).find(".input-icon").animate({ "opacity": "1" }, 100);
        });
    }
    formStyle();

    function affixCount() {
        $('.quiz_question_count').affix({
            offset: {
                top: $('.quiz_question_count').offset().top - 76
            }
        });
    }
    affixCount();

    // resize
    $(window).resize(function() {

    });
});
