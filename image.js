
const key = '18529490-0f84e1f15c2e4758df73f845b' ;
document.onload = loadDocbp();

var postdata = null;

function loadDocbp() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.data = JSON.parse(this.responseText) ;
            console.log(window.data);
            console.log(data.hits[0].largeImageURL);
            setup(data);
        }
    };
    xhttp.open("GET",'https://pixabay.com/api/?pretty=true&key='+key+'&id='+id , true);
    xhttp.send();

}                    

