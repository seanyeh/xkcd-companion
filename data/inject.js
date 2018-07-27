let comic = document.getElementById("comic");
let comicImg = document.querySelector("#comic img");

if (comic){
    let url = "http://www.explainxkcd.com/wiki/index.php" + window.location.pathname.slice(0, -1);

    let d = document.createElement("div");
    d.setAttribute("style", "font-size:0.8em;");

    let alt = document.createElement("div");
    alt.setAttribute("style", "font-style:italic;");
    alt.appendChild(document.createTextNode(comicImg.title));

    let a = document.createElement("a");
    a.setAttribute("href", url);
    a.appendChild(document.createTextNode("Explain?"));


    d.appendChild(alt);
    d.appendChild(a);

    comic.append(d);
}
