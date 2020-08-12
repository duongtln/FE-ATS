// Get the offset position of the navbar
var sticky = 9999;
// Get the header
var header = document.getElementById("menu-fixed");
var functionFixed = document.getElementById("function-fixed");
var logoTextFixed = document.getElementById("logo-text-fixed");
// Intro JS
var intro = introJs();
intro.setOptions({
    steps: [{
            intro: "Welcome to ATS. Click Next button to instruction."
        },
        {
            element: document.querySelector('#intro-step-1'),
            intro: "This is your notification. All notification in there.",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-2'),
            intro: "You can search anymore in there.",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-3'),
            intro: 'You can change Vietnam or English language.',
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-4'),
            intro: "Your Infomation and some setting.",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-5'),
            intro: "This is menu.",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-6'),
            intro: "This is tools.",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-7'),
            intro: "This is your roadmap.",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-8'),
            intro: "This is School of Sales and Service/ School of Recovery",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-9'),
            intro: "This is FE Academy",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-10'),
            intro: "This is mandatory training for individual",
            disableInteraction: true
        },
        {
            element: document.querySelector('#intro-step-11'),
            intro: "This is mandatory training for employee",
            disableInteraction: true
        },
        {
            element: document.querySelector('#yui_3_17_2_1_1596430403574_31'),
            intro: "This is curriculum.",
            disableInteraction: true
        },
        {
            intro: "Completed. Have fun!"
        },
    ]
});

intro.start();
intro.onexit(function () {
    // Get the offset position of the navbar
    sticky = header.offsetTop;

    // Animation Roadmap

    gsap.from(".tool-img", {
        opacity: 0,
        scaleX: 0,
        duration: 0.7,
        delay: 0.5,
        stagger: 0.4,
        ease: "elastic"
    });

    gsap.from(".text-tools", {
        opacity: 0,
        duration: 0.8,
        delay: 1,
        x: -30,
        stagger: 0.3
    })

    //Timeline horizontal
    gsap.from('.timeline-horizontal:before', {
        scaleX: 2,
        duration: 2,
        delay: 0.2
    });

    //Clock icon
    gsap.from(".time-clock", {
        duration: 2,
        scale: 0.5,
        opacity: 0,
        delay: 0.5,
        stagger: 0.3,
        ease: "elastic",
        force3D: true
    });

    //Date Text
    var timelineDate = $(".timeline-date");
    var splitTimelineDate = new SplitText(timelineDate);

    function random(min, max) {
        return (Math.random() * (max - min)) + min;
    }

    $(splitTimelineDate.chars).each(function (i) {
        TweenMax.from($(this), 2.5, {
            opacity: 0,
            x: random(-500, 500),
            y: random(-500, 500),
            z: random(-500, 500),
            scale: .1,
            delay: i * .05,
            yoyo: true,
        });
    });

    // Status timeline
    gsap.from(".time-tick-complete, .time-tick-uncomplete, .time-target", {
        duration: 2,
        scale: 0.7,
        opacity: 0,
        delay: 2.5,
        stagger: 0.5,
        ease: "bounce.out",
        force3D: true
    });

    // Panel
    gsap.from(".timeline-panel", {
        duration: 2,
        scale: 0.7,
        opacity: 0,
        delay: 2.6,
        stagger: 0.4,
        ease: "elastic",
        force3D: true
    });


    // Text in panel
    var $timelineHeading = $(".timeline-heading"),
        mySplitText = new SplitText($timelineHeading, {
            type: "words"
        }),
        splitTextTimeline = gsap.timeline();
    gsap.set($timelineHeading, {
        perspective: 400
    });


    mySplitText.split({
        type: "lines"
    })
    splitTextTimeline.from(mySplitText.lines, {
        duration: 3,
        opacity: 0,
        rotationX: -120,
        force3D: true,
        transformOrigin: "50% 0% -150",
        stagger: 0.4
    });
    splitTextTimeline.play();

});


$(document).ready(function () {
    // Filter Search
    $("#selector").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#table-suggestion tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // progress
    $(".progress").each(function () {
        var value = $(this).attr('data-value');
        var left = $(this).find('.progress-left .progress-bar');
        var right = $(this).find('.progress-right .progress-bar');

        if (value > 0) {
            if (value <= 50) {
                right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
            } else {
                right.css('transform', 'rotate(180deg)')
                left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
            }
        }
    })

    //Scroll to back
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    function percentageToDegrees(percentage) {
        return percentage / 100 * 360
    }

});

//Change language
function toggleLang(elemt) {
    if (elemt.childNodes[0].innerHTML == "VI") {
        elemt.childNodes[0].innerHTML = "EN";
    } else {
        elemt.childNodes[0].innerHTML = "VI";
    }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        functionFixed.classList.add("sticky-func");
        logoTextFixed.classList.add("sticky-logo-text");
    } else {
        header.classList.remove("sticky");
        functionFixed.classList.remove("sticky-func");
        logoTextFixed.classList.remove("sticky-logo-text");
    }
}