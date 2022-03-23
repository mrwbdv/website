import * as THREE from 'three';
import { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';

export const Rig = ({ children }) => {
  const ref = useRef();
  const vec = new THREE.Vector3();
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.lerp(vec.set(mouse.x * 4, 0, 3.5), 0.05);
    ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.7, 0), 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (-mouse.x * Math.PI) / 10,
      0.1,
    );
  });
  return <group ref={ref}>{children}</group>;
};
