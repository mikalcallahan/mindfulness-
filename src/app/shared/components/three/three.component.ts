import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
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
    const objectColor = 0xe5e7e6;
    const backgroundColor = black;

    const geometry: THREE.BoxGeometry = new THREE.BoxGeometry();
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
      color: objectColor,
      wireframe: true,
    });

    const cube: THREE.Mesh = new THREE.Mesh(geometry, material);

    const isMobile = window.innerWidth <= 500;

    const width = isMobile ? window.innerWidth : window.innerWidth / 2;

    const fov = isMobile ? 125 : 75;

    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      fov,
      window.innerWidth / 2 / (window.innerHeight / 2),
      0.1,
      1000,
    );

    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
    renderer.setSize(width, window.innerHeight / 2);

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.fov = fov;
      camera.updateProjectionMatrix();
      renderer.setSize(width, window.innerHeight * 0.5);
    };
    const scene: THREE.Scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);
    scene.add(cube);

    const canvas: HTMLCanvasElement =
      this.threeContainer.nativeElement.appendChild(renderer.domElement);

    canvas.width = width;
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

const black = 0x151515;
