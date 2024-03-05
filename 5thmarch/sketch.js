import * as THREE from 'three';

//1. scene
const scene = new THREE.Scene();

//2. camera
//Parameters for the camera are: Field of view, aspect ratio, near and far clipping planes
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);

//3. renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xFF6347 });

const cube = new THREE.Mesh(geometry, material);

scene.add (cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);
}

animate();
const ambientLight = new THREE.ambientLight (0xFF6347, 1);
scene.add(ambientLight);

const directionalLight
