"use client";

/*
 * CursorFireTrail.tsx
 *
 * This component renders a fixed canvas that sits behind all other content and
 * draws a trail of “fire” particles following the user’s pointer. The fire
 * effect is only visible while the pointer is moving; when the pointer stops
 * no new particles are spawned and existing particles fade out. The particle
 * system is lightweight and runs efficiently via requestAnimationFrame.
 */

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  radius: number;
}

export default function CursorFireTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  // timestamp of the last pointer movement; used to stop spawning when idle
  const lastMoveRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Adjust canvas size for device pixel ratio
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn a few particles at the pointer location
    const spawnParticles = (x: number, y: number) => {
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.6 + 0.3;
        particlesRef.current.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // drift upward slightly
          life: 1.0,
          radius: Math.random() * 6 + 6
        });
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      lastMoveRef.current = Date.now();
      spawnParticles(e.clientX, e.clientY);
    };
    window.addEventListener('pointermove', handlePointerMove);

    // Animation loop
    const tick = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      // If pointer hasn’t moved for 120ms, do not spawn new particles
      // (we only spawn on pointermove anyway)
      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx * 2;
        p.y += p.vy * 2;
        p.life -= 0.02;
        p.radius *= 0.98;
        if (p.life > 0 && p.radius > 0) {
          // Draw particle as radial gradient
          const grd = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.radius
          );
          grd.addColorStop(0, 'rgba(255, 200, 100, 0.9)');
          grd.addColorStop(0.5, 'rgba(255, 80, 60, 0.7)');
          grd.addColorStop(1, 'rgba(255, 0, 0, 0)');
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}