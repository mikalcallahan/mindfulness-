import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  afterRender,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import * as THREE from 'three';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent {
  constructor() {
    afterNextRender(() => {
      this.initThree();
    });
  }
  @ViewChild('threeContainer') threeContainer!: ElementRef;

  initThree(): void {
    const backgroundColor = 0xe5e7e6;
    const objectColor = 0x141301;

    const geometry: THREE.BoxGeometry = new THREE.BoxGeometry();
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
      color: backgroundColor,
      wireframe: true,
    });

    const cube: THREE.Mesh = new THREE.Mesh(geometry, material);

    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 2 / (window.innerHeight / 2),
      0.1,
      1000,
    );

    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    };
    const scene: THREE.Scene = new THREE.Scene();
    scene.background = new THREE.Color(objectColor);
    scene.add(cube);

    const canvas: HTMLCanvasElement =
      this.threeContainer.nativeElement.appendChild(renderer.domElement);

    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;

    camera.position.z = 2;

    window.addEventListener('resize', onWindowResize, false);

    new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }
}
