

import * as THREE from './three.module.js';
import {OrbitControls} from './OrbitControls.js';

//Creating the Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

const grass = new THREE.TextureLoader().load('./Assets/Textures/Grass.jfif');
const rock = new THREE.TextureLoader().load('./Assets/Textures/Floor.jpg');
const rock2 = new THREE.TextureLoader().load('./Assets/Textures/Wall.jpg');
const furnace = new THREE.TextureLoader().load('./Assets/Textures/Smith.jfif');
const saw = new THREE.TextureLoader().load('./Assets/Textures/SawBlade.jfif');


function lighting() {
    const light = new THREE.HemisphereLight(0x780a44, 0x1c3020, 1);
    scene.add(light);
  
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 200, 40);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;
    scene.add(spotLight);
  }
  
  lighting();

//Geometry
const plaingeometry = new THREE.BoxGeometry( 200, 0.1, 200 );
const plainmaterial = new THREE.MeshBasicMaterial( { map: grass } );
const plain = new THREE.Mesh( plaingeometry, plainmaterial );
scene.add( plain );



//WarMill
const basegeometry = new THREE.BoxGeometry( 80, 40, 80 );
const basematerial = new THREE.MeshBasicMaterial( {map:rock} );
const base = new THREE.Mesh( basegeometry, basematerial );
base.scale.set(0.6,0.6,0.6);

base.position.x=-30;
base.position.y=12;
base.position.z=20;
scene.add( base );

const towergeometry = new THREE.CylinderGeometry( 10, 10, 35, 32 );
const towermaterial = new THREE.MeshBasicMaterial( {map:rock2} );
const tower = new THREE.Mesh( towergeometry, towermaterial );
tower.position.x=-5;
tower.position.y=18;
tower.position.z=0;
scene.add( tower );

const Theadgeometry = new THREE.BoxGeometry( 40, 20, 40 );
const Theadmaterial = new THREE.MeshBasicMaterial( {map:rock} );
const Thead = new THREE.Mesh( Theadgeometry, Theadmaterial );
Thead.scale.set(0.6,0.6,0.6);

Thead.position.x=-5;
Thead.position.y=40;
Thead.position.z=0.5;
scene.add( Thead );

const tower2geometry = new THREE.CylinderGeometry( 10, 10, 45, 32 );
const tower2material = new THREE.MeshBasicMaterial( {map:rock2} );
const tower2 = new THREE.Mesh( tower2geometry, tower2material );
tower2.position.x=-55;
tower2.position.y=23;
tower2.position.z=0;
scene.add( tower2 );

const thead2geometry = new THREE.IcosahedronGeometry(30,0)
const thead2material = new THREE.MeshBasicMaterial( {map:rock} );
const thead2 = new THREE.Mesh( thead2geometry, thead2material );
thead2.scale.set(0.7,0.3,0.7);
thead2.position.x=-55;
thead2.position.y=45;
thead2.position.z=0;
scene.add( thead2 );


const forgegeometry = new THREE.SphereGeometry( 15, 32, 16 );
const forgematerial = new THREE.MeshBasicMaterial( { map: furnace } );
const forge = new THREE.Mesh( forgegeometry, forgematerial );
forge.scale.set(0.9,0.7,0.9);

forge.position.x=-32;
forge.position.y=0;
forge.position.z=45;
scene.add( forge );


//Saw Blade

const bladegeometry = new THREE.CircleGeometry( 5, 32 );
const bladematerial = new THREE.MeshBasicMaterial( { map: saw } );

const blade= new THREE.Mesh( bladegeometry, bladematerial );
blade.scale.set(3,3,3);
blade.position.x=-55;
blade.position.y=15;
blade.position.z=25;
scene.add( blade );

//Burrow
const base2geometry = new THREE.SphereGeometry( 20, 32, 21 );
const base2material = new THREE.MeshBasicMaterial( { color:0xBDB4B3 } );

