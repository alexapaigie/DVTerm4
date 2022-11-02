// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')
// if (toastTrigger) {
//   toastTrigger.addEventListener('click', () => {
//     const toast = new bootstrap.Toast(toastLiveExample)

//     toast.show()
//   })
// }

// var sign = false;
// function signedin() {
//     if (sign = true) {
//         signname = 
//     }
// }

function actionfilter() {
    
}


function populate() {
    $(document).ready(function () {
        var movies = "";
        var actors = "";
        var Director = "";
        var rating = 0;
        var vid = "";
        var getidnr = localStorage.getItem("nextid");
        var idnr = JSON.parse(getidnr);
        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/movie/" + idnr + "?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
            success: function (data) {
                movies = data;
            }
        }).done(function () {

            $("#individual_poster").attr("src", "https://image.tmdb.org/t/p/w500/" + movies.poster_path);
            $("#individual_movietitle").append(movies.title + " (" + movies.release_date + ")");
            $("#genres").append(movies.genres[0].name + ", " + movies.genres[1].name);
            $("#individual_synopsis").append(movies.overview);
            rating = Math.round(movies.vote_average);
            $("#individual_rating").append(rating + "/10");
        });

        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/movie/" + idnr + "/credits?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
            success: function (data) {
                actors = data;
            }
        }).done(function () {

            $("#individual_actcontent").append(actors.cast[0].name + " - ");
            $("#individual_actcontent").append(actors.cast[1].name + " - ");
            $("#individual_actcontent").append(actors.cast[2].name);

            for (let i = 0; i < actors.crew.length; i++) {
                if (actors.crew[i].job == "Director") {
                    Director = actors.crew[i].name;
                }
            }
            $("#individual_dircontent").append(Director);
        });

        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/movie/" + idnr + "/videos?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
            success: function (data) {
                vid = data;
            }
        }).done(function () {

            $("#trailer").attr("src", "https://www.youtube.com/embed/" + vid.results[0].key);
        });
    })
}

