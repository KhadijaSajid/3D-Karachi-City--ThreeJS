import * as THREE from 'three';

function myCube(width, height, depth, img){
    const cubeGeometry = new THREE.BoxGeometry(width, height, depth);
    const textureLoader = new THREE.TextureLoader();
    const cubeMaterial = new THREE.MeshBasicMaterial({
        map: textureLoader.load(img)});
    const cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
    return cube
}
export {myCube}