import React, { useRef, useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  LazyMotion,
  m,
  domAnimation,
  useAnimationControls,
  animate,
} from "framer-motion";
import { defaultData } from "../utils/consts";
import { useWindowSize } from "../utils/hooks";
import ThreeJsCanvas from "./ThreeJsCanvas";

const Hero = React.forwardRef(
  (
    {
      cardsData = defaultData,
      startingAnimation = true,
      rotateOnScroll = true,
      drag = true,
      setSelectedCardIdx = undefined,
      rotation = true,
      rotationDuration = 60,
      tilt = true,
      freeRoam = false,
      freeRoamUpperBounds = 0,
      freeRoamLowerBounds = -180,
      onTitleClickHandler = () => {},
    },
    ref
  ) => {
    const { width } = useWindowSize();
    const [dummyState, setDummyState] = useState(false);

    const numberOfCards = cardsData.length;
    const cardGaps =
      numberOfCards *
      (width <= 412 ? 25 : width <= 767 ? 35 : width <= 1500 ? 36 : 53);

    function createRefs(ref, col, idx) {
      if (!ref.current) return;
      ref.current[idx] = col;
    }

    const rootRef = useRef(null);
    const ospin = useRef(null);
    const odrag = useRef(null);
    const ground = useRef(null);
    const cardsRef = useRef([]);

    let startX = 0;
    let startY = 0;
    let expand = true;
    let pointerDown = false;

    const dragTy = useMotionValue(0);
    const dragTySpring = useSpring(dragTy, { damping: 200, stiffness: 400 });
    const dragTx = useMotionValue(-0);
    const dragTxSpring = useSpring(dragTx, { damping: 200, stiffness: 400 });
    const rotate = useMotionValue(0);

    const controls = useAnimationControls();

    useEffect(() => {
      if (rotation) {
        controls.start({
          rotateY: 360,
          transition: {
            duration: rotationDuration,
            repeat: Infinity,
            ease: "linear",
          },
        });
      }
    }, []);

    const handleMouseWheel = (e) => {
      if (!rotateOnScroll) return;
      const d = +e.deltaY / 20;
      if (expand && d > 0) {
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (expand && d < 0) {
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (!expand && d > 0) {
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (!expand && d < 0) {
        dragTy.set(dragTy.get() + d);
      }
    };

    const pointerDownHandler = (e) => {
      if (!drag) return;
      pointerDown = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    const pointerUpHandler = () => {
      pointerDown = false;
    };

    const pointerMoveHandler = (e) => {
      if (!pointerDown || !drag) return;
      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;
      const rotationSensitivity = 0.5;

      if (freeRoam) {
        if (deltaY > 0 && dragTx.get() > freeRoamLowerBounds) {
          dragTx.set(dragTx.get() - deltaY * rotationSensitivity);
        } else if (deltaY < 0 && dragTx.get() < freeRoamUpperBounds) {
          dragTx.set(dragTx.get() - deltaY * rotationSensitivity);
        }
      } else {
        dragTx.set(dragTx.get() - deltaY * rotationSensitivity);
      }

      dragTy.set(dragTy.get() + deltaX * rotationSensitivity);
    };

    let touchStartX = 0;
    let deltaX = 0;

    const touchStartHandler = (e) => {
      if (!drag) return;
      touchStartX = e.touches[0].pageX;
    };

    const touchMoveHandler = (e) => {
      if (!drag) return;
      deltaX = touchStartX - e.touches[0].pageX;
      touchStartX = e.touches[0].pageX;
      dragTy.set(dragTy.get() - deltaX * 0.6);
    };

    const mouseLeaveHandler = () => {
      pointerDown = false;
    };

    const caseSelectHandler = (idx) => {
      if (pointerDown) return;
      if (!setSelectedCardIdx) {
        setDummyState(!dummyState);
        return;
      }
      setSelectedCardIdx(idx);
    };

    useEffect(() => {
      if (!tilt || freeRoam) return;
      const root = rootRef.current;
      const container = odrag.current;

      const onMouseMove = (e) => {
        if (!root || !container) return;
        const { clientX, clientY } = e;
        const { width: clientWidth, height: clientHeight } =
          root.getBoundingClientRect();
        const rotateXVal = (clientY - clientHeight / 2) * 0.06;
        const rotateYVal = (clientWidth / 2 - clientX) * 0.01;

        rotate.set(rotateYVal);
        dragTx.set(rotateXVal);
      };

      document.addEventListener("mousemove", onMouseMove);
      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    }, []);

    useEffect(() => {
      cardsRef.current.map(async (card, idx) => {
        await animate(
          card,
          {
            transform: `rotateY(${
              (idx + 1) * (360 / cardsData.length)
            }deg) translateZ(${cardGaps}px)`,
          },
          {
            ease: "easeOut",
            delay: idx * 0.2,
            duration: 0.8,
          }
        );
      });
    }, [width]);

    React.useImperativeHandle(ref, () => ({
      nextCardHandler() {
        dragTy.set(dragTy.get() - 360 / numberOfCards);
      },
      prevCardHandler() {
        dragTy.set(dragTy.get() + 360 / numberOfCards);
      },
    }));

    return (
      <LazyMotion features={domAnimation}>
        <m.div
          onWheel={handleMouseWheel}
          onMouseDown={pointerDownHandler}
          onMouseUp={pointerUpHandler}
          onPointerMove={pointerMoveHandler}
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onMouseLeave={mouseLeaveHandler}
          ref={rootRef}
          className="rootCarousel flex h-screen w-screen items-center overflow-hidden justify-center active:cursor-grab text-white relative"
        >
          <m.div
            ref={odrag}
            className="dragContainer"
            style={{
              rotateX: dragTxSpring,
              rotateY: dragTySpring,
              rotate: rotate,
            }}
          >
            <m.div
              ref={ospin}
              className="spinContainer"
              animate={controls}
            >
              {cardsData &&
                cardsData.map((card, idx) => (
                  <m.div
                    key={idx + 1}
                    ref={(e) => createRefs(cardsRef, e, idx)}
                    onMouseEnter={() => caseSelectHandler(idx)}
                    className="images w-[800px] h-[500px] bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg shadow-2xl overflow-hidden flex"
                    style={{
                      transform: `rotateY(${
                        (idx + 1) * (360 / numberOfCards)
                      }deg) translateZ(${cardGaps}px)`,
                    }}
                  >
                    {/* Left half: Three.js Canvas */}
                    <div className="w-1/2 h-full flex items-center justify-center bg-black">
                      <ThreeJsCanvas scene={card.scene} />
                    </div>

                    {/* Right half: Text and Image */}
                    <div className="w-1/2 h-full p-8 flex flex-col justify-center bg-gradient-to-br from-blue-900 to-purple-900">
                      <div className="mb-6">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-24 h-24 rounded-full mb-4 border-2 border-white"
                        />
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                      <button
                        onClick={() => onTitleClickHandler(card)}
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 self-start"
                      >
                        Learn More
                      </button>
                    </div>
                  </m.div>
                ))}
            </m.div>
            <div ref={ground} className="ground"></div>
          </m.div>
        </m.div>
      </LazyMotion>
    );
  }
);

export default Hero;

const Hero = React.forwardRef<Ref, Props>(
  (
    {
      cardsData = defaultData,
      startingAnimation = true,
      rotateOnScroll = true,
      drag = true,
      setSelectedCardIdx = undefined,
      rotation = true,
      rotationDuration = 60,
      tilt = true,
      freeRoam = false,
      freeRoamUpperBounds = 0,
      freeRoamLowerBounds = -180,
      onTitleClickHandler = () => {},
    },
    ref
  ) => {
    const { width } = useWindowSize();
    const [dummyState, setDummyState] = useState(false);

    const numberOfCards = cardsData.length;
    const cardGaps =
      numberOfCards *
      (width <= 412 ? 25 : width <= 767 ? 35 : width <= 1500 ? 36 : 53);

    function createRefs(ref: any, col: any, idx: number) {
      if (!ref.current) return;
      ref.current[idx] = col;
    }

    const rootRef = useRef<HTMLDivElement>(null);
    const ospin = useRef(null);
    const odrag = useRef(null);
    const ground = useRef(null);
    const cardsRef = useRef([]);

    let startX = 0;
    let startY = 0;
    let expand = true;
    let pointerDown = false;

    const dragTy = useMotionValue(0);
    const dragTySpring = useSpring(dragTy, { damping: 200, stiffness: 400 });
    const dragTx = useMotionValue(-0);
    const dragTxSpring = useSpring(dragTx, { damping: 200, stiffness: 400 });
    const rotate = useMotionValue(0);

    const controls = useAnimationControls();

    useEffect(() => {
      if (rotation) {
        controls.start({
          rotateY: 360,
          transition: {
            duration: rotationDuration,
            repeat: Infinity,
            ease: "linear",
          },
        });
      }
    }, []);

    const handleMouseWheel = (e: WheelEvent) => {
      if (!rotateOnScroll) return;
      const d = +e.deltaY / 20;
      if (expand && d > 0) {
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (expand && d < 0) {
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (!expand && d > 0) {
        dragTy.set(dragTy.get() + d * 0.6);
      } else if (!expand && d < 0) {
        dragTy.set(dragTy.get() + d);
      }
    };

    const pointerDownHandler = (e: MouseEvent) => {
      if (!drag) return;
      pointerDown = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    const pointerUpHandler = () => {
      pointerDown = false;
    };

    const pointerMoveHandler = (e: MouseEvent) => {
      if (!pointerDown || !drag) return;
      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;
      const rotationSensitivity = 0.5;

      if (freeRoam) {
        if (deltaY > 0 && dragTx.get() > freeRoamLowerBounds) {
          dragTx.set(dragTx.get() - deltaY * rotationSensitivity);
        } else if (deltaY < 0 && dragTx.get() < freeRoamUpperBounds) {
          dragTx.set(dragTx.get() - deltaY * rotationSensitivity);
        }
      } else {
        dragTx.set(dragTx.get() - deltaY * rotationSensitivity);
      }

      dragTy.set(dragTy.get() + deltaX * rotationSensitivity);
    };

    let touchStartX = 0;
    let deltaX = 0;

    const touchStartHandler = (e: TouchEvent) => {
      if (!drag) return;
      touchStartX = e.touches[0].pageX;
    };

    const touchMoveHandler = (e: TouchEvent) => {
      if (!drag) return;
      deltaX = touchStartX - e.touches[0].pageX;
      touchStartX = e.touches[0].pageX;
      dragTy.set(dragTy.get() - deltaX * 0.6);
    };

    const mouseLeaveHandler = () => {
      pointerDown = false;
    };

    const caseSelectHandler = (idx: number) => {
      if (pointerDown) return;
      if (!setSelectedCardIdx) {
        setDummyState(!dummyState);
        return;
      }
      setSelectedCardIdx(idx);
    };

    useEffect(() => {
      if (!tilt || freeRoam) return;
      const root = rootRef.current;
      const container = odrag.current;

      const onMouseMove = (e: MouseEvent) => {
        if (!root || !container) return;
        const { clientX, clientY } = e;
        const { width: clientWidth, height: clientHeight } =
          root.getBoundingClientRect();
        const rotateXVal = (clientY - clientHeight / 2) * 0.06;
        const rotateYVal = (clientWidth / 2 - clientX) * 0.01;

        rotate.set(rotateYVal);
        dragTx.set(rotateXVal);
      };

      document.addEventListener(
        "mousemove",
        onMouseMove as unknown as EventListener
      );
      return () => {
        document.removeEventListener(
          "mousemove",
          onMouseMove as unknown as EventListener
        );
      };
    }, []);

    useEffect(() => {
      cardsRef.current.map(async (card, idx) => {
        await animate(
          card,
          {
            transform: `rotateY(${
              (idx + 1) * (360 / cardsData.length)
            }deg) translateZ(${cardGaps}px)`,
          },
          {
            ease: "easeOut",
            delay: idx * 0.2,
            duration: 0.8,
          }
        );
      });
    }, [width]);

    useImperativeHandle(ref, () => ({
      nextCardHandler() {
        dragTy.set(dragTy.get() - 360 / numberOfCards);
      },
      prevCardHandler() {
        dragTy.set(dragTy.get() + 360 / numberOfCards);
      },
    }));

    return (
      <LazyMotion features={domAnimation}>
        <m.div
          onWheel={handleMouseWheel}
          onMouseDown={pointerDownHandler}
          onMouseUp={pointerUpHandler}
          onPointerMove={pointerMoveHandler}
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onMouseLeave={mouseLeaveHandler}
          ref={rootRef}
          className="rootCarousel flex h-screen w-screen items-center overflow-hidden justify-center active:cursor-grab text-white relative"
        >
          <m.div
            ref={odrag}
            className="dragContainer"
            style={{
              rotateX: dragTxSpring,
              rotateY: dragTySpring,
              rotate: rotate,
            }}
          >
            <m.div
              ref={ospin}
              className="spinContainer"
              animate={controls}
            >
              {cardsData &&
                cardsData.map((card, idx: number) => (
                  <m.div
                    key={idx + 1}
                    ref={(e) => createRefs(cardsRef, e, idx)}
                    onMouseEnter={() => caseSelectHandler(idx)}
                    className="images w-[800px] h-[500px] bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg shadow-2xl overflow-hidden flex"
                    style={{
                      transform: `rotateY(${
                        (idx + 1) * (360 / numberOfCards)
                      }deg) translateZ(${cardGaps}px)`,
                    }}
                  >
                    {/* Left half: Three.js Canvas */}
                    <div className="w-1/2 h-full flex items-center justify-center bg-black">
                      <ThreeJsCanvas scene={card.scene} />
                    </div>

                    {/* Right half: Text and Image */}
                    <div className="w-1/2 h-full p-8 flex flex-col justify-center bg-gradient-to-br from-blue-900 to-purple-900">
                      <div className="mb-6">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-24 h-24 rounded-full mb-4 border-2 border-white"
                        />
                        <h3 className="text-3xl font-bold text-white mb-4">
                          {card.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                      <button
                        onClick={() => onTitleClickHandler(card)}
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 self-start"
                      >
                        Learn More
                      </button>
                    </div>
                  </m.div>
                ))}
            </m.div>
            <div ref={ground} className="ground"></div>
          </m.div>
        </m.div>
      </LazyMotion>
    );
  }
);

export default Hero;

function useImperativeHandle(ref: React.ForwardedRef<any>, arg1: () => { nextCardHandler(): void; prevCardHandler(): void; }) {
  throw new Error("Function not implemented.");
}
===SEPARATOR===
