import * as THREE from "./three.js";
import { OrbitControls } from "./OrbitControls.js";
// criar cenario
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//criar camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(10, 0, 5);
// camera.lookAt(0, 0, 0);
controls.update();

//criar esfera com testura de planeta
const geometry = new THREE.SphereGeometry(5, 32, 32);
const loader = new THREE.TextureLoader();
const material = new THREE.MeshBasicMaterial({
  map: loader.load("../textures/earth.jpg"),
});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

//criar animação por frame
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  earth.rotation.y += 0.004;

  renderer.render(scene, camera);
}
animate();
