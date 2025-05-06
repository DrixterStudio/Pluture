// Jiwa terbang ngikutin mouse
        document.addEventListener('DOMContentLoaded', function() {
            const soul1 = document.querySelector('.soul-1');
            const soul2 = document.querySelector('.soul-2');
            
            
            // Random position
            positionSoulsRandomly(soul1, soul2);
            
            // Delay jiwa nya
            var x = 0.0
            var y = 0.0
            document.addEventListener('mousemove', function(b) {
                x = b.clientX
                y = b.clientY
            });
           
            function e() {
                moveSoulWithDelay(soul1, x, y, 100);
                moveSoulWithDelay(soul2, x, y, 150);
            }

            setInterval(e, 10)
            
            // Sound
            const downloadBtn = document.getElementById('downloadBtn');
            const popSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...'); // Short pop sound
            
            downloadBtn.addEventListener('click', function() {
                popSound.play();
                // Buat naro link download

                alert('Download started! (Please wait..)');
            });
            
            // Editing
            // const gameDescription = document.getElementById('gameDescription');
            // gameDescription.addEventListener('click', function() {
            //     const newContent = prompt('Edit the game description:', gameDescription.innerHTML);
            //     if (newContent !== null) {
            //         gameDescription.innerHTML = newContent;
            //     }
            // });
        });
        
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