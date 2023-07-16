import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// import * as THREE from 'three/src/Three';

@Component({
  selector: 'three',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  // templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent {
  ngOnInit(): void {
    const scene: Scene = new Scene();
    scene.background = new Color(0x553224);

    const camera: PerspectiveCamera = new PerspectiveCamera(
      75,
      window.innerWidth / 2 / (window.innerHeight / 2),
      0.1,
      1000,
    );

    const renderer: WebGLRenderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    const canvas: HTMLCanvasElement = document.body.appendChild(
      renderer.domElement,
    );
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;

    new OrbitControls(camera, renderer.domElement);

    const geometry: BoxGeometry = new BoxGeometry();
    const material: MeshBasicMaterial = new MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });

    const cube: Mesh = new Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 2;

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    }

    window.addEventListener('resize', onWindowResize, false);

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }
}
