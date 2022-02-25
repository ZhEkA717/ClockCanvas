"use strict";

const canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');
function drawClock(r = 200) {
    let mlSeconds = new Date().getMilliseconds();

    const clockRadius = r,
        clockCenterX = clockRadius,
        clockCenterY = clockRadius;

    context.fillStyle = "lightgrey";
    context.beginPath();
    context.strokeStyle = "lightgrey"
    context.linewidth = 2;
    context.arc(clockCenterX, clockCenterY, clockRadius, 0, Math.PI * 2, false);
    context.stroke();
    context.fill();


    function posNumber() {
        for (let k = 0; k <= 360; k = k + 6) {
            let angle = k / 180 * Math.PI,
                clockNumberCenterX = clockCenterX + clockRadius * 0.8 * Math.sin(angle),
                clockNumberCenterY = clockCenterY - clockRadius * 0.8 * Math.cos(angle),
                cx = Math.round(clockNumberCenterX),
                cy = Math.round(clockNumberCenterY);

            context.beginPath();
            context.arc(cx, cy, 0.5, 0, Math.PI * 2, false);
            context.stroke();
            context.fill();
            context.strokeStyle = 'black';
            context.lineWidth = 2;

        }

        let count = 0;
        for (let i = 30; i <= 360; i = i + 30) {
            let angle = i / 180 * Math.PI,
                clockNumberCenterX = clockCenterX + clockRadius * 0.8 * Math.sin(angle),
                clockNumberCenterY = clockCenterY - clockRadius * 0.8 * Math.cos(angle),
                cx = Math.round(clockNumberCenterX),
                cy = Math.round(clockNumberCenterY);

            context.fillStyle = 'lightgrey';
            context.strokeStyle = 'lightgrey';
            context.beginPath();
            context.arc(cx, cy, 1, 0, Math.PI * 2, false);
            context.stroke();
            context.fill();
            context.fillStyle = 'black';
            context.font = ' bold 30px Arial';
            context.textBaseline = 'middle';
            context.textAlign = 'center';
            context.fillText(++count, cx, cy);
        }

    }
    posNumber();

    let seconds = new Date().getSeconds(),
        minutes = new Date().getMinutes(),
        hours = new Date().getHours(),
        paramsArrow = {
            s: {
                length: clockRadius * 0.8,
                width: 2,
                angle: seconds * 6 / 180 * Math.PI
            },
            m: {
                length: clockRadius * 0.6,
                width: 4,
                angle: minutes * 6 / 180 * Math.PI
            },
            h: {
                length: clockRadius * 0.4,
                width: 6,
                angle: (hours * 30 + (minutes * 60 + seconds) * (1 / 120)) / 180 * Math.PI
            }
        }

    let clockNumberCenterXS = clockCenterX + paramsArrow.s.length * Math.sin(paramsArrow.s.angle),
        clockNumberCenterYS = clockCenterY - paramsArrow.s.length * Math.cos(paramsArrow.s.angle),
        cxs = Math.round(clockNumberCenterXS),
        cys = Math.round(clockNumberCenterYS);

    context.strokeStyle = 'red';
    context.lineWidth = paramsArrow.s.width;
    context.beginPath();
    context.moveTo(clockCenterX, clockCenterY);
    context.lineTo(cxs, cys);
    context.stroke();

    let clockNumberCenterXM = clockCenterX + paramsArrow.m.length * Math.sin(paramsArrow.m.angle),
        clockNumberCenterYM = clockCenterY - paramsArrow.m.length * Math.cos(paramsArrow.m.angle),
        cxm = Math.round(clockNumberCenterXM),
        cym = Math.round(clockNumberCenterYM);

    context.strokeStyle = 'black';
    context.lineWidth = paramsArrow.m.width;
    context.beginPath();
    context.moveTo(clockCenterX, clockCenterY);
    context.lineTo(cxm, cym);
    context.stroke();

    let clockNumberCenterXH = clockCenterX + paramsArrow.h.length * Math.sin(paramsArrow.h.angle),
        clockNumberCenterYH = clockCenterY - paramsArrow.h.length * Math.cos(paramsArrow.h.angle),
        cxh = Math.round(clockNumberCenterXH),
        cyh = Math.round(clockNumberCenterYH);

    context.strokeStyle = 'black';
    context.lineWidth = paramsArrow.h.width;
    context.beginPath();
    context.moveTo(clockCenterX, clockCenterY);
    context.lineTo(cxh, cyh);
    context.stroke();

    setTimeout(drawClock, 1020 - mlSeconds);
}

drawClock();