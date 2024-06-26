import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ screenWidth }) => {
  const { scene, animations } = useGLTF("./desktop_pc/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      actions["Panels"].play();
    }
  }, [actions]);

  let scale, position, rotation;
  if (screenWidth <= 640) {
    scale = 0.020;
    position = [0, -2.2, 0.1];
    rotation = [-0.01, 1.3, -0.1];
  } else if (screenWidth <= 1024) {
    scale = 0.025;
    position = [0.2, -1.5, 0.2];
    rotation = [-0.01, 1.3, -0.1];
  } else {
    scale = 0.027;
    position = [0.5, -3, 0.4];
    rotation = [-0.01, 1.3, -0.1];
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-2, 5, 1]}
        angle={1}
        penumbra={1}
        intensity={300}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Computers screenWidth={screenWidth} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
