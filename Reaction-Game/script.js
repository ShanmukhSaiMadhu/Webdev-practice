const btn1 = document.getElementById('start-button');

const randomNumberGenerator = (start, end) => {
    const number = start + Math.floor(Math.random()*(end-start));
    return number;
}

let startTime, currTime;

const getDifference = (startTime, endTime) => {
    let ans = (endTime - startTime) + 'ms';
}
const showShape = () => {

    if(startTime != undefined) {
        currTime = new Date();
        const timeTaken = document.getElementById('time-taken');
        timeTaken.innerHTML = getDifference(startTime, currTime);
        startTime = currTime;
    }else {
        startTime = new Date();
    }
    const main = document.getElementById('main')

    const parentWidth = main.offsetWidth;
    const parentHeight = main.offsetHeight;

    const shape = document.getElementById('shape');

    shape.style.height = `${randomNumberGenerator(50, parentWidth*0.3)}px`;
    shape.style.width = shape.style.height;

    shape.style.borderRadius = `${randomNumberGenerator(0, 50)}%`;

    let left = randomNumberGenerator(0, parentWidth*0.7);
    let top = randomNumberGenerator(0, parentHeight - shape.offsetHeight);

    shape.style.left = left + 'px';
    shape.style.top = top + 'px';

    const color = `rgb(${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)}, ${randomNumberGenerator(0, 255)})`;

    shape.style.display = 'block';

    const btn1 = document.getElementById.getElementById('start-button');
    btn1.disabled = true;
}

btn1.addEventListener('click', showShape);

const shape = document.getElementById('shape');

shape.addEventListener('click', showShape);