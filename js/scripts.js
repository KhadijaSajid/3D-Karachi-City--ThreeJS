// import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
// import sky from '../assets/sky.jpg';
// import star from '../assets/stars.jpg';

// function myCamera(){
//     const camera = new THREE.PerspectiveCamera(
//     75, window.innerWidth/window.innerHeight, 0.1, 100
//     );
//     camera.position.set(0,1,5);
//     //     window.addEventListener('resize', function() {
//     //     camera.aspect = window.innerWidth / window.innerHeight;
//     //     camera.updateProjectionMatrix();
//     //     renderer.setSize(window.innerWidth, window.innerHeight);
//     // });
//     return camera;


// }

// function myRenderer(){
//     const renderer =  new THREE.WebGL1Renderer();
//     // renderer.setClearColor( 0x104140, 1);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     return renderer;
// }

// function myScene(){
//     const scene = new THREE.Scene();
   
//     return scene;

// }
// var renderer = new myRenderer();
// document.body.appendChild(renderer.domElement);

// var cam = new myCamera();
// var scene = new  myScene();
// const textureImg = new THREE.TextureLoader();
// scene.background = textureImg.load(star);

// renderer.render(scene, cam)





// import * as THREE from 'three';
// import { myRenderer } from './myRenderer';
// import { myCamera } from './myCamera';
// import { myScene } from './myScene';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
// import sky from '../assets/sky.jpg';
// import star from '../assets/sky.jpg';

// // const renderer = new THREE.WebGL1Renderer();
// // renderer.setSize(window.innerWidth, window.innerHeight);
// // document.body.appendChild(renderer.domElement);

// // function myRenderer(){
// //     const renderer = new THREE.WebGL1Renderer();
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// //     document.body.appendChild(renderer.domElement);
// //     return renderer
// // }
// // function myScene(){
// //     const scene = new THREE.Scene();
// //     return scene;  }

// // function myCamera(){
// //         const camera = new THREE.PerspectiveCamera(
// //     75, window.innerWidth/window.innerHeight, 0.1, 100
// //     );
// //     camera.position.set(0,1,5);
// //         window.addEventListener('resize', function() {
// //         camera.aspect = window.innerWidth / window.innerHeight;
// //         camera.updateProjectionMatrix();
// //         renderer.setSize(window.innerWidth, window.innerHeight);
// //     });
// //     return camera;
// // }
// // const scene = new THREE.Scene();
// const renderer = myRenderer();
// const scene = myScene();
// const camera = myCamera();

// // const camera = new THREE.PerspectiveCamera(
// //     75, window.innerWidth/window.innerHeight, 0.1, 100
// // );


// const orbit = new OrbitControls(camera, renderer.domElement);

// const a = new THREE.AxesHelper(5);
// scene.add(a)
// camera.position.set(0,1,5);
// orbit.update()
// const boxGeom = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const box = new THREE.Mesh(boxGeom, boxMaterial)
// scene.add(box);
// const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load(star);
// function animate(time){
//     box.rotation.x = time/1000;
//     box.rotation.y = time/1000;
//     box.rotation.z = time/1000;

// renderer.render(scene, camera)
    

// }
// // renderer.render(scene, camera)
// console.log(box.rotation.x)
// renderer.setAnimationLoop(animate)
// // window.addEventListener('resize', function() {
// //     camera.aspect = window.innerWidth / window.innerHeight;
// //     camera.updateProjectionMatrix();
// //     renderer.setSize(window.innerWidth, window.innerHeight);
// // });




import * as THREE from 'three';
import { myRenderer } from './myRenderer';
import { myCamera } from './myCamera';
import { myScene } from './myScene';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import sky from '../assets/sky.jpg';
import star from '../assets/sky.jpg';

const renderer = myRenderer();
const scene = myScene();
const camera = myCamera();
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update()
const axis = new THREE.AxesHelper(7);
scene.add(axis)

const boxGeom = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshNormalMaterial({color: 0x00ff00});
const box = new THREE.Mesh(boxGeom, boxMaterial)
scene.add(box);
box.scale.x = 10
box.scale.y = 5
// const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load(star);
function animate(time){
    // box.rotation.x = time/1000;
    // box.rotation.y = time/1000;
    // box.rotation.z = time/1000;
    renderer.render(scene, camera)
    

}

window.addEventListener('keypress', (event) => {
    var name = event.key;

    if (name == "1"){
        camera.position.set(20,0,0);
        orbit.update()

    }
    else if (name == "2"){
        camera.position.set(0,20,0);
        orbit.update()


    }
    else if (name == "3"){
        camera.position.set(0,0,20);
        orbit.update()

    }
    else if (name == "4"){
        camera.position.set(-20,0,0);
        orbit.update()

    }
    else if (name == "5"){
        camera.position.set(0,-20,0);
        orbit.update()

    }
    else if (name == "6"){
        camera.position.set(0,0,-20);
        orbit.update()
    }
  }, false);


renderer.render(scene, camera)
renderer.setAnimationLoop(animate)

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});