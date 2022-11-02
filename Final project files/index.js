
// LOG IN/SIGN UP
var users = [
    {
        username: "Catehappyfeet",
        password: "Roxy",
        account: "active"
    },
    {
        username: "RynoCodingMaster",
        password: "javaGenius",
        account: "active"
    },
    {
        username: "alexaLOL",
        password: "passwordswithanS",
        account: "suspended"
    },
    {
        username: "Tsungui",
        password: "Legand",
        account: "active"
    },
    {
        username: "Manchester#1",
        password: "Number1Team",
        account: "active"
    }
]

function clickme() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = true;
    var usersuspended = false

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            if (users[i].password == password) {
                if (users[i].account == "suspended") {
                    usersuspended = true;
                }
                user = false;
            }
        }

    }

}


// HOME PAGE FUNCTIONS
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

function move7() {
    var get = localStorage.getItem("soon1id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function move8() {
    var get = localStorage.getItem("soon2id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function move9() {
    var get = localStorage.getItem("soon3id")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}


//LIBRARY FUNCTIONS
function ClearCart() {
    document.getElementsByClassName(".wlmovies").style.display = "none"
}

var nextid = null;

function movie1() {
    var get = localStorage.getItem("lib1")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie2() {
    var get = localStorage.getItem("lib2")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie3() {
    var get = localStorage.getItem("lib3")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie3() {
    var get = localStorage.getItem("lib3")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie4() {
    var get = localStorage.getItem("lib4")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie5() {
    var get = localStorage.getItem("lib5")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie6() {
    var get = localStorage.getItem("lib6")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie7() {
    var get = localStorage.getItem("lib7")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie8() {
    var get = localStorage.getItem("lib8")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie9() {
    var get = localStorage.getItem("lib9")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie10() {
    var get = localStorage.getItem("lib10")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie11() {
    var get = localStorage.getItem("lib11")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie12() {
    var get = localStorage.getItem("lib12")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie13() {
    var get = localStorage.getItem("lib13")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie14() {
    var get = localStorage.getItem("lib14")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie15() {
    var get = localStorage.getItem("lib15")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie16() {
    var get = localStorage.getItem("lib16")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie17() {
    var get = localStorage.getItem("lib17")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie18() {
    var get = localStorage.getItem("lib18")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie19() {
    var get = localStorage.getItem("lib19")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie20() {
    var get = localStorage.getItem("lib20")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie21() {
    var get = localStorage.getItem("lib21")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie22() {
    var get = localStorage.getItem("lib22")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie23() {
    var get = localStorage.getItem("lib23")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie24() {
    var get = localStorage.getItem("lib24")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}

function movie25() {
    var get = localStorage.getItem("lib25")
    nextid = get;
    localStorage.setItem("nextid", nextid)
}



//INDIVIDUAL MOVIE PAGE FUNCTION
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

function actionfilter() {
    $(document).ready(function () {
        var counter = 1;
        var counter2 = 0;
        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=1",
            success: function (data) {
                info = data;
            }
        }).done(function () {

            for (let i = 0; i < 20; i++) {
                $("#movie" + i + "title").empty();
                $("#movie" + i + "syn").empty();
                $("#movie" + i + "poster").empty();

                if (info.results[i].genre_ids[1] == 28) {
                    $("#movie" + counter + "title").prepend(info.results[i].title);
                    $("#movie" + counter + "syn").prepend(info.results[i].overview);
                    $("#movie" + counter + "poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.results[i].poster_path + "' class='card-img'>");
                    moviesid = JSON.stringify(info.results[i].id);
                    localStorage.setItem("lib" + counter, moviesid);
                    counter++
                }
            }
        })

        console.log("done")

        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=2",
            success: function (data) {
                info2 = data;
            }
        }).done(function () {

            for (let x = 20; x < 26; x++) {
                counter2++;
                $("#movie" + x + "title").empty();
                $("#movie" + x + "syn").empty();
                $("#movie" + x + "poster").empty();

                if (info2.results[x].genre_ids[0] == 28) {
                    $("#movie" + counter + "title").append(info2.results[counter2].title);
                    $("#movie" + counter + "syn").append(info2.results[counter2].overview);
                    $("#movie" + counter + "poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info2.results[counter2].poster_path + "' class='card-img'>");
                    moviesid = JSON.stringify(info2.results[x].id);
                    localStorage.setItem("lib" + counter2, moviesid);
                    counter++
                }
            }
        })


    })
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


    //  CARDS 

    // HOVER


    $("#movie1syn").hide();
    $("#movie1").mouseenter(function () {
        $("#movie1syn").slideDown();
    });
    $("#movie1").mouseleave(function () {
        $("#movie1syn").slideUp();
    });


    $("#movie2syn").hide();
    $("#movie2").mouseenter(function () {
        $("#movie2syn").slideDown();
    });
    $("#movie2").mouseleave(function () {
        $("#movie2syn").slideUp();
    });

    $("#movie3syn").hide();
    $("#movie3").mouseenter(function () {
        $("#movie3syn").slideDown();
    });
    $("#movie3").mouseleave(function () {
        $("#movie3syn").slideUp();
    });

    $("#movie4syn").hide();
    $("#movie4").mouseenter(function () {
        $("#movie4syn").slideDown();
    });
    $("#movie4").mouseleave(function () {
        $("#movie4syn").slideUp();
    });

    $("#movie5syn").hide();
    $("#movie5").mouseenter(function () {
        $("#movie5syn").slideDown();
    });
    $("#movie5").mouseleave(function () {
        $("#movie5syn").slideUp();
    });

    $("#movie6syn").hide();
    $("#movie6").mouseenter(function () {
        $("#movie6syn").slideDown();
    });
    $("#movie6").mouseleave(function () {
        $("#movie6syn").slideUp();
    });

    $("#movie7syn").hide();
    $("#movie7").mouseenter(function () {
        $("#movie7syn").slideDown();
    });
    $("#movie7").mouseleave(function () {
        $("#movie7syn").slideUp();
    });

    $("#movie8syn").hide();
    $("#movie8").mouseenter(function () {
        $("#movie8syn").slideDown();
    });
    $("#movie8").mouseleave(function () {
        $("#movie8syn").slideUp();
    });

    $("#movie9syn").hide();
    $("#movie9").mouseenter(function () {
        $("#movie9syn").slideDown();
    });
    $("#movie9").mouseleave(function () {
        $("#movie9syn").slideUp();
    });

    $("#movie10syn").hide();
    $("#movie10").mouseenter(function () {
        $("#movie10syn").slideDown();
    });
    $("#movie10").mouseleave(function () {
        $("#movie10syn").slideUp();
    });

    $("#movie11syn").hide();
    $("#movie11").mouseenter(function () {
        $("#movie11syn").slideDown();
    });
    $("#movie11").mouseleave(function () {
        $("#movie11syn").slideUp();
    });

    $("#movie12syn").hide();
    $("#movie12").mouseenter(function () {
        $("#movie12syn").slideDown();
    });
    $("#movie12").mouseleave(function () {
        $("#movie12syn").slideUp();
    });

    $("#movie13syn").hide();
    $("#movie13").mouseenter(function () {
        $("#movie13syn").slideDown();
    });
    $("#movie13").mouseleave(function () {
        $("#movie13syn").slideUp();
    });

    $("#movie14syn").hide();
    $("#movie14").mouseenter(function () {
        $("#movie14syn").slideDown();
    });
    $("#movie14").mouseleave(function () {
        $("#movie14syn").slideUp();
    });

    $("#movie15syn").hide();
    $("#movie15").mouseenter(function () {
        $("#movie15syn").slideDown();
    });
    $("#movie15").mouseleave(function () {
        $("#movie15syn").slideUp();
    });

    $("#movie16syn").hide();
    $("#movie16").mouseenter(function () {
        $("#movie16syn").slideDown();
    });
    $("#movie16").mouseleave(function () {
        $("#movie16syn").slideUp();
    });

    $("#movie17syn").hide();
    $("#movie17").mouseenter(function () {
        $("#movie17syn").slideDown();
    });
    $("#movie17").mouseleave(function () {
        $("#movie17syn").slideUp();
    });

    $("#movie18syn").hide();
    $("#movie18").mouseenter(function () {
        $("#movie18syn").slideDown();
    });
    $("#movie18").mouseleave(function () {
        $("#movie18syn").slideUp();
    });

    $("#movie19syn").hide();
    $("#movie19").mouseenter(function () {
        $("#movie19syn").slideDown();
    });
    $("#movie19").mouseleave(function () {
        $("#movie19syn").slideUp();
    });

    $("#movie20syn").hide();
    $("#movie20").mouseenter(function () {
        $("#movie20syn").slideDown();
    });
    $("#movie20").mouseleave(function () {
        $("#movie20syn").slideUp();
    });

    $("#movie21syn").hide();
    $("#movie21").mouseenter(function () {
        $("#movie21syn").slideDown();
    });
    $("#movie21").mouseleave(function () {
        $("#movie21syn").slideUp();
    });

    $("#movie22syn").hide();
    $("#movie22").mouseenter(function () {
        $("#movie22syn").slideDown();
    });
    $("#movie22").mouseleave(function () {
        $("#movie22syn").slideUp();
    });

    $("#movie23syn").hide();
    $("#movie23").mouseenter(function () {
        $("#movie23syn").slideDown();
    });
    $("#movie23").mouseleave(function () {
        $("#movie23syn").slideUp();
    });

    $("#movie24syn").hide();
    $("#movie24").mouseenter(function () {
        $("#movie24syn").slideDown();
    });
    $("#movie24").mouseleave(function () {
        $("#movie24syn").slideUp();
    });

    $("#movie25syn").hide();
    $("#movie25").mouseenter(function () {
        $("#movie25syn").slideDown();
    });
    $("#movie25").mouseleave(function () {
        $("#movie25syn").slideUp();
    });


    $("#actionfilter").click(function () {
        var counter = 1;
        var counter2 = 0;
        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=1",
            success: function (data) {
                info = data;
            }
        }).done(function () {

            for (let i = 0; i < 20; i++) {
                $("#movie" + i + "title").empty();
                $("#movie" + i + "syn").empty();
                $("#movie" + i + "poster").empty();

                if (info.results[i].genre_ids[1] == 80) {
                    $("#movie" + counter + "title").prepend(info.results[i].title);
                    $("#movie" + counter + "syn").prepend(info.results[i].overview);
                    $("#movie" + counter + "poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.results[i].poster_path + "' class='card-img'>");
                    moviesid = JSON.stringify(info.results[i].id);
                    localStorage.setItem("lib" + counter, moviesid);
                    counter++
                }
            }


        })

        $.ajax({
            type: "GET",
            url: "https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=2",
            success: function (data) {
                info2 = data;
            }
        }).done(function () {

            for (let x = 20; x < 26; x++) {
                counter2++;
                $("#movie" + x + "title").empty();
                $("#movie" + x + "syn").empty();
                $("#movie" + x + "poster").empty();

                if (info2.results[x].genre_ids[0] == 28) {
                    $("#movie" + counter + "title").append(info2.results[counter2].title);
                    $("#movie" + counter + "syn").append(info2.results[counter2].overview);
                    $("#movie" + counter + "poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info2.results[counter2].poster_path + "' class='card-img'>");
                    moviesid = JSON.stringify(info2.results[x].id);
                    localStorage.setItem("lib" + counter2, moviesid);
                    counter++
                }
            }
        })

    });


    var info = null;
    var moviesid = null;
    var count = 0;

    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=1",
        success: function (data) {
            info = data;
        }
    }).done(function () {

        for (let i = 0; i < 20; i++) {

            $("#movie" + i + "title").append(info.results[i].title);
            $("#movie" + i + "syn").append(info.results[i].overview);
            $("#movie" + i + "poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.results[i].poster_path + "' class='card-img'>");
            moviesid = JSON.stringify(info.results[i].id);
            localStorage.setItem("lib" + i, moviesid);

        }

    })

    $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=2",
        success: function (data) {
            info2 = data;
        }
    }).done(function () {

        for (let x = 20; x < 26; x++) {
            count++;
            $("#movie" + x + "title").append(info2.results[count].title);
            $("#movie" + x + "syn").append(info2.results[count].overview);
            $("#movie" + x + "poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info2.results[count].poster_path + "' class='card-img'>");
            moviesid = JSON.stringify(info2.results[count].id);
            localStorage.setItem("lib" + x, moviesid);

        }

    })



    //HOME PAGE FUNCTIONS
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

    var soon1 = null;
    var soon2 = null;
    var soon3 = null;

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
        localStorage.setItem("soon3id", soon3)
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

});