import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/loaders/GLTFLoader.js';

//3JS
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: false}); 
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();

let model = null;
loader.load( 'mechanical_keyboard_-_aesthetic.glb', function ( gltf ) {
model = gltf.scene;
model.scale.set(1.5, 1.5, 1.5);
  scene.add( model );
}, undefined, function ( error ) {
  console.error( error );
} );
const color = 0xFFFFFF;
const intensity = 5;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

camera.position.z = 5;

function animate(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01 
    
    if(model){
        model.rotation.x = 0.85 ;
        //model.rotation.y = 0.01;
        //model.rotation. += 0.01;
       
    }
    
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
//"Mechanical Keyboard - Aesthetic" (https://skfb.ly/o9SRJ) by M.Reslan is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).