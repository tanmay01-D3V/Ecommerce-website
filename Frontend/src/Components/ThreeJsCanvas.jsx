import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const shoeModelURL = new URL('../assets/running shoe 3d model.glb', import.meta.url).href;

const ThreeJsCanvas = ({ scene }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene3D = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    const containerWidth = mountRef.current.clientWidth;
    const containerHeight = mountRef.current.clientHeight;
    const canvasSize = Math.min(containerWidth, containerHeight, 600);
    renderer.setSize(canvasSize, canvasSize);
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene3D.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 5, 3);
    scene3D.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-2, -1, 5);
    scene3D.add(pointLight);

    let currentModel = null;
    let fallbackMesh = null;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const loader = new GLTFLoader();

    const onPointerDown = (event) => {
      isDragging = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onPointerMove = (event) => {
      if (!isDragging || !currentModel) return;
      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      currentModel.rotation.y += deltaMove.x * 0.01;
      currentModel.rotation.x += deltaMove.y * 0.01;
      previousMousePosition = { x: event.clientX, y: event.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    if (scene === 'shoe') {
      loader.load(
        shoeModelURL,
        (gltf) => {
          currentModel = gltf.scene;
          currentModel.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              if (!child.material) return;
              child.material.side = THREE.DoubleSide;
            }
          });
          currentModel.scale.set(3.5, 3.5, 3.5);
          currentModel.position.set(0, 0, 0);
          currentModel.rotation.set(-0.2, Math.PI * 0.55, 0);
          scene3D.add(currentModel);
        },
        undefined,
        (error) => {
          console.error('Failed to load shoe model:', error);
        }
      );
    } else {
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshPhongMaterial({
        color: 0x00ff88,
        shininess: 100,
        transparent: true,
        opacity: 0.8,
      });
      fallbackMesh = new THREE.Mesh(geometry, material);
      scene3D.add(fallbackMesh);
    }

    camera.position.set(0, 0, 4.8);

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);
    renderer.domElement.addEventListener('pointerleave', onPointerUp);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (currentModel) {
        currentModel.rotation.y += 0.002;
      }
      if (fallbackMesh) {
        fallbackMesh.rotation.x += 0.008;
        fallbackMesh.rotation.y += 0.01;
      }
      renderer.render(scene3D, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      renderer.domElement.removeEventListener('pointerleave', onPointerUp);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [scene]);

  return <div ref={mountRef} className="threejs-canvas-mount w-full h-full max-w-[600px] max-h-[600px]" />;
};

export default ThreeJsCanvas;