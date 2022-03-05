import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial
} from 'three';

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});
export const cube = new Mesh(geometry, material);
