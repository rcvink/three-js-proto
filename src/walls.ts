import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshPhongMaterial
} from 'three';

const geometry = new BoxGeometry(0.1, 2, 8);
const material = new MeshPhongMaterial({
    color: 'grey',
});
const wall1 = new Mesh(geometry, material);
const wall2 = new Mesh(geometry, material);
const wall3 = new Mesh(geometry, material);
const wall4 = new Mesh(geometry, material);
wall1.position.x = -4;
wall1.position.y = 1;
wall2.position.z = -4;
wall2.position.y = 1;
wall2.rotation.y = Math.PI / 2;
wall3.position.x = 4;
wall3.position.y = 1;
wall4.position.z = 4;
wall4.rotation.y = Math.PI / 2;
wall4.position.y = 1;
export const walls = [ wall1, wall2, wall3, wall4 ];
