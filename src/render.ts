import { cube } from './cube';
import { renderer } from './renderer';
import { camera } from './camera';
import { scene } from './scene';

export function render() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}