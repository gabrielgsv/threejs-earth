import * as THREE from "../three.js";

export default function Jupiter(textureLoader) {
  const geometryJupiter = new THREE.SphereGeometry(9, 32, 32);
  const materialJupiter = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/jupiter/jupitermap.jpg"),
  });
  const jupiter = new THREE.Mesh(geometryJupiter, materialJupiter);
  jupiter.position.set(45, 0, 0);
  return jupiter;
}
