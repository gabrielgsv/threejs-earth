import * as THREE from "../three.js";

export default function Earth(textureLoader) {
  //criar esfera com testura de planeta
  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshPhongMaterial({
    specular: 0x333333,
    shininess: 15,
    map: textureLoader.load("../../textures/earth/earth_atmos.jpg"),
    specularMap: textureLoader.load("../../textures/earth/earth_specular.jpg"),
    normalMap: textureLoader.load("../../textures/earth/earth_normal.jpg"),

    // y scale is negated to compensate for normal map handedness.
    normalScale: new THREE.Vector2(0.85, -0.85),
  });
  const earth = new THREE.Mesh(geometry, material);

  // clouds

  const materialClouds = new THREE.MeshPhongMaterial({
    map: textureLoader.load("../../textures/earth/earth_clouds.png"),
    transparent: true,
  });

  const meshClouds = new THREE.Mesh(geometry, materialClouds);
  meshClouds.scale.set(1.005, 1.005, 1.005);
  meshClouds.rotation.z = 0.41;

  return { earth, meshClouds };
}
