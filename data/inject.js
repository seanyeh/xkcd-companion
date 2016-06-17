var comic = document.getElementById("comic");
var comicImg = document.querySelector("#comic img");

if (comic){
    var url = "http://www.explainxkcd.com/wiki/index.php" + window.location.pathname.slice(0, -1);

    comic.innerHTML += "" +
        "<div style='font-size: 0.8em'><i>" +
        comicImg.title +
        "</i></div>" +
        "<div style='font-size: 0.8em'>" +
        "<a href=\"" + url + "\">Explain?</a>" +
        "</div>";
}
