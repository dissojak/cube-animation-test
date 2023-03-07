import * as THREE from 'https://unpkg.com/three/build/three.module.js';

			const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry( 1, 1, 1 );
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			function animate() {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			}

			animate();

            const src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"

            {
                "imports": {
                  "three": "https://unpkg.com/three@<version>/build/three.module.js",
                  "three/addons/": "https://unpkg.com/three@<version>/examples/jsm/"
                }
              }
            </script>
            
            <script type="module">
            
              import * as THREE from 'three';
              import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
            
              const controls = new OrbitControls( camera, renderer.domElement );
    
              if ( WebGL.isWebGLAvailable() ) {
    
    // Initiate function or other initializations here
    animate();
    
    } else {
    
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById( 'container' ).appendChild( warning );
    