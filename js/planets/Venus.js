import * as THREE from "../three.js";

export default function Venus(textureLoader) {
  const geometryVenus = new THREE.SphereGeometry(4.2, 32, 32);
  const materialVenus = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/venus/mercurymap (1).jpg"),
    bumpMap: textureLoader.load("../../textures/venus/mercurybump.jpg"),
  });
  const venus = new THREE.Mesh(geometryVenus, materialVenus);
  venus.position.set(-20, 0, 0);
  return venus;
}
