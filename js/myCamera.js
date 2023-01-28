import * as THREE from 'three';
function myCamera(){
        const camera = new THREE.PerspectiveCamera(
    50, window.innerWidth/window.innerHeight, 0.1, 1000
    );
camera.position.set(10,10,10);
return camera;
}
export {myCamera}
