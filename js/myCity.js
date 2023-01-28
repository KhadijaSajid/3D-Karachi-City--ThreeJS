
import * as THREE from 'three';
import { myCube } from './myCube';
import { mySphere } from './mySphere';
import { myRenderer } from './myRenderer';
import { myCamera } from './myCamera';
import { myScene } from './myScene';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
import build1 from '../assets/sbuild1.jpg';
import build2 from '../assets/build2.jpeg';
import build3 from '../assets/build3.jpg';
import build4 from '../assets/build4.jpg';
import build5 from '../assets/build5.jpg';
import light from '../assets/lamp.jpg';
import cart from '../assets/cartleg.jpg'
import cartlegs from '../assets/cartlegs.jpg'
import grass from '../assets/grass.jpg'
import briyani from '../assets/briyani.jpg'
import white from '../assets/peach.jpg';
import bengalibaba from '../assets/bababengali.jpg';
import floor from '../assets/floor.jpg';
import road from '../assets/road.jpg'
import road2 from '../assets/road2.jpg'
import { myCube } from './myCube';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js' 

const renderer = myRenderer();
const scene = myScene();
const camera = myCamera();

const orbit = new OrbitControls(camera, renderer.domElement);
const textureLoader = new THREE.TextureLoader();
camera.position.set(-35, 65, 45);


orbit.update();



const planeGemo = new THREE.PlaneGeometry(50,50);
const planeMaterial = new THREE.MeshBasicMaterial({map:textureLoader.load(floor), side:THREE.DoubleSide})

