const hourel = document.querySelector(".hour");
const minuteel = document.querySelector(".minute");
const secondel = document.querySelector(".second");

function updateclock(){
    const currentdate = new Date();

    const hour = currentdate.getHours();
    const minute = currentdate.getMinutes();
    const second = currentdate.getSeconds();
    const hourdeg = (hour/12)*360;
    hourel.style.transform = `rotate(${hourdeg}deg)`;
    const minutedeg = (minute/60)*360;
    minuteel.style.transform = `rotate(${minutedeg}deg)`;
    const seconddeg = (second/60)*360;
    secondel.style.transform = `rotate(${seconddeg}deg)`;
}

setInterval(updateclock,1000);