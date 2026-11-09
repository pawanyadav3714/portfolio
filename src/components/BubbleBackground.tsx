import { useEffect, useRef } from 'react';

export default function BubbleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const width = window.innerWidth;
    const numBubbles = width < 768 ? 12 : width < 1024 ? 24 : 40;
    const numSparkles = width < 768 ? 8 : width < 1024 ? 12 : 20;
    const bubbles: any[] = [];

    // Generate normal bubbles
    for (let i = 0; i < numBubbles; i++) {
      const el = document.createElement('div');
      
      const size = Math.random() * 130 + 20; 
      const depth = Math.random() * 3 + 1; 
      const opacity = Math.random() * 0.05 + 0.01;

      el.className = 'absolute rounded-full pointer-events-none bubble-glass';
      el.style.willChange = 'transform, opacity';
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      
      // Premium Glassmorphism
      el.style.background = 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), rgba(255,255,255,0.01))';
      el.style.backdropFilter = `blur(${Math.random() * 4 + 2}px)`;
      el.style.setProperty('-webkit-backdrop-filter', `blur(${Math.random() * 4 + 2}px)`);
      el.style.border = '1px solid rgba(255, 255, 255, 0.3)';
      el.style.boxShadow = 'inset 0 0 20px rgba(255,255,255,0.2), 0 4px 30px rgba(0,0,0,0.05)';

      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      // Floating paths
      const duration = Math.random() * 20 + 10; // 10s to 30s
      const speedMultiplier = 30 / duration; 
      
      const angle = Math.random() * Math.PI * 2;
      const vx = Math.cos(angle) * 0.5 * speedMultiplier;
      const vy = Math.sin(angle) * 0.5 * speedMultiplier;

      container.appendChild(el);

      bubbles.push({
        el, x, y, size, vx, vy, depth,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: Math.random() * 0.01 + 0.005,
        baseOpacity: opacity,
        currentOpacity: opacity,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        currentRepelX: 0,
        currentRepelY: 0,
        tempScale: 1,
        isSparkle: false
      });
    }

    // Occasional floating particle sparkles
    for (let i = 0; i < numSparkles; i++) {
        const el = document.createElement('div');
        const size = Math.random() * 4 + 2;
        el.className = 'absolute rounded-full bg-white blur-[1px] pointer-events-none';
        el.style.willChange = 'transform, opacity';
        el.style.width = `${size}px`;
        el.style.height = `${size}px`;
        const opacity = Math.random() * 0.1 + 0.02;
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const vy = -Math.random() * 0.5 - 0.2;
        
        container.appendChild(el);
        bubbles.push({
            el, x, y, size, vx: Math.random() * 0.4 - 0.2, vy, depth: 1,
            phase: Math.random() * Math.PI, phaseSpeed: 0.03,
            baseOpacity: opacity,
            currentOpacity: opacity,
            rotation: 0,
            rotationSpeed: 0,
            currentRepelX: 0,
            currentRepelY: 0,
            tempScale: 1,
            isSparkle: true
        });
    }

    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let currentMouseX = -1000;
    let currentMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;
    let lastTime = performance.now();

    const render = (time: number) => {
      // Delta time calculation for consistent speed
      const dt = Math.min((time - lastTime) / 16.666, 2); 
      lastTime = time;

      currentMouseX += (targetMouseX - currentMouseX) * 0.1;
      currentMouseY += (targetMouseY - currentMouseY) * 0.1;

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        b.phase += b.phaseSpeed * dt;
        
        if (!b.isSparkle) {
          b.rotation += b.rotationSpeed * dt;
        }

        // Infinite screen wrapping
        if (b.x < -b.size) b.x = window.innerWidth + b.size;
        if (b.x > window.innerWidth + b.size) b.x = -b.size;
        if (b.y < -b.size) b.y = window.innerHeight + b.size;
        if (b.y > window.innerHeight + b.size) b.y = -b.size;

        const dx = currentMouseX - (b.x + b.size/2);
        const dy = currentMouseY - (b.y + b.size/2);
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        let targetRepelX = 0;
        let targetRepelY = 0;
        const repelRadius = 250; // Interaction radius
        
        // Scale 0.9 -> 1.1 effect
        let targetScale = Math.max(0, 1 + Math.sin(b.phase) * (b.isSparkle ? 0.3 : 0.1));
        let targetOpacity = b.baseOpacity;

        if (dist < repelRadius && !b.isSparkle) {
          const force = (repelRadius - dist) / repelRadius;
          const strength = 80 * (1/b.depth);
          
          targetRepelX = -(dx / (dist || 1)) * force * strength;
          targetRepelY = -(dy / (dist || 1)) * force * strength;
          
          if (dist < b.size/2 + 80) {
            // Hover: Bubble brightness increases slightly & enlarges smoothly
            targetScale += 0.15;
            targetOpacity = Math.min(b.baseOpacity * 2, 0.2);
          }
        }

        // Lerp for smooth animation
        const lerpFactor = 0.05 * dt;
        b.currentRepelX += (targetRepelX - b.currentRepelX) * lerpFactor;
        b.currentRepelY += (targetRepelY - b.currentRepelY) * lerpFactor;
        b.currentOpacity += (targetOpacity - b.currentOpacity) * lerpFactor;
        b.tempScale += (targetScale - b.tempScale) * lerpFactor;

        b.el.style.opacity = b.currentOpacity.toFixed(3);
        
        const trX = (b.x + b.currentRepelX).toFixed(3);
        const trY = (b.y + b.currentRepelY).toFixed(3);
        const scl = b.tempScale.toFixed(3);
        
        if (b.isSparkle) {
            b.el.style.transform = `translate3d(${trX}px, ${trY}px, 0) scale(${scl})`;
        } else {
            const rot = b.rotation.toFixed(1);
            b.el.style.transform = `translate3d(${trX}px, ${trY}px, 0) scale(${scl}) rotate(${rot}deg)`;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Re-initialize on large resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      // We don't fully recreate but prevent bubbles from being stuck entirely out of bounds.
      // Handled by wrapping logic.
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden">
      {/* Background ambient blurs */}
      <div className="absolute top-[10%] left-[20%] w-[50vw] h-[50vw] bg-blue-500/10 dark:bg-blue-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob"></div>
      <div className="absolute top-[40%] right-[10%] w-[45vw] h-[45vw] bg-purple-500/10 dark:bg-purple-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[10%] left-[30%] w-[55vw] h-[55vw] bg-pink-500/10 dark:bg-pink-500/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
      
      {/* Container for JS generated glass bubbles */}
      <div ref={containerRef} className="absolute inset-0 z-10 w-full h-full" />
    </div>
  );
}