const plane = new THREE.Mesh(planeGemo, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;


const building1 = myCube(5, 15, 3, build3)
const building2 = myCube(25, 17, 3, bengalibaba)
const building3 = myCube(23, 20, 4, build1)
const roadtrack = myCube(50, 0.5, 9, road)
const lightpole = myCube(0.5, 16, 0.5, light)
const lightpole1 = myCube(0.5, 16, 0.5, light)
const lightpole2 = myCube(0.5, 16, 0.5, light)
const lightpole3 = myCube(0.5, 16, 0.5, light)
const lightpole4 = myCube(0.5, 16, 0.5, light)
const lightpole5 = myCube(0.5, 16, 0.5, light)
const lightpole6 = myCube(0.5, 16, 0.5, light)
const lightpole7 = myCube(0.5, 16, 0.5, light)
const lightpole8 = myCube(0.5, 16, 0.5, light)




const lights = new THREE.DirectionalLight(0xffffff, 1)
scene.add(lights)
lights.position.set(10,50,30)
const help = new THREE.DirectionalLightHelper(lights,5)

scene.add(building2);
scene.add(building3);
scene.add(roadtrack)
scene.add(lightpole)
scene.add(lightpole1)
scene.add(lightpole2)
scene.add(lightpole3)
scene.add(lightpole5)
scene.add(lightpole6)
scene.add(lightpole7)
scene.add(lightpole8)



const grassfloor = myCube(20.4, 0.5, 15, grass);
scene.add(grassfloor)
grassfloor.position.set(-14.8, 0, -13)

grassborder = myCube(20.5, 1, 1, cartlegs)
scene.add(grassborder)
grassborder.position.set(-14.8, 0.5, -5)


grassborder2 = myCube(1, 1, 15, cartlegs)
scene.add(grassborder2)
grassborder2.position.set(-5, 0.5, -13)


building2.position.set(-12,8.5,-22);
building3.position.set(13,10,-22);


roadtrack.position.set(0, 0, 22)
lightpole1.position.set(-20, 8, 17)
lightpole.position.set(-10, 8, 17)
lightpole4.position.set(0, 8, 17)
lightpole2.position.set(10, 8, 17)
lightpole3.position.set(20, 8, 17)
lightpole5.position.set(-5, 8, -5)
lightpole6.position.set(-5, 8, 8)
lightpole7.position.set(5, 8, -5)
lightpole8.position.set(5, 8, 8)




const sphere1 = mySphere(1, 40, 50)
const sphere2 = mySphere(1, 40, 50)
const sphere3 = mySphere(1, 40, 50)
const sphere4 = mySphere(1, 40, 50)
const sphere5 = mySphere(1, 40, 50)
const sphere6 = mySphere(1, 40, 50)
const sphere7 = mySphere(1, 40, 50)
const sphere8 = mySphere(1, 40, 50)
const sphere9 = mySphere(1, 40, 50)




lightpole1.add(sphere1);
scene.add(sphere2);
// scene.add(sphere3);
scene.add(sphere4);
scene.add(sphere5);
scene.add(sphere6);
scene.add(sphere7);
scene.add(sphere8);
scene.add(sphere9);



sphere1.position.set(0,8, 0);
sphere2.position.set(-10,16,17);
sphere3.position.set(0,16,17);
sphere4.position.set(10,16,17);
sphere5.position.set(-5,16,-5);
sphere6.position.set(-5,16,8);
sphere7.position.set(5,16,-5);
sphere8.position.set(5,16,8);
sphere9.position.set(20,16,17);




const thela = myCube(10, 0.5, 10, cartlegs)
const thelaleg1 = myCube(0.5, 3, 0.5, cart)
const thelaleg2 = myCube(0.5, 3, 0.5, cart)
const thelaleg3 = myCube(0.5, 3, 0.5, cart)
const thelaleg4 = myCube(0.5, 3, 0.5, cart)
const briyaniBanner = myCube(10, 5, 0, briyani)



scene.add(thela)
scene.add(thelaleg1)
scene.add(thelaleg2)
scene.add(thelaleg3)
scene.add(thelaleg4)
scene.add(briyaniBanner)

thela.position.set(-18,3,7)
thelaleg1.position.set(-22.5,1.5,11.5)
thelaleg2.position.set(-13.5,1.5,11.5)
thelaleg3.position.set(-22.5,1.5,2.5)
thelaleg4.position.set(-13.5,1.5,2.5)
briyaniBanner.position.set(-18, 5.5, 2)


const road_2 = myCube(10, 1,38.5,road2)
scene.add(road_2)
road_2.position.set(0,0,-1)


const bababengali = myCube(15, 10, 0, bengalibaba)
scene.add(bababengali)
bababengali.position.set(15, 5.5, -10)

const bannerBorder1 = myCube(0.5, 10, 0.5, cartlegs)
const bannerBorder2 = myCube(0.5, 10, 0.5, cartlegs)
const bannerBorder3 = myCube(0.5, 10, 0.5, cartlegs)
scene.add(bannerBorder1)
scene.add(bannerBorder2)
bannerBorder1.position.set(7.5,5.5, -10)
bannerBorder2.position.set(22.5,5.5,-10)
bannerBorder3.position.set(15,1.5,2.5)


const geometry9 = new THREE.BoxGeometry( 10, 5, 5 );
const material9 = new THREE.MeshBasicMaterial( { color: 0x228C22 } );
const bus_body = new THREE.Mesh( geometry9, material9 );
bus_body.position.x = 0
bus_body.position.z = 22
bus_body.position.y = 3.2


scene.add( bus_body );

const geometry10 = new THREE.BoxGeometry( 4, 3, 5.1 );
const material10 = new THREE.MeshBasicMaterial( { color: 0x808080 } );
const bus_window = new THREE.Mesh( geometry10, material10 );
bus_window.position.x = 3.1;
bus_window.position.y = 0.7;

bus_body.add( bus_window );

function wheels(){
    const geometry = new THREE.CylinderGeometry( 1, 1, 6, 40 );
    const material = new THREE.MeshBasicMaterial( {color: 0x1f1f1f } );
    const cylinder = new THREE.Mesh( geometry, material );
    cylinder.position.y = -2
    cylinder.rotation.x = 1.62

    return cylinder
}
const wheels1 = wheels()
const wheels2 = wheels()

wheels1.position.x = -3
wheels2.position.x = 3

bus_body.add( wheels1 );
bus_body.add( wheels2 );


bus_body.translateX.x = 5
bus_body.rotateX.x = 40


const geometry5 = new THREE.BoxGeometry( 9, 9, 9 );
const material5 = new THREE.MeshBasicMaterial( { color: 0xC4A484 } );
const tomb_Body = new THREE.Mesh( geometry5, material5 );
tomb_Body.position.x = 0
scene.add( tomb_Body );

const geometry6 = new THREE.BoxGeometry( 3.5, 4.5, 5.1 );
const material6= new THREE.MeshBasicMaterial( { color: 0x000000 } );
const tomb_door = new THREE.Mesh( geometry6, material6 );
tomb_door.position.y = -2.1
tomb_door.position.z = 2.5
tomb_Body.add( tomb_door );



const geometry7 = new THREE.SphereGeometry( 3.5,40,30 );
const material7 = new THREE.MeshBasicMaterial( { color: 0xC4A484 } );
const tomb_dome = new THREE.Mesh( geometry7, material7 );
tomb_dome.position.y = 4.5;
tomb_Body.position.x = 15.5;
tomb_Body.position.y = 4.5;


tomb_Body.add( tomb_dome );
function animate(time) {

// scene.rotation.y = time/1000

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
renderer.render(scene, camera)

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

