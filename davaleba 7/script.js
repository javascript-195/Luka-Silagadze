// image zoom
const image = document.getElementById("img");
let imgWidth = 800;

function zoom(){
    imgWidth = imgWidth + 10;
    image.style.width = imgWidth + "px";
}
function unzoom(){
    imgWidth = imgWidth - 10;
    image.style.width = imgWidth + "px";
}

// text color change
function colorChange(){
    const text = document.getElementById("txt");
    const colors = ["red", "blue", "green"];
    const randomcolor = colors[Math.floor(Math.random() * colors.length)];
    text.style.color = randomcolor;
    text.innerText = `${randomcolor}`;
}

// content show/hide
function contentShowHide(){
    const content = document.getElementById("content");
    const hideShow_btn = document.getElementById("hideShow_btn");

    if(content.style.display == "block"){
        content.style.display = "none";
        hideShow_btn.innerText = "ჩვენება";
    }
    else{
        content.style.display = "block";
        hideShow_btn.innerText = "დამალვა";
    }
}
