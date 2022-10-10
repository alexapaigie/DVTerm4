$(document).ready(function () {

    // navbar functionality
    // nav hover effects


    // watchlist
    $("#watchlist").mouseenter(function () {
        $("#watchlist").css(
            {
                "color": "#309BDE",
                "cursor": "pointer",
            }
        );
    });

    $("#watchlist").mouseleave(function () {
        $("#watchlist").css(
            {
                "color": "white"
            }
        );
    });


    // library
    $("#library").mouseenter(function () {
        $("#library").css(
            {
                "color": "#309BDE",
                "cursor": "pointer",
            }
        );
    });

    $("#library").mouseleave(function () {
        $("#library").css(
            {
                "color": "white"
            }
        );
    });


    // sign up
    $("#signup").mouseenter(function () {
        $("#signup").css(
            {
                "color": "#309BDE",
                "cursor": "pointer",
            }
        );
    });

    $("#signup").mouseleave(function () {
        $("#signup").css(
            {
                "color": "white"
            }
        );
    });

    





    // social media hover effects 

    // instagram
    $("#instagram").mouseenter(function () {
        $("#instagram").css(
            {
                "filter": "invert(54%) sepia(69%) saturate(1558%) hue-rotate(176deg) brightness(92%) contrast(89%)",
                "cursor": "pointer",
            }
        );
    });

    $("#instagram").mouseleave(function () {
        $("#instagram").css(
            {
                "filter": "invert(100%)"
            }
        );
    });

    
    // twitter
    $("#twitter").mouseenter(function () {
        $("#twitter").css(
            {
                "filter": "invert(54%) sepia(69%) saturate(1558%) hue-rotate(176deg) brightness(92%) contrast(89%)",
                "cursor": "pointer",
            }
        );
    });

    $("#twitter").mouseleave(function () {
        $("#twitter").css(
            {
                "filter": "invert(100%)"
            }
        );
    });


    // facebook
    $("#facebook").mouseenter(function () {
        $("#facebook").css(
            {
                "filter": "invert(54%) sepia(69%) saturate(1558%) hue-rotate(176deg) brightness(92%) contrast(89%)",
                "cursor": "pointer",
            }
        );
    });

    $("#facebook").mouseleave(function () {
        $("#facebook").css(
            {
                "filter": "invert(100%)"
            }
        );
    });

});