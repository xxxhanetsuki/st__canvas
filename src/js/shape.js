import { clearRect } from './app';

const colorPalet = {
  red: '#ef2b7e40',
  blue: '#00a2d640'
}

export const createShape = (ctx, size, initialWidth, posHight, color, type, movable, isClear) => {
  let count = movable

  const interval = setInterval(() => {

    if (isClear) clearRect();
    const posWidth = formula(initialWidth, count); // 二次関数

    // 描画
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
    // 描画

    count = count - 1

    if (count <= 0) {
      clearInterval(interval)
    }
  }, 2)



};




function formula(initial, movable) {
  return initial + ( 0.001 * Math.pow(movable, 2))
}