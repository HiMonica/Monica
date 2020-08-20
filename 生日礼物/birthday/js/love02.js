function drawDown() {
        var c = document.getElementById("downCanvas"),
        cxt = c.getContext("2d");
        cxt.beginPath();
        cxt.moveTo(5, 20);
        cxt.lineTo(25, 45);
        cxt.lineTo(45, 20);
        cxt.lineWidth = 5;
        cxt.strokeStyle = "white";
        cxt.lineCap = 'round';
        cxt.lineJoin = "round";
        cxt.stroke();
        cxt.moveTo(5, 5);
        cxt.lineTo(25, 30);
        cxt.lineTo(45, 5);
        cxt.lineWidth = 5;
        cxt.strokeStyle = "white";
        cxt.lineCap = 'round';
        cxt.lineJoin = "round";
        cxt.stroke();
    }
    drawDown()