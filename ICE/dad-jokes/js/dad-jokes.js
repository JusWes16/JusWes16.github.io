async function getDadJoke() {
    var search = document.getElementById('search_bar').value;
    var url = '';
    if(search == ""){
        url = 'https://icanhazdadjoke.com/';
    }
    else {
        url = "https://icanhazdadjoke.com/search?term=" + search.toLowerCase();
    }

    let h = new Headers({
        "Accept": "application/json", 
        "User-Agent": "WDD-230 Test User Agent https://juswes16.github.io"
    });
    const response = await fetch(url,{headers:h});
    if(response.status == 200){
        return response.json();
    }
    else {
        throw new Error('No dad jokes found: ' +response.status)
    }
}
function newJoke(){
    var search = document.getElementById('search_bar').value;
    
    if(search == ''){
        const dad_id = document.getElementById('dad-joke');
        dad_id.innerHTML = "";
        dad_id.classList.remove('small');
        const joke = getDadJoke()
        .then(function(j){
            dad_id.innerHTML = j['joke'];
            if(j['joke'].length > 85){
                dad_id.classList.add('small');
            }
        })
        .catch(function(e){
            dad_id.innerHTML = e;
        });
    } 
    else {
        const dad_id = document.getElementById('dad-joke');
        var text = "";
        var num_jokes = document.getElementById('num_jokes').value;
        dad_id.innerHTML = "";
        dad_id.classList.remove('small', 'extra_small');
        const joke = getDadJoke()
        .then(function(j){
            for(i = 0; i < num_jokes; i++){
                ext += j['results'][i]['joke'] + '<br>' + '<br>';
                dad_id.innerHTML = text;
                if(text.length >200){
                    dad_id.classList.add('extra_small');
                }
                else if(text.length > 85){
                    dad_id.classList.add('small');
                }
            }
        })
        .catch(function(e){
        dad_id.innerHTML = e;
        });
    }
}
window.addEventListener('load', (event) => {
    var search = document.getElementById("search_bar");
    var num = document.getElementById("num_jokes");
    search.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            newJoke(e);
        }
    });
    num.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            newJoke(e);
        }
    });
});
