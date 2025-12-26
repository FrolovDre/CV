/*
 * Animated fluid background for the left column.
 * It consists of two blurred gradient blobs that slowly move and rotate,
 * creating a fluid, ever‑changing pattern reminiscent of the AutoGivex page.
 */
"use client";

import { FC } from 'react';

const FluidBackground: FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      {/* Primary blurred gradient blob */}
      <div
        className="absolute w-[60vw] h-[60vw] md:w-[50vw] md:h-[50vw] bg-gradient-to-tr from-primary via-secondary to-purple-800 opacity-30 rounded-full blur-[200px] animate-float1"
        style={{ top: '-25%', left: '-20%' }}
      />
      {/* Secondary blurred gradient blob */}
      <div
        className="absolute w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] bg-gradient-to-br from-secondary via-primary to-indigo-700 opacity-25 rounded-full blur-[220px] animate-float2"
        style={{ bottom: '-30%', right: '-15%' }}
      />
      {/* Scanlines overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,transparent_95%,rgba(255,255,255,0.03)_96%,rgba(255,255,255,0.03)_100%)] bg-[size:100%_4px]" />
    </div>
  );
};

export default FluidBackground;