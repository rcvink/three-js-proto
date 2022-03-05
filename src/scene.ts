import { Scene } from 'three';
import { axesHelper } from './axesHelper';
import { cube } from './cube';
import { gridHelper } from './gridHelper';

export const scene = new Scene();
scene.add(cube);
scene.add(gridHelper);
scene.add(axesHelper);
