// Intro JS

var intro = introJs();
intro.setOptions({
    steps: [{
            intro: "Welcome to ATS. Click Next button to instruction."
        },
        {
            element: document.querySelector('#intro-step-1'),
            intro: "This is your notification. All notification in there."
        },
        {
            element: document.querySelector('#intro-step-2'),
            intro: "You can search anymore in there.",
        },
        {
            element: document.querySelector('#intro-step-3'),
            intro: 'You can change Vietnam or English language.',
        },
        {
            element: document.querySelector('#intro-step-4'),
            intro: "Your Infomation and some setting.",
        },
        {
            element: document.querySelector('#intro-step-5'),
            intro: "This is menu.",
        },
        {
            element: document.querySelector('#intro-step-6'),
            intro: "This is tools.",
        },
        {
            element: document.querySelector('#intro-step-7'),
            intro: "This is your roadmap.",
        },
        {
            element: document.querySelector('#intro-step-8'),
            intro: "This is pla pla",
        },
        {
            element: document.querySelector('#intro-step-9'),
            intro: "This is FE Academy",
        },
        {
            element: document.querySelector('#intro-step-10'),
            intro: "This is mandatory training for individual",
        },
        {
            element: document.querySelector('#intro-step-11'),
            intro: "This is mandatory training for employee",
        },
        {
            element: document.querySelector('#yui_3_17_2_1_1596430403574_31'),
            intro: "This is curriculum.",
        },
        {
            intro: "Completed. Have fun!"
        },
    ]
});

//intro.start();

// Filter Search
$(document).ready(function () {
    $("#selector").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#table-suggestion tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

// progress
$(function () {

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

    function percentageToDegrees(percentage) {
        return percentage / 100 * 360
    }
});


// Fixed menu

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    myFunction()
};

// Get the header
var header = document.getElementById("menu-fixed");
var functionFixed = document.getElementById("function-fixed");
var logoTextFixed = document.getElementById("logo-text-fixed");

// Get the offset position of the navbar
var sticky = header.offsetTop;

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

// Button scroll back to top
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

//Change language
function toggleLang(elemt) {
    if (elemt.childNodes[0].innerHTML == "VI") {
        elemt.childNodes[0].innerHTML = "EN";
    } else {
        elemt.childNodes[0].innerHTML = "VI";
    }
}

//Timeline horizontal
gsap.from(".timeline-horizontal:before", {
    duration: 2,
    scale: 0.5,
    opacity: 0,
    delay: 0.2,
    stagger: 0,
    ease: "elastic",
    force3D: true
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