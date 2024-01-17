import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Leva } from "leva";
import { Loader } from "@react-three/drei";
function App() {
  return (
    <>
      <Loader />
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
        <Leva hidden={true} />
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
