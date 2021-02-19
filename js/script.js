import * as THREE from "./three.js";
import { OrbitControls } from "./OrbitControls.js";
import Mars from "./planets/Mars.js";
import Earth from "./planets/Earth.js";
import Venus from "./planets/Venus.js";
import Mercury from "./planets/Mercury.js";
import Jupiter from "./planets/Jupiter.js";
import Saturn from "./planets/Saturn.js";
import Uranus from "./planets/Uranus.js";
import Neptune from "./planets/Neptune.js";
import Pluto from "./planets/Pluto.js";
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

camera.position.set(137, 24, 361);
// camera.lookAt(0, 0, 0);
controls.update();

//add lights
const light = new THREE.AmbientLight(0x404040, 2.3); // soft white light
scene.add(light);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(-50, 0, 0)
scene.add( directionalLight );

const textureLoader = new THREE.TextureLoader();

//stars background
scene.background = textureLoader.load("../textures/stars/stars.png");

const mercury = Mercury(textureLoader);
scene.add(mercury);

const venus = Venus(textureLoader);
scene.add(venus);

const { earth, meshClouds } = Earth(textureLoader);
scene.add(earth);
scene.add(meshClouds);

const mars = Mars(textureLoader);
scene.add(mars);

const jupiter = Jupiter(textureLoader);
scene.add(jupiter);

const { saturn, ring } = Saturn(textureLoader);
scene.add(saturn);
scene.add(ring);

const uranus = Uranus(textureLoader);
scene.add(uranus);

const neptune = Neptune(textureLoader);
scene.add(neptune);

const pluto = Pluto(textureLoader);
scene.add(pluto);


//criar animação por frame
function animate() {
  requestAnimationFrame(animate);
  
  controls.update();
  
  earth.rotation.y += 0.004;
  meshClouds.rotation.y += 0.003;
  
  mars.rotation.y += 0.004;
  mercury.rotation.y += 0.004;
  venus.rotation.y += 0.004;
  jupiter.rotation.y += 0.004;
  saturn.rotation.y += 0.004;
  uranus.rotation.y += 0.004;
  neptune.rotation.y += 0.004;
  pluto.rotation.y += 0.004;
  ring.rotation.z -= 0.004;
  console.log(camera)
  renderer.render(scene, camera);
}
animate();
