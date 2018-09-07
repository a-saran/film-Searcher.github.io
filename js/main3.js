var a=localStorage.getItem('films');
a=JSON.parse(a);
var pos= JSON.stringify(localStorage.getItem('detail'));
//console.log(a[2].movie_title)
console.log(pos)
$(function(){
    var Rating;
    var language;
    var country;
    var budget;
    if(a[4].budget == ""){
        budget="--";
    }else{
        budget = a[pos].budget ;
    }

    if(a[4].language == ""){
        language="--";
    }else{
        language = a[4].language ;
    }

    if(a[4].country == ""){
        country="--";
    }else{
        country = a[4].country ;
    }

    if(a[4].content_rating == ""){
        Rating="--";
    }else{
        Rating = a[4].content_rating ;
    }
    $('#det').html(`
    <div class="card wow jackInTheBox" data-wow-duration="4s" data-wow-delay="5s">
            <div class="card-header">
                Details
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                    <img src="img/film.jpg" alt="img/film_image" width="100%">
                    </div>
                    <div class="col-md-6">
                        <h1><b>${a[pos].movie_title} </b></h1>
                        <hr>
                        <h5> <b><i>Film genres : </i></b>${a[4].genres}</h5>
                        <h6>${a[1].plot_keywords}</h6>
                        <h4><i>Director</i> : ${a[4].director_name}</h4>
                        <p><b><i>Actor :</i></b></p>
                        <p><i>${a[4].actor_1_name}</i></p>
                        <p><i>${a[4].actor_2_name}</i></p>
                        <form >
                            <div class="form-group">
                            <a href="${a[4].movie_imdb_link}" class="btn button-width" target="_blank">Watch film</a>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-2">
                        <h1><br><br></h1>
                        <p>
                            <b><i>Rating</i></b>
                            <br>
                             ${Rating}
                        </p>
                        <p>
                            <b><i>country</i></b>
                            <br>
                             ${country}
                        </p>
                        <p>
                            <b><i>Language</i></b>
                            <br>
                             ${language}
                        </p>
                        <p>
                            <b><i>Budget</i></b>
                            <br>
                             ${budget}
                        </p>
                    </div>
                </div>  
            </div>
            
    </div>
    <br>
    `);
})