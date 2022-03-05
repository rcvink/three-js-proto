import { OrthographicCamera } from 'three';
import { renderer } from './renderer';

const canvasAspectRatio = renderer.domElement.width / renderer.domElement.height;
const frustumWidth = canvasAspectRatio * 10;
const frustumHeight = canvasAspectRatio * 10;
const camera = new OrthographicCamera(
    frustumWidth / -2,
    frustumWidth / 2,
    frustumHeight / 2,
    frustumHeight / -2,
    1,
    1000
);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);

export { camera };