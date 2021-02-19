import * as THREE from "../three.js";

export default function Mercury(textureLoader) {
  const geometryMercury = new THREE.SphereGeometry(2, 32, 32);
  const materialMercury = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/mercury/mercurymap.jpg"),
    bumpMap: textureLoader.load("../../textures/mercury/mercurybump.jpg"),
  });
  const mercury = new THREE.Mesh(geometryMercury, materialMercury);
  mercury.position.set(-35, 0, 0);
  return mercury;
}