function move1() {
    var get = localStorage.getItem("top1id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function move2() {
    var get = localStorage.getItem("top2id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function move3() {
    var get = localStorage.getItem("top3id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function move4() {
    var get = localStorage.getItem("recent1id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function move5() {
    var get = localStorage.getItem("recent2id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function move6() {
    var get = localStorage.getItem("recent3id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

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





    $("#toprated1syn").hide();
    $("#toprated1").mouseenter(function () {
        $("#toprated1syn").slideDown();
    });
    $("#toprated1").mouseleave(function () {
        $("#toprated1syn").slideUp();
    })
    $("#toprated2syn").hide();
    $("#toprated2").mouseenter(function () {
        $("#toprated2syn").slideDown();
    });
    $("#toprated2").mouseleave(function () {
        $("#toprated2syn").slideUp();
    })
    $("#toprated3syn").hide();
    $("#toprated3").mouseenter(function () {
        $("#toprated3syn").slideDown();
    });
    $("#toprated3").mouseleave(function () {
        $("#toprated3syn").slideUp();
    })



    $("#recent1syn").hide();
    $("#recent1").mouseenter(function () {
        $("#recent1syn").slideDown();
    });
    $("#recent1").mouseleave(function () {
        $("#recent1syn").slideUp();
    })
    $("#recent2syn").hide();
    $("#recent2").mouseenter(function () {
        $("#recent2syn").slideDown();
    });
    $("#recent2").mouseleave(function () {
        $("#recent2syn").slideUp();
    })
    $("#recent3syn").hide();
    $("#recent3").mouseenter(function () {
        $("#recent3syn").slideDown();
    });
    $("#recent3").mouseleave(function () {
        $("#recent3syn").slideUp();
    })



    $("#soon1syn").hide();
    $("#soon1").mouseenter(function () {
        $("#soon1syn").slideDown();
    });
    $("#soon1").mouseleave(function () {
        $("#soon1syn").slideUp();
    })
    $("#soon2syn").hide();
    $("#soon2").mouseenter(function () {
        $("#soon2syn").slideDown();
    });
    $("#soon2").mouseleave(function () {
        $("#soon2syn").slideUp();
    })
    $("#soon3syn").hide();
    $("#soon3").mouseenter(function () {
        $("#soon3syn").slideDown();
    });
    $("#soon3").mouseleave(function () {
        $("#soon3syn").slideUp();
    })





    var tops1 = null;
    var tops2 = null;
    var tops3 = null;

    $.getJSON("https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=1", function (data) {
        $("#toprated1title").append(data.results[0].title)
        $("#toprated1syn").append(data.results[0].overview)
        $("#top1poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[0].poster_path)
        tops1 = JSON.stringify(data.results[0].id)
        localStorage.setItem("top1id", tops1)

        $("#toprated2title").append(data.results[1].title)
        $("#toprated2syn").append(data.results[1].overview)
        $("#top2poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[1].poster_path)
        tops2 = JSON.stringify(data.results[1].id)
        localStorage.setItem("top2id", tops2)

        $("#toprated3title").append(data.results[5].title)
        $("#toprated3syn").append(data.results[5].overview)
        $("#top3poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[5].poster_path)
        tops3 = JSON.stringify(data.results[5].id)
        localStorage.setItem("top3id", tops3)
    })

    var recents1 = null;
    var recents2 = null;
    var recents3 = null;

    $.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=1", function (data) {
        $("#recent1title").append(data.results[0].title)
        $("#recent1syn").append(data.results[0].overview)
        $("#recent1poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[0].poster_path)
        recents1 = JSON.stringify(data.results[0].id)
        localStorage.setItem("recent1id", recents1)

        $("#recent2title").append(data.results[1].title)
        $("#recent2syn").append(data.results[1].overview)
        $("#recent2poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[1].poster_path)
        recents2 = JSON.stringify(data.results[1].id)
        localStorage.setItem("recent2id", recents2)

        $("#recent3title").append(data.results[2].title)
        $("#recent3syn").append(data.results[2].overview)
        $("#recent3poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[2].poster_path)
        recents3 = JSON.stringify(data.results[2].id)
        localStorage.setItem("recent3id", recents3)
    })

    $.getJSON("https://api.themoviedb.org/3/movie/upcoming?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=1", function (data) {
        $("#soon1title").append(data.results[0].title)
        $("#soon1syn").append(data.results[0].overview)
        $("#soon1poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[0].poster_path)
        soon1 = JSON.stringify(data.results[0].id)
        localStorage.setItem("soon1id", soon1)

        $("#soon2title").append(data.results[1].title)
        $("#soon2syn").append(data.results[1].overview)
        $("#soon2poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[1].poster_path)
        soon2 = JSON.stringify(data.results[1].id)
        localStorage.setItem("soon2id", soon2)

        $("#soon3title").append(data.results[2].title)
        $("#soon3syn").append(data.results[2].overview)
        $("#soon3poster").attr("src", "https://image.tmdb.org/t/p/w500/" + data.results[2].poster_path)
        soon3 = JSON.stringify(data.results[2].id)
        localStorage.setItem("recent3id", soon3)
    })


    $.getJSON("https://api.themoviedb.org/3/movie/634649?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US", function (data) {
        $("#car1").append(data.title)
        $("#tagline1").append(data.tagline)
        $("#car1img").attr("src", "https://image.tmdb.org/t/p/original/" + data.backdrop_path)
    })
    $.getJSON("https://api.themoviedb.org/3/movie/634649/videos?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US", function (data) {
        $("#carvid").attr("src", "https://www.youtube.com/embed/" + data.results[4].key)
    })


    $.getJSON("https://api.themoviedb.org/3/movie/361743?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US", function (data) {
        $("#car2").append(data.title)
        $("#tagline2").append(data.tagline)
        $("#car2img").attr("src", "https://image.tmdb.org/t/p/original/" + data.backdrop_path)
    })
    $.getJSON("https://api.themoviedb.org/3/movie/361743/videos?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US", function (data) {
        $("#carvid2").attr("src", "https://www.youtube.com/embed/" + data.results[0].key)
    })


    $.getJSON("https://api.themoviedb.org/3/movie/663712?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US", function (data) {
        $("#car3").append(data.title)
        $("#tagline3").append(data.tagline)
        $("#car3img").attr("src", "https://image.tmdb.org/t/p/original/" + data.backdrop_path)
    })
    $.getJSON("https://api.themoviedb.org/3/movie/663712/videos?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US", function (data) {
        $("#carvid3").attr("src", "https://www.youtube.com/embed/" + data.results[0].key)
    })

})
