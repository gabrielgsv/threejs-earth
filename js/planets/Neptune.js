import * as THREE from "../three.js";

export default function Neptune(textureLoader) {
  const geometryNeptune = new THREE.SphereGeometry(4, 32, 32);
  const materialNeptune = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/neptune/neptunemap.jpg"),
  });
  const neptune = new THREE.Mesh(geometryNeptune, materialNeptune);
  neptune.position.set(120, 0, 0);
  return neptune;
}
