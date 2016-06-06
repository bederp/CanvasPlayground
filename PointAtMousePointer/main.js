window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        centerX = width / 2,
        centerY = height / 2,
        dx,
        dy,
        angle;

    render();

    function render() {
        context.clearRect(0, 0, width, height);

        context.save();
        context.translate(centerX, centerY);
        context.rotate(angle);

        context.beginPath();
        drawPointer();
        context.stroke();

        context.restore();
        requestAnimationFrame(render);

    }

    function drawPointer() {
        context.moveTo(-20, 0);
        context.lineTo(20, 0);
        context.lineTo(10, 10);
        context.moveTo(20, 0);
        context.lineTo(10, -10);
    }

    document.body.addEventListener("mousemove", function (event) {
        dx = event.clientX - centerX;
        dy = event.clientY - centerY;
        angle = Math.atan2(dy, dx);

    })

};