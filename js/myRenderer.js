import * as THREE from 'three';


function myRenderer(){
    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setViewport(0,300, window.innerWidth/4, window.innerHeight/4)
    document.body.appendChild(renderer.domElement);

    return renderer
}
export {myRenderer}