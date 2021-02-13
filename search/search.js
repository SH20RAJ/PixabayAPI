const key = '18529490-0f84e1f15c2e4758df73f845b';
document.onload = loadDocbp();

var postdata = null;

function loadDocbp() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            window.data = JSON.parse(this.responseText);
            console.log(window.data);
            console.log(data.hits);
            setup(data);
        }
    };
    xhttp.open("GET", 'https://pixabay.com/api/?pretty=true&key=' + key + '&q=' + getParameterByName('q'), true);
    xhttp.send();

}

var text = "";
var i;

function setup() {
    for (i = 0; i < data.hits.length; i++) {
        text += '<div class="image"><a href="../image?id=' + data.hits[i].id + '"><img src="' + data.hits[i].webformatURL + '" width="' + data.hits[i].previewWidth * 2.4 +
            '" height="' + data.hits[i].previewHeight * 2.4 + '" class="img-thumbnail" ></a> <div class="imgfooter"><a href="' + data.hits[i].largeImageURL + ' " target="_blank" download><button class="imgdownload">Download</button></a><a href="../image?id=' + data.hits[i].id + '" ><button class="imgopen">Open</button></a></div> </div>';
    }
    document.getElementById('container').innerHTML = text;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}