import {createShape} from './shape'

let movable = 1010;

let width;
let height;
const ele = document.getElementById('canvas');
// ele.setAttribute('width', 1010);
// ele.setAttribute('height', height);
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

function create() {
  const interval = setInterval(() => {
    ctx.clearRect(0, 0, width, height); // 初期化
    
    // top
    createShape(ctx, 145, formula(0, movable), 13, 'red', 'bm');
    createShape(ctx, 105, formula(30, movable), 0, 'blue', 'bm');
    createShape(ctx, 100, formula(55, movable), 55, 'red', 'tp');
    createShape(ctx, 140, formula(150, movable), 125, 'blue', 'bm');
    createShape(ctx, 155, formula(240, movable), 0, 'red', 'bm');
    createShape(ctx, 60, formula(770, movable), 0, 'red', 'bm');
    createShape(ctx, 100, formula(950, movable), 50, 'blue', 'bm');

    // under
    createShape(ctx, 160, formula(10, movable), (height-160), 'blue', 'tp');
    createShape(ctx, 130, formula(80, movable), (height-130-55), 'red', 'tp');
    createShape(ctx, 190, formula(130, movable), (height-80), 'red', 'tp');
    createShape(ctx, 190, formula(260, movable), (height-190-35), 'blue', 'bm');
    createShape(ctx, 60, formula(700, movable), (height-60-10), 'red', 'tp');

    movable = movable - 1

    if (movable <= 0) {
      clearInterval(interval)
    }
  }, 2)
}

function formula(initial, movable) {
  return initial + ( 0.001 * Math.pow(movable, 2))
}

export const clearRect = () => {
  ctx.clearRect(0, 0, width, height); // 初期化
}