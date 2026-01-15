// VantaBackground.jsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three"; // required by Vanta
import TOPOLOGY from "vanta/dist/vanta.topology.min"; // adjust path if installed locally

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x1313ea,       // optional: change lines color
          backgroundColor:0x20e1a, // optional: background color
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full -z-10" />;
};

export default VantaBackground;
