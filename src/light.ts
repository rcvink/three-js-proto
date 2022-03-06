import { DirectionalLight, DirectionalLightHelper } from "three";

const color = 0xFFFFFF;
const intensity = 1;
const light = new DirectionalLight(color, intensity);
light.position.set(2, 0.5, 1);
const lightHelper = new DirectionalLightHelper(light, 5);

export { light, lightHelper };