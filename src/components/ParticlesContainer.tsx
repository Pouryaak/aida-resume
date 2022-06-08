import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particleStyle = {
  position: "absolute",
  width: "100%",
  height: " 100vh !important",
  top: 0,
};

const ParticlesContainer = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    /* @ts-ignore */
    <Particles
      id="tsparticles"
      init={particlesInit}
      /* @ts-ignore */
      style={particleStyle}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            /* @ts-ignore */
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              /* @ts-ignore */
              easing: "ease-out-quad",
              factor: 1,
              maxSpeed: 20,
              speed: 0.5,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 400,
              duration: 2,
              mix: false,
              opacity: 0.8,
              size: 40,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              links: {
                blink: false,
                consent: false,
                opacity: 1,
              },
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
            push: {
              default: true,
              groups: [],
              quantity: 1,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 0.5,
              maxSpeed: 20,
              /* @ts-ignore */
              easing: "ease-out-quad",
              /* @ts-ignore */
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 0.5,
                maxSpeed: 20,
                easing: "ease-out-quad",
                selectors: [],
              },
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            trail: {
              delay: 1,
              pauseOnStop: false,
              quantity: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            angle: {
              offset: 0,
              value: 90,
            },
            attract: {
              distance: 200,
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            center: {
              x: 50,
              y: 50,
              radius: 0,
            },
            decay: 0,
            distance: {},
            direction: "none",
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              inverse: false,
              maxSpeed: 50,
            },
            path: {
              clamp: true,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
              options: {},
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 2,
            spin: {
              acceleration: 0,
              enable: false,
            },
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;

// options={{
//         background: {
//           color: {
//             value: "#342054",
//           },
//         },
//         fpsLimit: 60,
//         interactivity: {
//           events: {
//             onClick: {
//               enable: true,
//               mode: "push",
//             },
//             /* @ts-ignore */
//             onDiv: {
//               selectors: [],
//               enable: false,
//               mode: [],
//               type: "circle",
//             },
//             onHover: {
//               enable: true,
//               mode: "grab",
//               parallax: {
//                 enable: true,
//                 force: 60,
//                 smooth: 10,
//               },
//             },
//             resize: true,
//           },
//     modes: {
//       attract: {
//         distance: 200,
//         duration: 0.4,
//         /* @ts-ignore */
//         easing: "ease-out-quad",
//         factor: 1,
//         maxSpeed: 20,
//         speed: 0.5,
//       },
//       bounce: {
//         distance: 200,
//       },
//       bubble: {
//         distance: 400,
//         duration: 2,
//         mix: false,
//         opacity: 0.8,
//         size: 40,
//         divs: {
//           distance: 200,
//           duration: 0.4,
//           mix: false,
//           selectors: [],
//         },
//       },
//       connect: {
//         distance: 80,
//         links: {
//           opacity: 0.5,
//         },
//         radius: 60,
//       },
//       grab: {
//         distance: 400,
//         links: {
//           blink: false,
//           consent: false,
//           opacity: 1,
//         },
//       },
//       light: {
//         area: {
//           gradient: {
//             start: {
//               value: "#ffffff",
//             },
//             stop: {
//               value: "#000000",
//             },
//           },
//           radius: 1000,
//         },
//         shadow: {
//           color: {
//             value: "#000000",
//           },
//           length: 2000,
//         },
//       },
//       push: {
//         default: true,
//         groups: [],
//         quantity: 1,
//       },
//       remove: {
//         quantity: 2,
//       },
//       repulse: {
//         distance: 200,
//         duration: 0.4,
//         factor: 100,
//         speed: 0.5,
//         maxSpeed: 20,
//         /* @ts-ignore */
//         easing: "ease-out-quad",
//         /* @ts-ignore */
//         divs: {
//           distance: 200,
//           duration: 0.4,
//           factor: 100,
//           speed: 0.5,
//           maxSpeed: 20,
//           easing: "ease-out-quad",
//           selectors: [],
//         },
//       },
//       slow: {
//         factor: 3,
//         radius: 200,
//       },
//       trail: {
//         delay: 1,
//         pauseOnStop: false,
//         quantity: 1,
//       },
//     },
//   },
//   motion: {
//     disable: false,
//     reduce: {
//       factor: 4,
//       value: true,
//     },
//   },
//   particles: {
//     color: {
//       value: "#ffffff",
//     },
//     links: {
//       color: "#ffffff",
//       distance: 150,
//       enable: true,
//       opacity: 0.5,
//       width: 1,
//     },
//     collisions: {
//       enable: true,
//     },
//     move: {
//       angle: {
//         offset: 0,
//         value: 90,
//       },
//       attract: {
//         distance: 200,
//         enable: false,
//         rotate: {
//           x: 600,
//           y: 1200,
//         },
//       },
//       center: {
//         x: 50,
//         y: 50,
//         radius: 0,
//       },
//       decay: 0,
//       distance: {},
//       direction: "none",
//       drift: 0,
//       enable: true,
//       gravity: {
//         acceleration: 9.81,
//         enable: false,
//         inverse: false,
//         maxSpeed: 50,
//       },
//       path: {
//         clamp: true,
//         delay: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: 0,
//         },
//         enable: false,
//         options: {},
//       },
//       outModes: {
//         default: "out",
//         bottom: "out",
//         left: "out",
//         right: "out",
//         top: "out",
//       },
//       random: false,
//       size: false,
//       speed: 2,
//       spin: {
//         acceleration: 0,
//         enable: false,
//       },
//       straight: false,
//       trail: {
//         enable: false,
//         length: 10,
//         fillColor: {
//           value: "#000000",
//         },
//       },
//       vibrate: false,
//       warp: false,
//     },
//     number: {
//       density: {
//         enable: true,
//         area: 800,
//       },
//       value: 80,
//     },
//     opacity: {
//       value: 0.5,
//     },
//     shape: {
//       type: "circle",
//     },
//     size: {
//       random: true,
//       value: { min: 1, max: 5 },
//     },
//   },
//   detectRetina: true,
// }}
