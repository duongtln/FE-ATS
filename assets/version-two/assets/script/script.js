(function ($) {
    'use strict';
    TweenMax.defaultEase = Linear.easeOut;
    // initialize fullPage
    $('#fullpage').fullpage({
        navigation: true,
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
        lazyLoading: true,
        licenseKey: 'YOUR_KEY_HERE',
        scrollBar: true,
        paddingTop: '60px',
        onLeave: (origin, destination, direction) => {
            //console.log(destination);
            const tl = new TimelineMax({
                delay: 0.5
            });
            // Case block Tool
            if (destination.index === 1) {
                const toolsBg = document.querySelectorAll("#particles-js");
                const toolsTit = document.querySelectorAll("#title-tools");
                const blockTools = document.querySelectorAll(".slick-track");
                tl.fromTo(toolsBg, 1, {
                    opacity: 0.5,
                    y: "400"
                }, {
                    y: "0",
                    opacity: 1
                }).fromTo(toolsTit, 0.2, {
                    y: "50",
                    opacity: 0
                }, {
                    y: "0",
                    opacity: 1
                }).fromTo(
                    blockTools,
                    0.5, {
                        opacity: 0,
                        x: "50"
                    }, {
                        x: "0",
                        opacity: 1
                    }
                )
            }
            // Case block School of Sale and School of Recovery
            else if (destination.index === 2) {
                const school = document.querySelectorAll(".block-school");

                tl.fromTo(
                    school,
                    1, {
                        opacity: 0,
                        y: "50"
                    }, {
                        y: "0",
                        opacity: 1
                    }
                )
            }
            // Case block Fe Academy
            else if (destination.index === 3) {
                const feAcademyBg = document.querySelectorAll("#fe-academy-bg");
                const feAcademyTit = document.querySelectorAll("#title-fe-academy");
                const columOne = document.querySelectorAll(".colum-1");
                const columTwo = document.querySelectorAll(".colum-2");
                const columThree = document.querySelectorAll(".colum-3");

                tl.fromTo(feAcademyBg, 1, {
                    opacity: 0,
                    y: "400"
                }, {
                    y: "0",
                    opacity: 1
                }).fromTo(feAcademyTit, 0.5, {
                    y: "50",
                    opacity: 0
                }, {
                    y: "0",
                    opacity: 1
                }).fromTo(
                    columOne,
                    0.5, {
                        opacity: 0,
                        y: "50"
                    }, {
                        y: "0",
                        opacity: 1
                    }
                ).fromTo(
                    columTwo,
                    0.5, {
                        opacity: 0,
                        y: "50"
                    }, {
                        y: "0",
                        opacity: 1
                    }
                ).fromTo(
                    columThree,
                    0.5, {
                        opacity: 0,
                        y: "50"
                    }, {
                        y: "0",
                        opacity: 1
                    }
                )
            }
            //Case Mandatory
            else if (destination.index === 4) {
                const mandatoryBg = document.querySelectorAll("#mandatory-bg");
                const mandatoryTit = document.querySelectorAll("#title-mandatory");
                const chartMine = document.querySelectorAll(".chart-mine");
                const chartEmpl = document.querySelectorAll(".chart-empl");

                tl.fromTo(mandatoryBg, 1, {
                    opacity: 0,
                    y: "400"
                }, {
                    y: "0",
                    opacity: 1
                }).fromTo(mandatoryTit, 0.5, {
                    y: "50",
                    opacity: 0
                }, {
                    y: "0",
                    opacity: 1
                }).fromTo(
                    chartMine,
                    0.5, {
                        opacity: 0,
                        x: "50"
                    }, {
                        x: "0",
                        opacity: 1
                    }
                ).fromTo(
                    chartEmpl,
                    0.5, {
                        opacity: 0,
                        x: "-50"
                    }, {
                        x: "0",
                        opacity: 1
                    }
                )

            }
            //Case Curriculumn
            else if (destination.index === 5) {
                const curriculumBg = document.querySelectorAll("#curriculum-bg");
                const curriculumTit = document.querySelectorAll("#title-curriculum");

                tl.fromTo(curriculumBg, 1, {
                    opacity: 0,
                    y: "400"
                }, {
                    y: "0",
                    opacity: 1
                }).fromTo(curriculumTit, 0.5, {
                    y: "50",
                    opacity: 0
                }, {
                    y: "0",
                    opacity: 1
                })
            }
        }
    });


})(jQuery);