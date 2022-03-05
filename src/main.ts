import { 
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
 } from 'three';

const scene = new Scene(); 

const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 2;

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild ( renderer.domElement );

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true
});
const cube = new Mesh(geometry, material);

scene.add(cube);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    render();
}

function render() {
    renderer.render(scene, camera);
}

animate();