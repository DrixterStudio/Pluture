// Jiwa terbang ngikutin mouse
       document.addEventListener('DOMContentLoaded', function() {
    const soul1 = document.querySelector('.soul-1');
    const soul2 = document.querySelector('.soul-2');
    

    function playIntroAnimation() {
        
        soul1.style.left = '-100px';
        soul1.style.top = '50%';
        soul2.style.right = '-100px';
        soul2.style.top = '50%';
        
        
        const introDuration = 1500; // 1.5 seconds
        const startTime = Date.now();
        
        function animateIntro() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / introDuration, 1);
            
            
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            
           
            soul1.style.left = `${-100 + (window.innerWidth/2 - 100) * easedProgress}px`;
            soul2.style.right = `${-100 + (window.innerWidth/2 - 100) * easedProgress}px`;
            
            
            const floatOffset = Math.sin(elapsed/300) * 20;
            soul1.style.transform = `translateY(${floatOffset}px)`;
            soul2.style.transform = `translateY(${-floatOffset}px)`;
            
            if (progress < 1) {
                requestAnimationFrame(animateIntro);
            } else {
                
                soul1.style.transition = 'transform 0.3s ease-out';
                soul2.style.transition = 'transform 0.3s ease-out';
            }
        }
        
        requestAnimationFrame(animateIntro);
    }
    
    
    let mouseX = window.innerWidth/2;
    let mouseY = window.innerHeight/2;
    let soul1X = mouseX;
    let soul1Y = mouseY;
    let soul2X = mouseX;
    let soul2Y = mouseY;
    
    
    let lastMouseX = mouseX;
    let lastMouseY = mouseY;
    let mouseVelX = 0;
    let mouseVelY = 0;
    
   
    const soul1Speed = 0.1;
    const soul2Speed = 0.07;
    const maxSpeed = 30;
    const floatAmplitude = 15;
    const floatSpeed = 0.003;
    
    function updateSoulPositions() {
        
        mouseVelX = mouseX - lastMouseX;
        mouseVelY = mouseY - lastMouseY;
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        
       
        const target1X = mouseX + mouseVelX * 2;
        const target1Y = mouseY + mouseVelY * 2;
        const target2X = mouseX + mouseVelX * 3;
        const target2Y = mouseY + mouseVelY * 3;
        
        
        soul1X += (target1X - soul1X) * soul1Speed;
        soul1Y += (target1Y - soul1Y) * soul1Speed;
        soul2X += (target2X - soul2X) * soul2Speed;
        soul2Y += (target2Y - soul2Y) * soul2Speed;
        
       
        const time = Date.now();
        const float1 = Math.sin(time * floatSpeed) * floatAmplitude;
        const float2 = Math.cos(time * floatSpeed * 1.3) * floatAmplitude;
        
       
        soul1.style.left = `${soul1X}px`;
        soul1.style.top = `${soul1Y + float1}px`;
        soul2.style.left = `${soul2X}px`;
        soul2.style.top = `${soul2Y + float2}px`;
        
        requestAnimationFrame(updateSoulPositions);
    }
    
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    
    document.addEventListener('touchmove', function(e) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
        // e.preventDefault();
    }
    // , { passive: false }
);
    
    
    playIntroAnimation();
    updateSoulPositions();
    
    
    window.addEventListener('resize', function() {
        soul1X = mouseX;
        soul1Y = mouseY;
        soul2X = mouseX;
        soul2Y = mouseY;
    });
});
            
            // Sound
            const downloadBtn = document.getElementById('downloadBtn');
            const popSound = new Audio('data:audio/pop'); // Short pop sound
            
            downloadBtn.addEventListener('click', function() {
                popSound.play();
                // Buat naro link download

                alert('Download started! (Please wait..)');
            });
            
            // Editing
            // const gameDescription = document.getElementById('gameDescription');
            // gameDescription.addEventListener('click', function() {
                //  const newContent = prompt('Edit the game description:', gameDescription.innerHTML);
                // if (newContent !== null) {
                //      gameDescription.innerHTML = newContent;
                // }
            //  });
        // });
        
        function positionSoulsRandomly(soul1, soul2) {
            // Position soul1 randomly
            const x1 = Math.random() * window.innerWidth;
            const y1 = Math.random() * window.innerHeight;
            soul1.style.left = `${x1}px`;
            soul1.style.top = `${y1}px`;
            
            // Position soul2 randomly tapi ga terlalu deket sm soul1
            const x2 = (x1 + 200 + Math.random() * (window.innerWidth - 400)) % window.innerWidth;
            const y2 = (y1 + 200 + Math.random() * (window.innerHeight - 400)) % window.innerHeight;
            soul2.style.left = `${x2}px`;
            soul2.style.top = `${y2}px`;
        }
        
        function moveSoulWithDelay(soul, targetX, targetY, delay) {
            setTimeout(() => {
                const currentX = parseFloat(soul.style.left) || window.innerWidth / 2;
                const currentY = parseFloat(soul.style.top) || window.innerHeight / 2;
                
                const newX = currentX + (targetX - currentX) * 0.05;
                const newY = currentY + (targetY - currentY) * 0.05;
                
                soul.style.left = `${newX}px`;
                soul.style.top = `${newY}px`;
                
                // Melayang efek
                const floatOffset = Math.sin(Date.now() / 1000) * 10;
                soul.style.transform = `translateY(${floatOffset}px)`;
            }, delay);
        }
        document.querySelectorAll('.screenshot').forEach(screenshot => {
            // screenshot.addEventListener('mouseover', function(e) {
            //     e.
            // })
            // screenshot.addEventListener('mouseout', function(e) {
            //     prompt("bebek")
            // })
  screenshot.addEventListener('click', function() {
    // Zoom overlay
    const zoomOverlay = document.createElement('div');
    zoomOverlay.style.position = 'fixed';
    zoomOverlay.style.top = '0';
    zoomOverlay.style.left = '0';
    zoomOverlay.style.width = '100%';
    zoomOverlay.style.height = '100%';
    zoomOverlay.style.backgroundColor = 'rgba(0,0,0,0.9)';
    zoomOverlay.style.display = 'flex';
    zoomOverlay.style.alignItems = 'center';
    zoomOverlay.style.justifyContent = 'center';
    zoomOverlay.style.zIndex = '1000';
    zoomOverlay.style.cursor = 'zoom-out';
    // MONKEY NEGGER MONKEY NIGGGER MONKEY NEGGA
    // Zoomed image
    const zoomedImg = document.createElement('img');
    zoomedImg.src = this.querySelector('img').src;
    zoomedImg.style.maxWidth = '90%';
    zoomedImg.style.maxHeight = '90%';
    zoomedImg.style.objectFit = 'contain';
    zoomedImg.style.borderRadius = '10px';
    zoomedImg.style.boxShadow = '0 0 30px rgba(255,77,77,0.5)';
    
    
    zoomOverlay.appendChild(zoomedImg);
    document.body.appendChild(zoomOverlay);
    
    
    zoomOverlay.addEventListener('click', function() {
      document.body.removeChild(zoomOverlay);
    });
  });
});
