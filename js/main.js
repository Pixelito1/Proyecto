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
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//controls = new THREE.OrbitControls(camera, renderer.domElement);
var controls = new THREE.DeviceOrientationControls(camera);

// Agregar eventos de clic izquierdo y derecho
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

///////////////////----Luces---////////////////////////////////////////
const light = new THREE.PointLight(0xffffff, 1, 60);
light.position.set(0, 10, 30);
light.castShadow = true;
scene.add(light);

light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 100; // default

////////////////---TOSAS LAS COSAS---//////////////////////////////////
//piso/
const geoPiso = new THREE.BoxGeometry(20, 0.1, 35);
const textPiso = new THREE.TextureLoader().load("mat/suelo.jpg");
const matPiso = new THREE.MeshPhongMaterial({ map: textPiso });
const Piso = new THREE.Mesh(geoPiso, matPiso);
scene.add(Piso);
Piso.position.y = -5;
Piso.position.z = 30;
Piso.castShadow = false;
Piso.receiveShadow = true;

//pared
const geoPared = new THREE.BoxGeometry(0.1, 10, 35);
const textPared = new THREE.TextureLoader().load("mat/pared.jpg");
const matPared = new THREE.MeshPhongMaterial({ map: textPared });

const Pared1 = new THREE.Mesh(geoPared, matPared);
scene.add(Pared1);
Pared1.position.x = 10;
Pared1.position.y = 5;
Pared1.castShadow = false;
Pared1.receiveShadow = true;

const Pared2 = new THREE.Mesh(geoPared, matPared);
scene.add(Pared2);
Pared2.position.x = -10;
Pared2.position.y = 5;
Pared2.castShadow = false;
Pared2.receiveShadow = true;

Piso.add(Pared1);
Piso.add(Pared2);

////////////////////////////////
class Cuadro {
  constructor(position, rotation) {
    this.position = position;
    this.rotation = rotation;
    this.loadCuadro();
  }

  loadCuadro() {
    const textCuadro = new THREE.TextureLoader().load("mat/1wood.jpg");
    const matCuadro = new THREE.MeshPhongMaterial({ map: textCuadro });
    const loader = new THREE.FBXLoader();
    loader.load("mat/cuadro.fbx", (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = matCuadro;
        }
      });

      object.scale.set(0.0285, 0.0285, 0.0285);
      object.position.copy(this.position);
      object.rotation.y = this.rotation;
      object.castShadow = true;
      object.receiveShadow = false;

      scene.add(object);
    });
  }
}

// Crear instancias de los cuadros en diferentes posiciones y rotaciones
const cuadro1 = new Cuadro(new THREE.Vector3(-9.9, 0, 38), 1.57);
const cuadro2 = new Cuadro(new THREE.Vector3(-9.9, 0, 22), 1.57);
const cuadro3 = new Cuadro(new THREE.Vector3(9.9, 0, 38), -1.57);
const cuadro4 = new Cuadro(new THREE.Vector3(9.9, 0, 22), -1.57);

const geometryPint = new THREE.BoxGeometry(0.1, 3.8, 3.8);
const materialPint = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const Pintura = new THREE.Mesh(geometryPint, materialPint);
scene.add(Pintura);
Pintura.position.x = -9.9;
Pintura.position.y = 0.2;
Pintura.position.z = 38;

////////////////////////////////////////////////
camera.position.z = 100;
const helper = new THREE.CameraHelper(light.shadow.camera);
scene.add(helper);

// Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

document.addEventListener("mousemove", onMouseMove);

function onMouseMove(event) {
  // Normalizar las coordenadas del mouse
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Actualizar el rayo con la posición y dirección de la cámara
  raycaster.setFromCamera(mouse, camera);

  // Verificar la intersección entre el rayo y el objeto "Pintura"
  const intersects = raycaster.intersectObject(Pintura);

  if (intersects.length > 0) {
    // Escalar el objeto en x y en y
    Pintura.position.x = -9;
    Pintura.scale.z = 1.3;
    Pintura.scale.y = 1.3;
  } else {
    // Restablecer la posición y escala del objeto
    Pintura.position.x = -9.9;
    Pintura.scale.set(1, 1, 1);
  }
}

function animate() {
  requestAnimationFrame(animate);
  if (isLeftMouseDown) {
    camera.position.z += 0.1; // Ajusta la velocidad del movimiento según sea necesario
  }

  if (isRightMouseDown) {
    camera.position.z -= 0.1; // Ajusta la velocidad del movimiento según sea necesario
  }

  if (camera.position.z > maxCameraZ) {
    camera.position.z = maxCameraZ;
  }

  if (camera.position.z < minCameraZ) {
    camera.position.z = minCameraZ;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();
