import {
    BoxGeometry,
    Mesh,
    MeshPhongMaterial
} from 'three';

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshPhongMaterial({
    color: 0x00ff00,
});
export const cube = new Mesh(geometry, material);
