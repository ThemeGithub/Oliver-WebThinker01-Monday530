let x, y, dx, dy, dotSize, canvas, ctx;

window.onload = () => {
    canvas = document.getElementById('canvasAnimation');
    ctx = canvas.getContext('2d');

    dotSize = 10;

    x = canvas.width / 2 - dotSize / 2;
    y = canvas.height / 2 - dotSize / 2;
    dx = 2;
    dy = 2;

    update();
}

const update = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(x, y, dotSize, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  if (x + dx > canvas.width - dotSize || x + dx < dotSize) {
    dx = dx * -1;
  }

  if (y + dy > canvas.height - dotSize || y + dy < dotSize) {
    dy = dy * -1;
  }

  x = x + dx;
  y = y + dy;

  requestAnimationFrame(update);
}