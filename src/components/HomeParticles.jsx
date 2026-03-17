import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HomeParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "#fff9e6",
        },
      },
      fpsLimit: 80,
      detectRetina: true,
      particles: {
        color: {
          value: "#f0c53a",
        },
        links: {
          enable: true,
          color: "#f0c53a",
          distance: 150,
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.5,
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 5, max: 10 },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="home-particles"
      className="w-100 h-100"
      options={options}
    />
  );
}