const spikegeometry = new THREE.ConeGeometry( 10, 20, 32 );
const spikematerial = new THREE.MeshBasicMaterial( {color: 0xB87821} );



const BB = new THREE.Mesh ( base2geometry, base2material );
BB.scale.set(1,1,1);
BB.position.x=40;
BB.position.y=5;
BB.position.z=60;
scene.add(BB);

const spike= new THREE.Mesh(spikegeometry ,spikematerial);
spike.scale.set(1,1,1);
spike.rotation.x=175;
spike.rotation.z=-175;
spike.position.x=20;
spike.position.y=10;
spike.position.z=40;
scene.add(spike);


const spike2= new THREE.Mesh(spikegeometry ,spikematerial);
spike2.scale.set(1,1,1);
spike2.rotation.x=170;
spike2.rotation.y=60;
spike2.rotation.z=200;
spike2.position.x=17;
spike2.position.y=10;
spike2.position.z=75;
scene.add(spike2);

const spike3= new THREE.Mesh(spikegeometry ,spikematerial);
spike3.scale.set(1,1,1);
spike3.rotation.x=170;
spike3.rotation.y=60;
spike3.rotation.z=240;
spike3.position.x=65;
spike3.position.y=10;
spike3.position.z=50;
scene.add(spike3);


const spike4= new THREE.Mesh(spikegeometry ,spikematerial);
spike4.scale.set(1,1,1);
spike4.rotation.x=120;
spike4.rotation.y=90;
spike4.rotation.z=220;
spike4.position.x=55;
spike4.position.y=10;
spike4.position.z=80;
scene.add(spike4);






//Forest

//Tree
const treegeometry = new THREE.CylinderGeometry( 8, 8, 60, 32 );
const treematerial = new THREE.MeshBasicMaterial( {color: 0xB25906} );

const tree2geometry = new THREE.CylinderGeometry( 8, 8, 40, 32 );
const tree2material = new THREE.MeshBasicMaterial( {color: 0xB25906} );

const leavesgeometry = new THREE.ConeGeometry( 20, 20, 32 );
const leavesmaterial = new THREE.MeshBasicMaterial( {color: 0x1E7605} );




const tree = new THREE.Mesh( treegeometry, treematerial );
tree.scale.set(1,1,1);
tree.position.x=20;
tree.position.y=30;
tree.position.z=-60;
scene.add( tree );

const leaves = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves.position.x=20;
leaves.position.y=40;
leaves.position.z=-60;
scene.add( leaves );
const leaves2 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves2.position.x=20;
leaves2.position.y=60;
leaves2.position.z=-60;
scene.add( leaves2 );



const tree2 = new THREE.Mesh( treegeometry, treematerial );
tree2.position.x=60;
tree2.position.y=30;
tree2.position.z=-70;
scene.add( tree2 );
const leaves3 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves3.position.x=60;
leaves3.position.y=40;
leaves3.position.z=-70;
scene.add( leaves3 );
const leaves4 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves4.position.x=60;
leaves4.position.y=60;
leaves4.position.z=-70;
scene.add( leaves4 );



const tree3 = new THREE.Mesh(tree2geometry, tree2material );
tree3.position.x=50;
tree3.position.y=20;
tree3.position.z=-20;
scene.add( tree3 );
const leaves5 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves5.position.x=50;
leaves5.position.y=30;
leaves5.position.z=-20;
scene.add( leaves5 );
const leaves6 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves6.position.x=50;
leaves6.position.y=45;
leaves6.position.z=-20;
scene.add( leaves6 );


const tree4 = new THREE.Mesh(tree2geometry, tree2material );
tree4.position.x=-60;
tree4.position.y=20;
tree4.position.z=-50;
scene.add( tree4 );
const leaves7 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves7.position.x=-60;
leaves7.position.y=30;
leaves7.position.z=-50;
scene.add( leaves7 );

