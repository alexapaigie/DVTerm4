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


    var info = null;

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/271110?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie1title").append(info.title)
    //     $("#movie1syn").append(info.overview);
    //     $("#movie1poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");
    
    //     localStorage.setItem("mo1", info.id)   

    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/131631?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie2title").append(info.title)
    //     $("#movie2syn").append(info.overview)
    //     $("#movie2poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo2", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/209112?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie3title").append(info.title)
    //     $("#movie3syn").append(info.overview)
    //     $("#movie3poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        


    //     localStorage.setItem("mo3", info.id)

    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/297761?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie4title").append(info.title)
    //     $("#movie4syn").append(info.overview)
    //     $("#movie4poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo4", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/291805?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie5title").append(info.title)
    //     $("#movie5syn").append(info.overview)
    //     $("#movie5poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo5", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/211672?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie6title").append(info.title)
    //     $("#movie6syn").append(info.overview)
    //     $("#movie6poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        


    //     localStorage.setItem("mo6", info.id)

    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/293660?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie7title").append(info.title)
    //     $("#movie7syn").append(info.overview)
    //     $("#movie7poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        
        
        
    //     localStorage.setItem("mo7", info.id)



    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/244786?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie8title").append(info.title)
    //     $("#movie8syn").append(info.overview)
    //     $("#movie8poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo8", info.id)



    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/241251?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie9title").append(info.title)
    //     $("#movie9syn").append(info.overview)
    //     $("#movie9poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo9", info.id)


    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/157336?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie10title").append(info.title)
    //     $("#movie10syn").append(info.overview)
    //     $("#movie10poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo10", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/77338?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie11title").append(info.title)
    //     $("#movie11syn").append(info.overview)
    //     $("#movie11poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo11", info.id)


    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/424?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie12title").append(info.title)
    //     $("#movie12syn").append(info.overview)
    //     $("#movie12poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo12", info.id)


    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/13?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie13title").append(info.title)
    //     $("#movie13syn").append(info.overview)
    //     $("#movie13poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo13", info.id)


    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/184341?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie14title").append(info.title)
    //     $("#movie14syn").append(info.overview)
    //     $("#movie14poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo14", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/345911?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie15title").append(info.title)
    //     $("#movie15syn").append(info.overview)
    //     $("#movie15poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo15", info.id)

    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/466282?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie16title").append(info.title)
    //     $("#movie16syn").append(info.overview)
    //     $("#movie16poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo16", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/333339?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie17title").append(info.title)
    //     $("#movie17syn").append(info.overview)
    //     $("#movie17poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo17", info.id)


    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/455980?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie18title").append(info.title)
    //     $("#movie18syn").append(info.overview)
    //     $("#movie18poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo18", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/10198?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie19title").append(info.title)
    //     $("#movie19syn").append(info.overview)
    //     $("#movie19poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo19", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/3933?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie20title").append(info.title)
    //     $("#movie20syn").append(info.overview)
    //     $("#movie20poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo20", info.id)


    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/779782?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie21title").append(info.title)
    //     $("#movie21syn").append(info.overview)
    //     $("#movie21poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo21", info.id)


    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/663712?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie22title").append(info.title)
    //     $("#movie22syn").append(info.overview)
    //     $("#movie22poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo22", info.id)


    // })


    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/445651?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie23title").append(info.title)
    //     $("#movie23syn").append(info.overview)
    //     $("#movie23poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo23", info.id)


    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/10191?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie24title").append(info.title)
    //     $("#movie24syn").append(info.overview)
    //     $("#movie24poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo24", info.id)



    // })

    // $.ajax({
    //     type:"GET",
    //     url: "https://api.themoviedb.org/3/movie/762975?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US",
    //     success: function(data){
    //         info = data;

    //     }
    // }).done(function(){

    //     $("#movie25title").append(info.title)
    //     $("#movie25syn").append(info.overview)
    //     $("#movie25poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.poster_path + "' class='card-img'>");        

    //     localStorage.setItem("mo25", info.id)


    // })


    var moviesid = null;
    var count = 0;

    $.ajax({
        type:"GET",
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=1",
        success: function(data){
            info = data;
        }
    }).done(function(){
    
        for (let i = 0; i < 20; i++) {
            
            $("#movie" + i + "title").append(info.results[i].title);
            $("#movie" + i + "syn").append(info.results[i].overview);
            $("#movie" + i + "poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info.results[i].poster_path + "' class='card-img'>");
            moviesid = JSON.stringify(info.results[i].id);
            localStorage.setItem("lib" + i, moviesid);

        }

    })

    $.ajax({
        type:"GET",
        url: "https://api.themoviedb.org/3/movie/top_rated?api_key=330d88838c8de52c3cf7278db6c50a18&language=en-US&page=2",
        success: function(data){
            info2 = data;
        }
    }).done(function(){
    
        for (let x = 20; x < 26; x++) {
            count++;
            $("#movie" + x + "title").append(info2.results[count].title);
            $("#movie" + x + "syn").append(info2.results[count].overview);
            $("#movie" + x + "poster").prepend("<img src='https://image.tmdb.org/t/p/w500/" + info2.results[count].poster_path + "' class='card-img'>");
            moviesid = JSON.stringify(info2.results[count].id);
            localStorage.setItem("lib" + x, moviesid);

        }

    })


    
    

});