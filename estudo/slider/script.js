var slidering = document.querySelector('.slider-img');
var images = ['img1.png','img2.png','img3.png','img4.png','img5.png','img6.png'];
var i = 0;

function prev() {
    if (i<=0) i = images.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slidering.setAttribute('src', '/estudo/imgs/' + images[i]);
}