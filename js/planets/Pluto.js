import * as THREE from "../three.js";

export default function Pluto(textureLoader) {
  const geometryPluto = new THREE.SphereGeometry(2, 32, 32);
  const materialPluto = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/pluto/plutomap2k.jpg"),
    bumpMap: textureLoader.load("../../textures/pluto/plutobump2k.jpg"),
  });
  const pluto = new THREE.Mesh(geometryPluto, materialPluto);
  pluto.position.set(135, 0, 0);
  return pluto;
}
