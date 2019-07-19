import {createShape} from './shape'

const movable = 1010;

let width;
let height;
const ele = document.getElementById('canvas');
const ctx = ele.getContext('2d');

window.addEventListener('resize', function() {
  (!window.requestAnimationFrame) ? setTimeout(sizing, 300): window.requestAnimationFrame(sizing);
});

sizing();

function sizing() {
  width = document.getElementById('wrap').clientWidth
  ele.width = width;
  height = document.getElementById('wrap').clientHeight;
  ele.height = height;

  createShape(ctx, 145, 0, 13, 'red', 'bm', movable, true);
  createShape(ctx, 105, 30, 0, 'blue', 'bm', movable);
  createShape(ctx, 100, 55, 55, 'red', 'tp', movable);
  createShape(ctx, 140, 150, 125, 'blue', 'bm', movable);
  createShape(ctx, 155, 240, 0, 'red', 'bm', movable);
  createShape(ctx, 60, 770, 0, 'red', 'bm', movable);
  createShape(ctx, 100, 950, 50, 'blue', 'bm', movable);

  // under
  createShape(ctx, 160, 10, (height-160), 'blue', 'tp', movable);
  createShape(ctx, 130, 80, (height-130-55), 'red', 'tp', movable);
  createShape(ctx, 190, 130, (height-80), 'red', 'tp', movable);
  createShape(ctx, 190, 260, (height-190-35), 'blue', 'bm', movable);
  createShape(ctx, 60, 700, (height-60-10), 'red', 'tp', movable);
}

export const clearRect = () => {
  ctx.clearRect(0, 0, width, height); // 初期化
}