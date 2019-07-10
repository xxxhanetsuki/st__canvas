const colorPalet = {
  red: '#ef2b7e40',
  blue: '#00a2d640'
}

export const createShape = (ctx, size, posWidth, posHight, color, type) => {
  ctx.beginPath();
  ctx.moveTo(posWidth, posHight);
  if (type === 'bm') {
    ctx.lineTo(size + posWidth, posHight);
    ctx.lineTo(posWidth, size + posHight);
  }
  else {
    ctx.lineTo(size + posWidth, size + posHight);
    ctx.lineTo(posWidth, size + posHight);
  }
  ctx.closePath();
  ctx.fillStyle = colorPalet[color];
  ctx.fill();
};