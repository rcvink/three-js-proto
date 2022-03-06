import { OrthographicCamera } from 'three';

const scale = 0.01;
const left = -window.innerWidth / 2;
const right = window.innerWidth / 2;
const top = window.innerHeight / 2;
const bottom = -window.innerHeight / 2;
const near = 1;
const far = 1000;

const camera = new OrthographicCamera(
    left * scale,
    right * scale,
    top * scale,
    bottom * scale,
    near,
    far
);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);

export { camera };