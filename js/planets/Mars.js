import * as THREE from "../three.js";

export default function Mars(textureLoader) {
  const geometryMars = new THREE.SphereGeometry(5, 32, 32);
  const materialMars = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/mars/color.jpg"),
    specularMap: textureLoader.load("../../textures/mars/topo.jpg"),
    normalMap: textureLoader.load("../../textures/mars/normal.jpg"),
  });
  const mars = new THREE.Mesh(geometryMars, materialMars);
  mars.position.set(20, 0, 0);
  return mars;
}