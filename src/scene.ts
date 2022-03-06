import { Scene } from 'three';
import { axesHelper } from './axesHelper';
import { cube } from './cube';
import { gridHelper } from './gridHelper';
import { walls } from './walls';
import { light, lightHelper } from './light';

export const scene = new Scene();
scene.add(cube);
scene.add(gridHelper);
scene.add(axesHelper);
walls.forEach(wall => scene.add(wall));
scene.add(light);
scene.add(lightHelper);
