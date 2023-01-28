import * as THREE from 'three';

function mySphere(width, height, triangles){
    const sphereGeometry = new THREE.SphereGeometry(width, height, triangles);
    const sphereMaterial = new THREE.MeshStandardMaterial({
        wireframe: false, 
        color:0xe0cc4a});
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    return sphere
}
export {mySphere}