let parentSlider = document.querySelector('.slide-wrapper')
let slider = document.querySelector('.slider');
let button = document.querySelector('.range');
let max = document.querySelector('#max');
let min = document.querySelector('#min');

function moveButton (e) {

    var pointA = parentSlider.offsetLeft;
    var pointB = slider.offsetLeft;   

    let position = parentSlider.offsetLeft + slider.offsetLeft + slider.clientLeft;

    button.style.left = `${e.clientX-position}px`;


}

slider.addEventListener('click', moveButton);

button.onmousedown = function (e) {

    let positionX = event.clientX - button.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove (e) {
        let newLeft = Math.min(Math.max(event.clientX - positionX - slider.getBoundingClientRect().left, 0), slider.clientWidth);
        button.style.left = newLeft + 'px';

        let max1 = parseInt(max.value);
        let min1= parseInt(min.value);
        

        let position = parentSlider.offsetLeft + slider.offsetLeft + slider.clientLeft;
        let positionB = e.clientX-position;

        let procent = (positionB / slider.clientWidth) * (max1 - min1) + min1;
        console.log(slider.clientWidth);

        let title = document.querySelector('#title');
        title.innerHTML = `Number: ${Math.trunc(procent)}.`;
    }
    
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};




