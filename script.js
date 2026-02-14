document.getElementById('openSurpriseBtn').addEventListener('click', openSurprise);

function openSurprise() {
    const basePath = window.location.origin + window.location.pathname.replace(/[^\/]*$/, "/");

    // Play music immediately
    const music = new Audio(basePath + 'valentine-music.mp3');
    music.loop = true;
    music.play().catch(e => console.log('Music blocked:', e));

    // Open new surprise page
    const newPage = window.open("", "_blank");

    newPage.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
                    background: rgba(255,255,255,0.95);
                    padding: 30px 15px;
                    border-radius: 25px;
                    text-align: center;
                    box-shadow: 0 15px 40px rgba(0,0,0,0.5);
                    max-width: 90%;
                    position: relative;
                    z-index: 10;
                    animation: fadeIn 1.5s ease-in-out;
                }
                h1 {
                    font-size: 2rem;
                    background: linear-gradient(45deg,#ff66b2,#ff1a1a);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 20px;
                }
                p { font-size: 1rem; line-height: 1.6; margin-top: 15px; color:#444; }
                button {
                    margin-top: 20px;
                    padding: 12px 25px;
                    font-size: 1rem;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    background: #ff66b2;
                    color: white;
                    transition: 0.3s;
                }
                button:hover { background: #ff3385; }
                .heart { position:absolute; font-size:20px; animation:float 6s linear infinite; user-select:none; pointer-events:none; }
                @keyframes float { 0% { transform:translateY(0) scale(1); opacity:1;} 50% {transform:translateY(-50vh) scale(1.2);} 100% {transform:translateY(-100vh) scale(1); opacity:0;} }
                @keyframes fadeIn { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }

                /* Surprise photo */
                .photo-container {
                    margin-top: 20px;
                    position: relative;
                    width: 100%;
                    max-width: 350px;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.4);
                    background: white;
                    margin-left:auto; margin-right:auto;
                }
                .photo-container img { width: 100%; display: block; }
                .photo-text {
                    position: absolute;
                    bottom: 15px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #ff1a1a;
                    font-size: 1.2rem;
                    font-weight: bold;
                    text-align: center;
                }

                /* Responsive */
                @media (max-width:480px){
                    h1 { font-size: 1.5rem; }
                    p { font-size: 0.9rem; }
                    .photo-container { max-width: 250px; }
                    .photo-text { font-size: 1rem; }
                    button { font-size: 0.85rem; padding: 8px 18px; }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Happy Valentine’s Day, my love ❤️</h1>
                <p>Every moment with you feels like a beautiful dream I never want to wake up from. 💕</p>

                <!-- Surprise photo -->
                <div class="photo-container">
                    <img src="${basePath}photo1.jpg" alt="I Love You Baba ❤️💋">
                    <div class="photo-text">I Love You Baba ❤️💋</div>
                </div>

                <!-- Another surprise button -->
                <button id="anotherSurprise">Another surprise Babaa</button>
            </div>

            <script>
                // Floating love & kiss emojis
                const loveEmojis = ['❤️','💖','💋','😘','💞'];
                function createHeart() {
                    const heart = document.createElement('div');
                    heart.className='heart';
                    heart.textContent = loveEmojis[Math.floor(Math.random()*loveEmojis.length)];
                    heart.style.left = Math.random()*100+'vw';
                    heart.style.fontSize = (window.innerWidth < 480 ? Math.random()*10+10 : Math.random()*20+15)+'px';
                    heart.style.animationDuration = Math.random()*3+5+'s';
                    document.body.appendChild(heart);
                    setTimeout(()=>heart.remove(),6000);
                }
                setInterval(createHeart,400);

                // Button action: reload page for another surprise
                document.getElementById('anotherSurprise').addEventListener('click',()=>{
                    location.reload();
                });
            </script>
        </body>
        </html>
    `);

    newPage.document.close();
}

