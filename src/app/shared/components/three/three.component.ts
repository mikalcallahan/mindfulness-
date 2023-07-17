import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// import * as THREE from 'three/src/Three';

@Component({
  selector: 'three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements AfterViewInit {
  @ViewChild('threeContainer') threeContainer!: ElementRef;
  ngAfterViewInit(): void {
    console.log('threeContainer', this.threeContainer)
    const scene: Scene = new Scene();
    scene.background = new Color(objectColor);
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

const backgroundColor = 0xe5e7e6;
const objectColor = 0x141301;

const geometry: BoxGeometry = new BoxGeometry();
const material: MeshBasicMaterial = new MeshBasicMaterial({
  color: backgroundColor,
  wireframe: true,
});
const cube: Mesh = new Mesh(geometry, material);

const camera: PerspectiveCamera = new PerspectiveCamera(
  75,
  window.innerWidth / 2 / (window.innerHeight / 2),
  0.1,
  1000
);

const renderer: WebGLRenderer = new WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
};
