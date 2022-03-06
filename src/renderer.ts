import { WebGLRenderer } from 'three';

const canvas = document.querySelector("#c") as HTMLCanvasElement;
const renderer = new WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

export { renderer };
