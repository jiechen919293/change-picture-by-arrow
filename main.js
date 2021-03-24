const arrow = document.querySelectorAll('.arrow-container');
const currentimg = document.querySelector('img')
const array = ['imgs/img1.jpg', 'imgs/img2.jpg', 'imgs/img3.jpg', 'imgs/img4.jpg', 'imgs/img5.jpg'];
let num = 0;
currentimg.src = array[num];
arrow[0].addEventListener('click', function(event) {
    num--;
    if (num === -1) {
        num = array.length - 1;
    };
    currentimg.src = array[num];
});
arrow[1].addEventListener('click', function(event) {
    num++;
    if (num === array.length) {
        num = 0;
    };
    currentimg.src = array[num];
});