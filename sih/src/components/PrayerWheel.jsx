import React, { useEffect, useRef, useState } from "react";

export default function PrayerWheel({ onSpin }) {
  const knobRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [angle, setAngle] = useState(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const lastPointerXRef = useRef(0);

  useEffect(() => {
    const tick = (timestamp) => {
      const last = lastTimeRef.current || timestamp;
      const dt = (timestamp - last) / 1000; // seconds
      lastTimeRef.current = timestamp;

      // Apply friction when not dragging
      if (!isDraggingRef.current) {
        const friction = 1.8; // higher = more friction
        const sign = Math.sign(velocityRef.current);
        const mag = Math.max(0, Math.abs(velocityRef.current) - friction * dt);
        velocityRef.current = sign * mag;
      }

      if (Math.abs(velocityRef.current) > 0.0001) {
        setAngle((a) => a + velocityRef.current * dt * 360);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onPointerDown = (e) => {
    isDraggingRef.current = true;
    lastPointerXRef.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const dx = x - lastPointerXRef.current;
    lastPointerXRef.current = x;
    // Convert horizontal drag to spin velocity (deg/sec)
    const impulse = dx * 8; // sensitivity
    velocityRef.current += impulse;
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
  };

  const onTap = () => {
    // Small impulse on tap/click
    velocityRef.current += 220;
    if (onSpin) onSpin();
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-xl"
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
    >
      <div className="relative aspect-square select-none">
        {/* Outer ring */}
        <div
          className="absolute inset-0 rounded-full shadow-2xl"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.08), rgba(0,0,0,0.5)), linear-gradient(135deg, #78350f, #92400e 40%, #b45309)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        />

        {/* Rotating inner disc */}
        <div
          className="absolute inset-4 rounded-full flex items-center justify-center"
          style={{
            transform: `rotate(${angle}deg)`,
            transition: isDraggingRef.current ? "none" : "transform 20ms linear",
            background:
              "conic-gradient(from 0deg, rgba(255,255,255,0.06), rgba(0,0,0,0.25)), radial-gradient(50% 60% at 50% 35%, rgba(255,255,255,0.15), rgba(0,0,0,0.4))",
            boxShadow: "inset 0 6px 18px rgba(0,0,0,0.5)",
          }}
          aria-label="Prayer wheel"
        >
          {/* Mantra markers */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="absolute text-amber-300 text-xs md:text-sm tracking-wider"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-42%)`,
              }}
            >
              ॐ मणि पद्मे हूँ
            </div>
          ))}
        </div>

        {/* Knob / interaction hotspot */}
        <button
          ref={knobRef}
          type="button"
          onMouseDown={onPointerDown}
          onTouchStart={onPointerDown}
          onClick={onTap}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-full focus:outline-none"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.1)), linear-gradient(145deg, #f59e0b, #b45309)",
            boxShadow:
              "0 8px 20px rgba(0,0,0,0.45), inset 0 4px 10px rgba(255,255,255,0.25), inset 0 -6px 14px rgba(0,0,0,0.35)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
          aria-label="Spin prayer wheel"
        >
          <span className="sr-only">Spin the prayer wheel</span>
        </button>
      </div>
      <p className="mt-4 text-center text-sm text-slate-300">
        Tap to spin or drag horizontally for a longer spin.
      </p>
    </div>
  );
}


