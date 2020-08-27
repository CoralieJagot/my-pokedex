import React, { FunctionComponent } from 'react';

import { useSpring, animated } from 'react-spring';

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans: (...params: number[]) => string = (x: number, y:number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


const AnimatedCard: FunctionComponent = (props) => {
  const [springProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: springProps.xys.interpolate(trans as any) }}
    >{props.children}</animated.div>
  );
};
export default AnimatedCard;