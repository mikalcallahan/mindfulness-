import {
  Component,
  ElementRef,
  ViewChild,
  afterNextRender,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent {

  private platformId = inject(PLATFORM_ID);

  @ViewChild('threeContainer', { static: true })
  threeContainer!: ElementRef<HTMLDivElement>;

  constructor() {
    afterNextRender(async () => {
      if (!isPlatformBrowser(this.platformId)) return;

      await this.initThree();
    });
  }

  async initThree() {
    const THREE = await import('three');
    const { OrbitControls } = await import(
      'three/examples/jsm/controls/OrbitControls.js'
    );

    const objectColor = 0xe5e7e6;
    const backgroundColor = 0x151515;

    const container = this.threeContainer.nativeElement;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: objectColor,
      wireframe: true,
    });

    const cube = new THREE.Mesh(geometry, material);

    const isMobile = window.innerWidth <= 500;
    const width = isMobile ? window.innerWidth : window.innerWidth / 2;
    const height = window.innerHeight / 2;
    const fov = isMobile ? 125 : 75;

    const camera = new THREE.PerspectiveCamera(
      fov,
      width / height,
      0.1,
      1000,
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);
    scene.add(cube);

    container.appendChild(renderer.domElement);

    camera.position.z = 2;

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
