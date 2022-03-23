import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraShake, OrbitControls } from '@react-three/drei';
import { KernelSize } from 'postprocessing';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { TextSection } from './Text';
import { Wrapper } from './Wrapper';
import { Rig } from './Rig';

import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

export const App = () => {
  return (
    <Wrapper>
      <TextSection />
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <Suspense fallback={null}>
          <Rig>
            <Sphere visible args={[1, 100, 200]}>
              <MeshDistortMaterial
                color="#8352FD"
                attach="material"
                distort={0.7}
                speed={1.5}
                roughness={0}
              />
            </Sphere>
          </Rig>
          <EffectComposer multisampling={8}>
            <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
            <Bloom
              kernelSize={KernelSize.HUGE}
              luminanceThreshold={0}
              luminanceSmoothing={0}
              intensity={0.5}
            />
          </EffectComposer>
        </Suspense>
        <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
      </Canvas>
      <div>
        <a href="https://github.com/mrwbdv" target="_blank" rel="noopener noreferrer">
          <AiFillGithub color="white" style={{ margin: '10px', height: '30px', width: '30px' }} />
        </a>
        <a href="https://www.instagram.com/mrwbdv/" target="_blank" rel="noopener noreferrer">
          <AiOutlineInstagram
            color="white"
            style={{ margin: '10px', height: '30px', width: '30px' }}
          />
        </a>
        <a href="https://t.me/mrwbdv" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane
            color="white"
            style={{ margin: '10px', height: '30px', width: '30px' }}
          />
        </a>
      </div>
    </Wrapper>
  );
};
