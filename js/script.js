import * as THREE from "./three.js";
import { OrbitControls } from "./OrbitControls.js";
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

camera.position.set(10, 0, 60);
// camera.lookAt(0, 0, 0);
controls.update();

//add lights
const light = new THREE.AmbientLight(0x404040, 2); // soft white light
scene.add(light);

const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(-1, 0, 1).normalize();
scene.add(dirLight);

const textureLoader = new THREE.TextureLoader();

//criar esfera com testura de planeta
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshPhongMaterial({
  specular: 0x333333,
  shininess: 15,
  map: textureLoader.load("../textures/earth_atmos.jpg"),
  specularMap: textureLoader.load("../textures/earth_specular.jpg"),
  normalMap: textureLoader.load("../textures/earth_normal.jpg"),

  // y scale is negated to compensate for normal map handedness.
  normalScale: new THREE.Vector2(0.85, -0.85),
});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// clouds

const materialClouds = new THREE.MeshLambertMaterial({
  map: textureLoader.load("textures/earth_clouds.png"),
  transparent: true,
});

const geometryMars = new THREE.SphereGeometry(5, 32, 32);
const materialMars = new THREE.MeshPhongMaterial({
  specular: 0x333333,
  shininess: 15,
  map: textureLoader.load("../textures/mars/mars.jpg"),
});
const mars = new THREE.Mesh(geometryMars, materialMars);
mars.position.set(20, 0, 0);
scene.add(mars);

const meshClouds = new THREE.Mesh(geometry, materialClouds);
meshClouds.scale.set(1.005, 1.005, 1.005);
meshClouds.rotation.z = 0.41;
scene.add(meshClouds);


//criar animação por frame
function animate() {
  requestAnimationFrame(animate);

  controls.update();

  earth.rotation.y += 0.004;
  meshClouds.rotation.y += 0.004;

  renderer.render(scene, camera);
}
animate();