const leaves8 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves8.position.x=-60;
leaves8.position.y=45;
leaves8.position.z=-50;
scene.add( leaves8 );


const tree5 = new THREE.Mesh(treegeometry, treematerial );
tree5.position.x=-20;
tree5.position.y=30;
tree5.position.z=-30;
scene.add( tree5 );
const leaves9 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves9.position.x=-20;
leaves9.position.y=50;
leaves9.position.z=-30;
scene.add( leaves9 );
const leaves10 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves10.position.x=-20;
leaves10.position.y=65;
leaves10.position.z=-30;
scene.add( leaves10 );

const tree6 = new THREE.Mesh(treegeometry, treematerial );
tree6.position.x=-40;
tree6.position.y=30;
tree6.position.z=-80;
scene.add( tree6 );
const leaves11 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves11.position.x=-40;
leaves11.position.y=50;
leaves11.position.z=-80;
scene.add( leaves11 );
const leaves12 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves12.position.x=-40;
leaves12.position.y=65;
leaves12.position.z=-80;
scene.add( leaves12 );


const tree7 = new THREE.Mesh(tree2geometry, tree2material );
tree7.position.x=80;
tree7.position.y=20;
tree7.position.z=15;
scene.add( tree7 );

const leaves13 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves13.position.x=80;
leaves13.position.y=40;
leaves13.position.z=15;
scene.add( leaves13 );
const leaves14 = new THREE.Mesh( leavesgeometry, leavesmaterial );
leaves14.position.x=80;
leaves14.position.y=55;
leaves14.position.z=15;
scene.add( leaves14 );



//Orc Peon
const headgeometry = new THREE.SphereGeometry( 15, 32, 16 );
const headmaterial = new THREE.MeshBasicMaterial( { color:0x3CD511 } );

const bodygeometry = new THREE.ConeGeometry( 5, 20, 32 );
const bodymaterial = new THREE.MeshBasicMaterial( {color: 0xCB200F} );


const head = new THREE.Mesh( headgeometry, headmaterial );
head.scale.set(0.3,0.3,0.3);
head.position.x=20;
head.position.y=20;
scene.add(  head );

const body = new THREE.Mesh(bodygeometry,bodymaterial);
body.scale.set(1,1,1);
body.position.x=20;
body.position.y=10;
scene.add(  body );

const head2 = new THREE.Mesh( headgeometry, headmaterial );
head2.scale.set(0.3,0.3,0.3);
head2.position.x=-80;
head2.position.y=20;
head2.position.z=10;
scene.add(  head2 );

const body2 = new THREE.Mesh(bodygeometry,bodymaterial);
body2.scale.set(1,1,1);
body2.position.x=-80;
body2.position.y=10;
body2.position.z=10;
scene.add(  body2 );

const head3 = new THREE.Mesh( headgeometry, headmaterial );
head3.scale.set(0.3,0.3,0.3);
head3.position.x=65;
head3.position.y=20;
head3.position.z=20;
scene.add(  head3 );

const body3 = new THREE.Mesh(bodygeometry,bodymaterial);
body3.scale.set(1,1,1);
body3.position.x=65;
body3.position.y=10;
body3.position.z=20;
scene.add(  body3 );

const head4 = new THREE.Mesh( headgeometry, headmaterial );
head4.scale.set(0.3,0.3,0.3);
head4.position.x=-65;
head4.position.y=20;
head4.position.z=60;
scene.add(  head4 );

const body4 = new THREE.Mesh(bodygeometry,bodymaterial);
body4.scale.set(1,1,1);
body4.position.x=-65;
body4.position.y=10;
body4.position.z=60;
scene.add(  body4 );



//Camera
camera.position.x= -20;
camera.position.y = 60;
camera.position.z = 100;

//animate
function animate() {
    controls.update();
	requestAnimationFrame( animate );


  forge.rotation.x -=0.01;
  blade.rotation.z +=0.1;
    


	renderer.render( scene, camera );
}
animate();