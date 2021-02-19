import * as THREE from "../three.js";

export default function Uranus(textureLoader) {
  const geometryUranus = new THREE.SphereGeometry(5, 32, 32);
  const materialUranus = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/uranus/uranusmap.jpg"),
  });
  const uranus = new THREE.Mesh(geometryUranus, materialUranus);
  uranus.position.set(100, 0, 0);
  return uranus;
}
