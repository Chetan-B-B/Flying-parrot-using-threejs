import { Canvas } from "@react-three/fiber";
import Bird from "./Bird";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import { Leva, useControls } from "leva";
const App = () => {
  const controls = useControls("cutueeParrot", {
    positionX: {
      value: 10,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 0.2,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: -10,
      min: -10,
      max: 10,
    },
    rotationX: {
      value: -5.6,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: -0.3,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: -6.2,
      min: -10,
      max: 10,
    },
    scale: {
      value: 0.01,
      min: 0.01,
      max: 10,
    },
  });
  return (
    <div className=" h-screen w-screen flex items-center justify-center bg-sky-400">
      <Leva />
      <Canvas className=" ">
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={1} />
          <Bird
            position={[
              controls.positionX,
              controls.positionY,
              controls.positionZ,
            ]}
            rotation={[
              controls.rotationX,
              controls.rotationY,
              controls.rotationZ,
            ]}
            // scale={controls.scale}
            scale={0.05}
          />
          <directionalLight position={[10, 10, 10]} />
          <PerspectiveCamera makeDefault position={[10, 1, 20]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
