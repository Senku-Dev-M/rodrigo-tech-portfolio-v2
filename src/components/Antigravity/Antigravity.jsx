import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const AntigravityInner = ({
    count = 180,
    magnetRadius = 6,
    ringRadius = 7,
    waveSpeed = 0.4,
    waveAmplitude = 1,
    particleSize = 1.5,
    lerpSpeed = 0.05,
    color = '#FF5A1F',
    autoAnimate = true,
    particleVariance = 1,
    rotationSpeed = 0,
    depthFactor = 1,
    pulseSpeed = 3,
    particleShape = 'capsule',
    fieldStrength = 10,
}) => {
    const meshRef = useRef(null);
    const { viewport } = useThree();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const lastMousePos = useRef({ x: 0, y: 0 });
    const lastMouseMoveTime = useRef(0);
    const virtualMouse = useRef({ x: 0, y: 0 });

    const particles = useMemo(() => {
        const temp = [];
        const width = viewport.width || 100;
        const height = viewport.height || 100;
        for (let i = 0; i < count; i++) {
            const t = Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const x = (Math.random() - 0.5) * width;
            const y = (Math.random() - 0.5) * height;
            const z = (Math.random() - 0.5) * 20;
            const randomRadiusOffset = (Math.random() - 0.5) * 2;
            temp.push({ t, speed, mx: x, my: y, mz: z, cx: x, cy: y, cz: z, randomRadiusOffset });
        }
        return temp;
    }, [count, viewport.width, viewport.height]);

    useFrame(state => {
        const mesh = meshRef.current;
        if (!mesh) return;
        const { viewport: v, pointer: m } = state;

        const mouseDist = Math.sqrt(
            Math.pow(m.x - lastMousePos.current.x, 2) + Math.pow(m.y - lastMousePos.current.y, 2)
        );
        if (mouseDist > 0.001) {
            lastMouseMoveTime.current = Date.now();
            lastMousePos.current = { x: m.x, y: m.y };
        }

        let destX = (m.x * v.width) / 2;
        let destY = (m.y * v.height) / 2;

        if (autoAnimate && Date.now() - lastMouseMoveTime.current > 2000) {
            const time = state.clock.getElapsedTime();
            destX = Math.sin(time * 0.5) * (v.width / 4);
            destY = Math.cos(time * 0.5 * 2) * (v.height / 4);
        }

        virtualMouse.current.x += (destX - virtualMouse.current.x) * 0.05;
        virtualMouse.current.y += (destY - virtualMouse.current.y) * 0.05;

        const targetX = virtualMouse.current.x;
        const targetY = virtualMouse.current.y;
        const globalRotation = state.clock.getElapsedTime() * rotationSpeed;

        particles.forEach((particle, i) => {
            particle.t += particle.speed / 2;
            const t = particle.t;
            const { mx, my, mz, randomRadiusOffset } = particle;

            const projFactor = 1 - particle.cz / 50;
            const px = targetX * projFactor;
            const py = targetY * projFactor;

            const dx = mx - px;
            const dy = my - py;
            const dist = Math.sqrt(dx * dx + dy * dy);

            let tx = mx, ty = my, tz = mz * depthFactor;

            if (dist < magnetRadius) {
                const angle = Math.atan2(dy, dx) + globalRotation;
                const wave = Math.sin(t * waveSpeed + angle) * 0.5 * waveAmplitude;
                const deviation = randomRadiusOffset * (5 / (fieldStrength + 0.1));
                const r = ringRadius + wave + deviation;
                tx = px + r * Math.cos(angle);
                ty = py + r * Math.sin(angle);
                tz = mz * depthFactor + Math.sin(t) * waveAmplitude * depthFactor;
            }

            particle.cx += (tx - particle.cx) * lerpSpeed;
            particle.cy += (ty - particle.cy) * lerpSpeed;
            particle.cz += (tz - particle.cz) * lerpSpeed;

            dummy.position.set(particle.cx, particle.cy, particle.cz);
            dummy.lookAt(px, py, particle.cz);
            dummy.rotateX(Math.PI / 2);

            const distFromRing = Math.abs(
                Math.sqrt(Math.pow(particle.cx - px, 2) + Math.pow(particle.cy - py, 2)) - ringRadius
            );
            let scale = Math.max(0, Math.min(1, 1 - distFromRing / 10));
            scale *= (0.8 + Math.sin(t * pulseSpeed) * 0.2 * particleVariance) * particleSize;
            dummy.scale.set(scale, scale, scale);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        });

        mesh.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            {particleShape === 'capsule' && <capsuleGeometry args={[0.1, 0.4, 4, 8]} />}
            {particleShape === 'sphere' && <sphereGeometry args={[0.2, 16, 16]} />}
            {particleShape === 'box' && <boxGeometry args={[0.3, 0.3, 0.3]} />}
            {particleShape === 'tetrahedron' && <tetrahedronGeometry args={[0.3]} />}
            <meshBasicMaterial color={color} />
        </instancedMesh>
    );
};

const Antigravity = (props) => (
    <Canvas camera={{ position: [0, 0, 50], fov: 35 }} style={{ pointerEvents: 'none' }}>
        <AntigravityInner {...props} />
    </Canvas>
);

export default Antigravity;
