var cvs = document.getElementById('canvas');
var ctx = cvs.getContext('2d');
ctx.lineWidth = 20;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.font = '40px Trebuchet MS';
ctx.fillStyle = 'white';

var draw = (function () {
    var start = 1.5 * Math.PI;
    var end = (2 * Math.PI) / 100;

    /**
     * Draw percentage of a circle
     *
     * @param {number} r Radius
     * @param {number} p Percentage of circle
     * @param {string} c Stroke color
     * @return void
     */

    return function (r, p, c) {
        p = p || 100;
        ctx.strokeStyle = c;
        ctx.beginPath();
        ctx.arc(300, 300, r, start, p * end + start, false);
        ctx.stroke();
    };
}());

var clock = function () {
    requestAnimationFrame(clock);

    var date = new Date;
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    var hp = 100 / 12 * (h % 12);
    var mp = 100 / 60 * m;
    var sp = 100 / 60 * s;

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    ctx.clearRect(0, 0, 600, 600);
    ctx.fillText(h + ':' + m + ':' + s, 300, 300);
    draw(250, hp, '#03FCBA');
    draw(225, mp, '#FF5666');
    draw(200, sp, '#8A89C0');
};

clock()
