import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '../store'
import { ReactNode, Ref, useRef } from 'react';
import { Group } from 'three';

type TargetPosition = [x: number, y: number, z: number];

const CameraRig = ({ children }: { children: ReactNode }) => {
  const snap = useSnapshot(state);
  const group = useRef() as Ref<Group> & { current: Group };

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1280;
    const isMobile = window.innerWidth <= 600;

    // set model position
    let targetPosition: TargetPosition = [-0.4, 0, 2];
    if (snap.intro) {
      targetPosition = isBreakpoint ? [0, 0, 2] : isMobile ? [0, 0.2, 2.5] : [-0.4, 0, 2];
    } else {
      targetPosition = isMobile ? [0, 0, 2.5] : [0, 0, 2];
    }
    // set model camera position
    easing.damp3(
      state.camera.position,
      targetPosition,
      0.25,
      delta
    );

    // set model rotation
    easing.dampE(
      group?.current?.rotation,
      [state.pointer.y / 10, -state.pointer.x / 5, 0],
      0.25,
      delta
    );
  });


  return (
    <group ref={group}>
      {children}
    </group>
  )
}

export default CameraRig