import * as THREE from "../three.js";

export default function Saturn(textureLoader) {
  const geometrySaturn = new THREE.SphereGeometry(8, 32, 32);
  const materialSaturn = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/saturn/saturnmap.jpg"),
  });
  const saturn = new THREE.Mesh(geometrySaturn, materialSaturn);
  saturn.position.set(75, 0, 0);

  const geometryRing = new THREE.RingGeometry(10, 5, 32);
  const materialRing = new THREE.MeshPhongMaterial({
    map: textureLoader.load("../../textures/saturn/saturnringcolor.jpg"),
    bumpMap: textureLoader.load("../../textures/saturn/saturnringpattern.gif"),
    side: THREE.DoubleSide,
  });
  const ring = new THREE.Mesh(geometryRing, materialRing);
  ring.position.set(75, 0, 0);

  return {saturn, ring};
}
