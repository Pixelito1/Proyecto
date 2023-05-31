const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
effect = new THREE.StereoEffect( renderer );
    effect.setSize( window.innerWidth, window.innerHeight );
var controls = new THREE.DeviceOrientationControls(camera);
let isLeftMouseDown = false;
let isRightMouseDown = false;
const maxCameraZ = 45;
const minCameraZ = 20;
document.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    isLeftMouseDown = true;
  } else if (event.button === 2) {
    isRightMouseDown = true;
  }
});
document.addEventListener("mouseup", function (event) {
  if (event.button === 0) {
    isLeftMouseDown = false;
  } else if (event.button === 2) {
    isRightMouseDown = false;
  }
});
////////////////---TOSAS LAS COSAS---//////////////////////////////////
//piso/
const geoPiso = new THREE.BoxGeometry(20, 0.1, 35);
const textPiso = new THREE.TextureLoader().load("mat/suelo.jpg");
const matPiso = new THREE.MeshBasicMaterial({ map: textPiso });
const Piso = new THREE.Mesh(geoPiso, matPiso);
scene.add(Piso);
Piso.position.y = -5;
Piso.position.z = 30;
Piso.castShadow = false;
Piso.receiveShadow = true;
//pared
const geoPared = new THREE.BoxGeometry(0.1, 10, 35);
const geoPared2 = new THREE.BoxGeometry(20, 10, 0.1);
const textPared = new THREE.TextureLoader().load("mat/pared.jpg");
const matPared = new THREE.MeshBasicMaterial({ map: textPared });
const Pared1 = new THREE.Mesh(geoPared, matPared);
scene.add(Pared1);
Pared1.position.x = 10;
Pared1.position.y = 5;
const Pared2 = new THREE.Mesh(geoPared, matPared);
scene.add(Pared2);
Pared2.position.x = -10;
Pared2.position.y = 5;
const Pared3 = new THREE.Mesh(geoPared2, matPared);
scene.add(Pared3);
Pared3.position.z = 17.5;
Pared3.position.y = 5;
const Pared4 = new THREE.Mesh(geoPared2, matPared);
scene.add(Pared4);
Pared4.position.z = -17.5;
Pared4.position.y = 5;
Piso.add(Pared1);
Piso.add(Pared2);
Piso.add(Pared3);
Piso.add(Pared4);
////////////////////////////////
const geometry = new THREE.BoxGeometry(0.1, 3.8, 3.8);
const textPint1 = new THREE.TextureLoader().load("mat/pintu1.jpg");
const material = new THREE.MeshBasicMaterial({ map: textPint1 });
const Pint = new THREE.Mesh(geometry, material);
scene.add(Pint);
Pint.position.x = -9.9;
Pint.position.z = 38;
const textPint2 = new THREE.TextureLoader().load("mat/pintu2.jpg");
const material2 = new THREE.MeshBasicMaterial({ map: textPint2 });
const Pint2 = new THREE.Mesh(geometry, material2);
scene.add(Pint2);
Pint2.position.x = -9.9;
Pint2.position.z = 22;
const textPint3 = new THREE.TextureLoader().load("mat/pintu3.jpg");
const material3 = new THREE.MeshBasicMaterial({ map: textPint3 });
const Pint3 = new THREE.Mesh(geometry, material3);
scene.add(Pint3);
Pint3.position.x = 9.9;
Pint3.position.z = 38;
const textPint4 = new THREE.TextureLoader().load("mat/pintu4.jpg");
const material4 = new THREE.MeshBasicMaterial({ map: textPint4 });
const Pint4 = new THREE.Mesh(geometry, material4);
scene.add(Pint4);
Pint4.position.x = 9.9;
Pint4.position.z = 22;
////////////////////////////////////////////////
const textro1 = new THREE.TextureLoader().load("mat/1wood.jpg");
const matro1 = new THREE.MeshBasicMaterial({ map: textro1 });
const geoTro1 = new THREE.BoxGeometry( 0.5, 0.5, 4 );
const Tro1 = new THREE.Mesh( geoTro1, matro1 );
scene.add( Tro1 );
Pint.add(Tro1);
Tro1.position.y=-2;

const geoTro2 = new THREE.BoxGeometry( 0.5, 2.3, 0.5 );
const Tro2 = new THREE.Mesh( geoTro2, matro1 );
scene.add( Tro2 );
Tro1.add(Tro2);
Tro2.position.y=-1.4;

const geoTro3 = new THREE.BoxGeometry( 0.5, 0.5, 3 );
const Tro3 = new THREE.Mesh( geoTro3, matro1 );
scene.add(Tro3);
Tro2.add(Tro3);
Tro3.position.y=-1.4;
////////////
const geoTroo1 = new THREE.BoxGeometry( 0.5, 0.5, 4 );
const Troo1 = new THREE.Mesh( geoTroo1, matro1 );
scene.add( Troo1 );
Pint2.add(Troo1);
Troo1.position.y=-2;

