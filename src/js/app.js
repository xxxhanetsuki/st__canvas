import {createShape} from './shape'

let width;
let height;
const ele = document.getElementById('canvas');
ele.setAttribute('width', 1010);
ele.setAttribute('height', height);
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
  create();
}

function create() {
  // top
  createShape(ctx, 145, 0, 13, 'red', 'bm');
  createShape(ctx, 105, 30, 0, 'blue', 'bm');
  createShape(ctx, 100, 55, 55, 'red', 'tp');
  createShape(ctx, 140, 150, 125, 'blue', 'bm');
  createShape(ctx, 155, 240, 0, 'red', 'bm');
  createShape(ctx, 60, 770, 0, 'red', 'bm');
  createShape(ctx, 100, 950, 50, 'blue', 'bm');

  // under
  createShape(ctx, 160, 10, (height-160), 'blue', 'tp');
  createShape(ctx, 130, 80, (height-130-55), 'red', 'tp');
  createShape(ctx, 190, 130, (height-80), 'red', 'tp');
  createShape(ctx, 190, 260, (height-190-35), 'blue', 'bm');
  createShape(ctx, 60, 700, (height-60-10), 'red', 'tp');
}
