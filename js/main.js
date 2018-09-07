var user;
function getData(){			
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            user = JSON.parse(xhttp.responseText);
            for(var i=0; i< user.length; i++){
                document.getElementById('loadData-1').innerHTML += `
                    <div class="card wow animated swing card-dd" data-wow-delay="0.5s" style="width: 16rem; height:20rem; margin:0 15px 25px 0;  float:left;">
                        <img class="card-img-top" src="img/film-pic.jpg" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title"><b>${user[i].movie_title}</b></h5>
                            <p class="card-text"></p>
                            </h4><b>Director :</b>${ user[i].director_name}</h4>
                            <a href="#" class="btn button-wid btn-info" onclick="details(${i})">Details</a>
                        </div>
                    </div>     
                `;
            }
            var elem = document.getElementsByClassName('loading');
            while(elem.length>0) {
                elem[0].classList.remove('loading');
            }
            searchArr();
        }
    }
    xhttp.open('GET', 'http://starlord.hackerearth.com/movieslisting', true);
    xhttp.send();
}
getData();

var arr=[];
function searchArr(){    
    for(var i=0;i<user.length; i++){
        arr.push(user[i].movie_title);
    }
    localStorage.setItem('films',JSON.stringify(user));
    localStorage.setItem('arr',JSON.stringify(arr));
}
$( function() {
    $( "#search" ).autocomplete({
      source: arr
    });
});

$('#_getValue').click(function() {
    var value = $('#search').val();
    var flag=0;
    for(var i=0 ;i< user.length; i++){
        if(value==user[i].movie_title){
            localStorage.setItem('detail',i);
            window.location.href = 'searchPage.html';
            flag=1;
        }
    }
    if(flag == 0){
        window.location.href = 'errorPage.html';
    }
});

$('.card-dd').hover(function(){
    $(this).addClass('bounceIn');
});

function details(position){
    localStorage.setItem("detail",JSON.stringify(position));
    window.location.href = 'searchPage.html';
}