const geoTroo2 = new THREE.BoxGeometry( 0.5, 2.3, 0.5 );
const Troo2 = new THREE.Mesh( geoTroo2, matro1 );
scene.add( Troo2 );
Troo1.add(Troo2);
Troo2.position.y=-1.4;

const geoTroo3 = new THREE.BoxGeometry( 0.5, 0.5, 3 );
const Troo3 = new THREE.Mesh( geoTroo3, matro1 );
scene.add(Troo3);
Troo2.add(Troo3);
Troo3.position.y=-1.4;

////////////
const geoTrooo1 = new THREE.BoxGeometry( 0.5, 0.5, 4 );
const Trooo1 = new THREE.Mesh( geoTrooo1, matro1 );
scene.add( Trooo1 );
Pint3.add(Trooo1);
Trooo1.position.y=-2;

const geoTrooo2 = new THREE.BoxGeometry( 0.5, 2.3, 0.5 );
const Trooo2 = new THREE.Mesh( geoTrooo2, matro1 );
scene.add( Trooo2 );
Trooo1.add(Trooo2);
Trooo2.position.y=-1.4;

const geoTrooo3 = new THREE.BoxGeometry( 0.5, 0.5, 3 );
const Trooo3 = new THREE.Mesh( geoTrooo3, matro1 );
scene.add(Trooo3);
Trooo2.add(Trooo3);
Trooo3.position.y=-1.4;

////////////
const geoTroooo1 = new THREE.BoxGeometry( 0.5, 0.5, 4 );
const Troooo1 = new THREE.Mesh( geoTroooo1, matro1 );
scene.add( Troooo1 );
Pint4.add(Troooo1);
Troooo1.position.y=-2;

const geoTroooo2 = new THREE.BoxGeometry( 0.5, 2.3, 0.5 );
const Troooo2 = new THREE.Mesh( geoTroooo2, matro1 );
scene.add( Troooo2 );
Troooo1.add(Troooo2);
Troooo2.position.y=-1.4;

const geoTroooo3 = new THREE.BoxGeometry( 0.5, 0.5, 3 );
const Troooo3 = new THREE.Mesh( geoTroooo3, matro1 );
scene.add(Troooo3);
Troooo2.add(Troooo3);
Troooo3.position.y=-1.4;

//////////////////////////////
camera.position.z = 35;
const raycaster = new THREE.Raycaster();
function onMouseMove() {
  const cameraDirection = new THREE.Vector3();
  camera.getWorldDirection(cameraDirection);
  raycaster.set(camera.position, cameraDirection);
  const intersectsPint = raycaster.intersectObject(Pint);
  if (intersectsPint.length > 0) {
    Pint.position.x = -9;
    Pint.position.y = 2.2;
    Pint.scale.z = 1.5;
    Pint.scale.y = 1.5;
  } else {
    Pint.position.x = -9.9;
    Pint.scale.set(1, 1, 1);
    Pint.position.y = 0;
  }
  const intersectsPint2 = raycaster.intersectObject(Pint2);
  if (intersectsPint2.length > 0) {
    Pint2.position.x = -9;
    Pint2.scale.z = 1.5;
    Pint2.scale.y = 1.5;
    Pint2.position.y = 2.2;
  } else {
    Pint2.position.x = -9.9;
    Pint2.scale.set(1, 1, 1);
    Pint2.position.y = 0;
  }
  const intersectsPint3 = raycaster.intersectObject(Pint3);
  if (intersectsPint3.length > 0) {
    Pint3.position.x = 9;
    Pint3.scale.z = 1.5;
    Pint3.scale.y = 1.5;
    Pint3.position.y = 2.2;
  } else {
    Pint3.position.x = 9.9;
    Pint3.scale.set(1, 1, 1);
    Pint3.position.y = 0;
  }
  const intersectsPint4 = raycaster.intersectObject(Pint4);
  if (intersectsPint4.length > 0) {
    Pint4.position.x = 9;
    Pint4.scale.z = 1.5;
    Pint4.scale.y = 1.5;
    Pint4.position.y = 2.2;
  } else {
    Pint4.position.x = 9.9;
    Pint4.scale.set(1, 1, 1);
    Pint4.position.y = 0;
  }
}
document.addEventListener("mousemove", onMouseMove);
function animate() {
  requestAnimationFrame(animate);
  if (isLeftMouseDown) {
    camera.position.z += 0.5; 
  }
  if (isRightMouseDown) {
    camera.position.z -= 0.5; 
  }
  if (camera.position.z > maxCameraZ) {
    camera.position.z = maxCameraZ;
  }
  if (camera.position.z < minCameraZ) {
    camera.position.z = minCameraZ;
  }
  controls.update();
  effect.render(scene, camera);
}
animate();
