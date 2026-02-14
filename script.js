document.getElementById('surpriseBtn').addEventListener('click', openSurprise);

function openSurprise() {
    const basePath = window.location.origin + window.location.pathname.replace(/[^\/]*$/, "/");

    // ✅ Create and play audio on first page (direct user interaction)
    const music = new Audio(basePath + 'valentine-music.mp3');
    music.loop = true;
    music.play().catch(e => console.log('Music blocked:', e));

    // Now open the surprise page
    const newPage = window.open("", "_blank");

    newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>My Valentine ❤️</title>
            <style>
                body {
                    margin: 0;
                    font-family: 'Segoe UI', Arial, sans-serif;
                    background-color: #ff1a1a;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    position: relative;
                }
                .container {
                    background: rgba(255, 255, 255, 0.95);
                    padding: 40px;
                    border-radius: 25px;
                    text-align: center;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);
                    max-width: 650px;
                    position: relative;
                    z-index: 10;
                    animation: fadeIn 1.5s ease-in-out;
                }
                h1 {
                    background: linear-gradient(45deg,#ff66b2,#ff1a1a);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    font-size: 36px;
                    margin-bottom: 20px;
                }
                p { font-size:18px; line-height:1.7; margin-top:20px; color:#444; }
                .heart { position:absolute; font-size:20px; animation:float 6s linear infinite; user-select:none; pointer-events:none; }
                @keyframes float { 0% { transform:translateY(0) scale(1); opacity:1;} 50% {transform:translateY(-50vh) scale(1.2);} 100% {transform:translateY(-100vh) scale(1); opacity:0;} }
                @keyframes fadeIn { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
                .side-photo { position:absolute; top:50%; width:220px; height:220px; border:5px solid #ff66b2; border-radius:20px; overflow:hidden; 
                    box-shadow:0 10px 25px rgba(0,0,0,0.3); transform:translateY(-50%); display:flex; justify-content:center; align-items:center; background:white; }
                .side-photo img { width:100%; height:100%; object-fit:cover; display:block; opacity:0; transition:opacity 1s; }
                .left-photo { left:20px; }
                .right-photo { right:20px; }
            </style>
        </head>
        <body>

            <div class="side-photo left-photo">
                <img src="${basePath}photo1.jpg" alt="Photo 1" onload="this.style.opacity=1">
            </div>

            <div class="side-photo right-photo">
                <img src="${basePath}photo2.jpg" alt="Photo 2" onload="this.style.opacity=1">
            </div>

            <div class="container">
                <h1>Happy Valentine’s Day, my love ❤️</h1>
                <p>
                    Every moment with you feels like a beautiful dream I never want to wake up from.<br><br>
                    You are the best thing that ever happened to me.  
                    My heart is always yours — today and forever. 💕<br><br>
                    You are my happiness, my peace, and my forever Valentine. 🌹
                </p>
            </div>

            <script>
                // Floating love & kiss emojis
                const loveEmojis = ['❤️', '💖', '💋', '😘', '💞'];
                function createHeart() {
                    const heart = document.createElement('div');
                    heart.className='heart';
                    heart.textContent = loveEmojis[Math.floor(Math.random()*loveEmojis.length)];
                    heart.style.left = Math.random()*100+'vw';
                    heart.style.fontSize = Math.random()*20+15+'px';
                    heart.style.animationDuration = Math.random()*3+5+'s';
                    document.body.appendChild(heart);
                    setTimeout(()=>heart.remove(),6000);
                }
                setInterval(createHeart, 400);
            <\/script>

        </body>
        </html>
    `);

    newPage.document.close();
}
