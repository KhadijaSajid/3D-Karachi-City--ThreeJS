import * as THREE from 'three';
import { myRenderer } from './myRenderer';
import { myCamera } from './myCamera';
import { myScene } from './myScene';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import build1 from '../assets/build1jpeg.jpeg';
import build2 from '../assets/star1.jpg';
import star from '../assets/stars.jpg';
import aina from '../assets/image1.jpg';
import fizza from '../assets/image0.jpg';
import erum from '../assets/erum.jpg';




const renderer = myRenderer();
const scene = myScene();
const camera = myCamera();




const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-10, 30, 30);
orbit.update();

// const boxGeometry = new THREE.BoxGeometry();
// const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
// const box = new THREE.Mesh(boxGeometry, boxMaterial);
// scene.add(box);

const planeGemo = new THREE.PlaneGeometry(30,30);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, side:THREE.DoubleSide})

const plane = new THREE.Mesh(planeGemo, planeMaterial);
// scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

const textureLoader = new THREE.TextureLoader();
// const sphereGeometry = new THREE.SphereGeometry(2, 50, 50);
const sphereGeometry = new THREE.SphereGeometry(7,20);
const sphereMaterial = new THREE.MeshBasicMaterial({
    // color: 0x0000FF,
    map: textureLoader.load(aina)});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add(sphere);
sphere.position.set(-11, 9,-10);



const sphereGeometry1 = new THREE.SphereGeometry(10,20);
const sphereMaterial1 = new THREE.MeshBasicMaterial({
    map: textureLoader.load(erum),
    wireframe: false});
const sphere1 = new THREE.Mesh(sphereGeometry1, sphereMaterial1);
// scene.add(sphere1);
sphere1.position.set(-2,10,-10);



const sphereGeometry2 = new THREE.SphereGeometry(10,20);
const sphereMaterial2 = new THREE.MeshBasicMaterial({
    map: textureLoader.load(aina),
    wireframe: false});
const sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
scene.add(sphere2);
sphere2.position.set(10,10,-10);


const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);



//box2.material.map = textureLoader.load(nebula);




function animate(time) {
    // plane.rotation.z = time/5000;

    renderer.render(scene, camera);
    //console.log(window.innerHeight);
}

renderer.setAnimationLoop(animate);
renderer.render(scene, camera)

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});