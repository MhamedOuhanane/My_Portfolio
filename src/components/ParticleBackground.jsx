import React, { useRef, useEffect, useCallback } from "react";
import { useTheme } from "../context/ThemeContext";

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const { isDark } = useTheme();
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  const createParticles = useCallback((canvas) => {
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
    return Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  const animate = useCallback(
    (canvas, ctx) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const particles = particlesRef.current;

      particles.forEach((p, i) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.vx -= dx * 0.00008;
          p.vy -= dy * 0.00008;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(66, 99, 235, ${p.opacity})`
          : `rgba(30, 58, 95, ${p.opacity * 0.6})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(66, 99, 235, ${0.15 * (1 - d / 120)})`
              : `rgba(30, 58, 95, ${0.1 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(() => animate(canvas, ctx));
    },
    [isDark]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particlesRef.current = createParticles(canvas);
    };

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);
    animate(canvas, ctx);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default React.memo(ParticleBackground);
