
const key = '18529490-0f84e1f15c2e4758df73f845b' ;
document.onload = loadDocbp();

var postdata = null;

function loadDocbp() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.data = JSON.parse(this.responseText) ;
            console.log(window.data);
            console.log(data.hits);
            setup(data);
        }
    };
    xhttp.open("GET",'https://pixabay.com/api/?orientation=horizontal&key='+key  , true);
    xhttp.send();

}                    

var text = "" ;
var i ;
function setup() {
    for (i = 0; i < data.hits.length; i++) {
        text += '<img src="'+data.hits[i].webformatURL + '" width="'+data.hits[i].previewWidth * 2.4 + '" height="'+data.hits[i].previewHeight * 2.4 + '" class="img-thumbnail" >';
    }
    document.getElementById('container').innerHTML = text ;
}