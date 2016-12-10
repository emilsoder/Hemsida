$("#footercontent").load("footerComponent.html");

var windowsize = $(window).width();

$(document).ready(function () {
    $("#footercontent").load("footerComponent.html");

    windowsize = $(window).width();

    if (windowsize <= 376) {

        $("#listgroup1").css({
            fontSize: 14
        });
        $(".mailphonebtn").css({
            fontSize: 14
        });
        $("#descwell").css({
            fontSize: 12,
            padding: 3
        });
        $("h3").css({
            fontSize: 20
        })
        $("h4").css({
            fontSize: 16
        });
        $("p").css({
            fontSize: 11
        })

        $("#cvintroheader").css({
            fontSize: 14
        })
    }

    if ((windowsize > 377) && (windowsize < 474)) {
        $("#descwell").css({
            fontSize: 14,
        });
        $("#listgroup1").css({
            fontSize: 16
        });
        $(".mailphonebtn").css({
            fontSize: 16
        });
        $("h3").css({
            fontSize: 20
        })
        $("h4").css({
            fontSize: 16
        })
        $("p").css({
            fontSize: 11
        })
        $("#cvheaders").css({
            fontSize: 27
        })
    
        $("#cvintroheader").css({
            fontSize: 16
        })
    }
    else if (windowsize > 474) {
        $("#descwell").css({
            fontSize: 16,
        });
        $("#listgroup1").css({
            fontSize: 16
        });
        $(".mailphonebtn").css({
            fontSize: 16
        })
        $("#descwell").css({
            fontSize: 16,
            padding: 20
        });
        $("h3").css({
            fontSize: 24
        })
        $("h4").css({
            fontSize: 18
        })
        $("p").css({
            fontSize: 15
        })
        $("#cvheaders").css({
            fontSize: 27
        });
    
        $("#cvintroheader").css({
            fontSize: 18
        })
    }

    if (windowsize < 768) {
        $("#navbarheadertext").text("Meny");
        $("#navbarheadertext").attr("data-toggle", "collapse");
        $("#navbarheadertext").attr("data-target", "#myNavbar");
        $("#navbarheadertext").attr("href", "#");
        $("#colimage").insertBefore("#colinfo");

        $("#navbarheader").attr("data-toggle", "collapse");
        $("#navbarheader").attr("data-target", "#myNavbar");
    }
    else {
        $("#navbarheadertext").text("Emil Hedström Södergren");
        $("#navbarheadertext").removeAttr("data-toggle");
        $("#navbarheadertext").removeAttr("data-target");
        $("#navbarheadertext").attr("href", "home.html");

        $("#navbarheader").removeAttr("data-toggle");
        $("#navbarheader").removeAttr("data-target");
    }

    if (windowsize < 975) {
        $("#col2").insertBefore("#col1");
    }
    else {
        $("#col2").insertAfter("#col1");
    }
});

$(window).resize(function () {
    windowsize = $(window).width();

    if (windowsize <= 376) {

        $("#listgroup1").css({
            fontSize: 14
        });
        $(".mailphonebtn").css({
            fontSize: 14
        });
        $("#descwell").css({
            fontSize: 12,
            padding: 3
        });
        $("h3").css({
            fontSize: 20
        });
        $("h4").css({
            fontSize: 16
        });
        $("p").css({
            fontSize: 11
        });
    
        $("#cvintroheader").css({
            fontSize: 14
        })
    }

    if ((windowsize > 377) && (windowsize < 474)) {
        $("#descwell").css({
            fontSize: 14,
        });
        $("#listgroup1").css({
            fontSize: 16
        });
        $(".mailphonebtn").css({
            fontSize: 16
        });
        $("h3").css({
            fontSize: 20
        })
        $("h4").css({
            fontSize: 16
        })
        $("p").css({
            fontSize: 11
        })
        $("#cvheaders").css({
            fontSize: 27
        })
    
        $("#cvintroheader").css({
            fontSize: 16
        })
    }
    else if (windowsize > 474) {
        $("#descwell").css({
            fontSize: 16,
        });
        $("#listgroup1").css({
            fontSize: 16
        });
        $(".mailphonebtn").css({
            fontSize: 16
        })
        $("#descwell").css({
            fontSize: 16,
            padding: 20
        });
        $("h3").css({
            fontSize: 24
        })
        $("h4").css({
            fontSize: 18
        })
        $("p").css({
            fontSize: 15
        })
        $("#cvheaders").css({
            fontSize: 27
        })
    
        $("#cvintroheader").css({
            fontSize: 18
        })
    }
    if (windowsize < 768) {
        $("#navbarheadertext").text("Meny");
        $("#navbarheadertext").attr("data-toggle", "collapse");
        $("#navbarheadertext").attr("data-target", "#myNavbar");
        $("#navbarheadertext").attr("href", "#");
        $("#colimage").insertBefore("#colinfo");

        $("#navbarheader").attr("data-toggle", "collapse");
        $("#navbarheader").attr("data-target", "#myNavbar");
    }
    else {
        $("#navbarheadertext").text("Emil Hedström Södergren");
        $("#navbarheadertext").removeAttr("data-toggle");
        $("#navbarheadertext").removeAttr("data-target");
        $("#navbarheadertext").attr("href", "home.html");

        $("#navbarheader").removeAttr("data-toggle");
        $("#navbarheader").removeAttr("data-target");
    }

    if (windowsize < 975) {
        $("#col2").insertBefore("#col1");
    }
    else {
        $("#col2").insertAfter("#col1");
    }
});

