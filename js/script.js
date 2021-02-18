import * as THREE from "./three.js";
import { OrbitControls } from "./OrbitControls.js";
import Mars from "./planets/Mars.js";
import Earth from "./planets/Earth.js";
import Venus from "./planets/Venus.js";
import Mercury from "./planets/Mercury.js";
// criar cenario
const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//criar camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(10, 0, 150);
// camera.lookAt(0, 0, 0);
controls.update();

//add lights
const light = new THREE.AmbientLight(0x404040, 2); // soft white light
scene.add(light);

const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(-1, 0, 1).normalize();
scene.add(dirLight);

const textureLoader = new THREE.TextureLoader();

//stars background
scene.background = textureLoader.load("../textures/stars/stars.png");

const mercury = Mercury(textureLoader);
scene.add(mercury);

const venus = Venus(textureLoader);
scene.add(venus);

const mars = Mars(textureLoader);
scene.add(mars);

const { earth, meshClouds } = Earth(textureLoader);
scene.add(earth);
scene.add(meshClouds);

//criar animação por frame
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  earth.rotation.y += 0.004;
  meshClouds.rotation.y += 0.003;

  mars.rotation.y += 0.004;
  mercury.rotation.y += 0.004;
  venus.rotation.y += 0.004;

  renderer.render(scene, camera);
}
animate();
