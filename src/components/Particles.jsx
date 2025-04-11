import React, { useRef, useEffect } from 'react';

function Particles() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouse = {
      x: undefined,
      y: undefined,
      radius: 80 // Reduced from 100
    };
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Mouse move event
    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Mouse leave event
    function handleMouseLeave() {
      mouse.x = undefined;
      mouse.y = undefined;
    }
    
    window.addEventListener('mouseleave', handleMouseLeave);
    
    // Particle properties
    const particlesArray = [];
    // Reduced number of particles
    const numberOfParticles = Math.min(150, Math.floor((canvas.width * canvas.height) / 9000));
    
    class Particle {
      constructor() {
        // Fixed position
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Original position to return to
        this.baseX = this.x;
        this.baseY = this.y;
        
        // Size - significantly reduced
        this.size = Math.random() * 1.5 + 0.5; // Down from (3 + 1)
        
        // Interactive properties
        this.density = (Math.random() * 15) + 3; // Slightly reduced
        
        // Colors - using blue theme with reduced opacity
        const blueShade = Math.floor(Math.random() * 80) + 175;
        const alphaValue = Math.random() * 0.4 + 0.2; // Lower opacity (0.2-0.6)
        this.color = `rgba(150, 190, ${blueShade}, ${alphaValue})`;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update() {
        // Only update if mouse is defined
        if (mouse.x === undefined || mouse.y === undefined) {
          // Return to original position if not at base position
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 5;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 5;
          }
          return;
        }
        
        // Check mouse position
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        // Max distance, past which the force is zero
        const maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        
        // If force is negative, set it to zero
        if (force < 0) force = 0;
        
        // Movement based on mouse position - slightly reduced force
        const directionX = forceDirectionX * force * this.density;
        const directionY = forceDirectionY * force * this.density;
        
        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to original position with gentler movement
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 6; // Slightly slower return (5 to 6)
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 6; // Slightly slower return
          }
        }
      }
    }
    
    // Initialize particles
    const init = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ 
        background: 'linear-gradient(to bottom, #0a192f, #0d2147)' 
      }}
    />
  );
}

export default Particles;