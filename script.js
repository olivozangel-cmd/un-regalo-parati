const PASSWORD = "02022009"; 

function playClick() { document.getElementById("snd-click").play(); }
function playTurtleSound() { document.getElementById("snd-turtle").play(); }
function playWhaleSound() { 
    const whaleAudio = document.getElementById("snd-whale");
    whaleAudio.volume = 0.5;
    whaleAudio.currentTime = 0;
    whaleAudio.play(); 
}

function login() {
    const input = document.getElementById("password").value;
    if(input === PASSWORD){
        playClick();
        document.getElementById("login").classList.add("open-envelope");
        setTimeout(() => {
            document.getElementById("login-container").style.display = "none";
            document.getElementById("content").style.display = "block";
            updateCounter();
            document.getElementById("music").play();
        }, 600);
    } else { alert("Contraseña incorrecta 😢"); }
}

function showRoseMessage() {
    alert("Estos últimos días, he visto mucho de ti que verdaderamente me sorprende, eres alguien que cuida mucho de si mismo y eso se me hace muy bonito y un gesto de amor propio, sigue así, y claro me hace falta conocernos más, Pero con lo poco que me has mostrado eso me hace ver qué eres alguien de buen corazón 🌹");
}

function updateCounter() {
    const now = new Date();
    let bday = new Date(now.getFullYear(), 1, 2);
    if (now > bday) bday = new Date(now.getFullYear() + 1, 1, 2);
    const diff = bday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("birthday-counter").innerText = `Faltan ${days} días para tu próximo cumpleaños 🎂`;
}

function showTodayMessage() {
    const todayMsgs = ["Hoy mereces ir con calma. ✨", "No tienes que hacerlo todo perfecto. 💙", "Si hoy fue pesado, mañana puede ser más ligero. 🌈"];
    document.getElementById("message").innerText = todayMsgs[Math.floor(Math.random() * todayMsgs.length)];
}

const messages = {
    dulce: "Me gusta cuando sonríes y tus ojos no son la excepción 💖",
    bonito: "Me gustaría verte hacer lo que más te apasiona en esta vida 🌷",
    sincero: "Tienes una energía que no se la he visto a nadie 💫"
};
function showMessage(type) { document.getElementById("message").innerText = messages[type]; }

function showSadMoments() {
    const container = document.getElementById("sad-moments");
    const text = document.getElementById("sad-text");
    const comfortMessages = ["Respira profundo, todo va a estar bien. 🐢", "Recuerda que después de la tormenta siempre sale el sol. ☀️", "Tu valor no disminuye por un mal día, ¡eres increíble! 🌈"];
    text.innerText = comfortMessages[Math.floor(Math.random() * comfortMessages.length)];
    container.style.display = "block";
}

function pawMessage() {
    document.getElementById("paw-text").innerText = "¡Eres maravillosa! ✨";
    setTimeout(() => document.getElementById("paw-text").innerText = "", 3000);
}

function spawnWhales() {
    playWhaleSound();
    // Generar varias ballenas
    for(let i=0; i<8; i++) {
        setTimeout(() => {
            const whale = document.createElement("div");
            whale.className = "whale-anim"; 
            whale.innerText = "🐳";
            // Posición aleatoria en el ancho de la pantalla
            whale.style.left = Math.random() * 85 + "vw";
            document.body.appendChild(whale);
            
            // Eliminar elemento después de la animación
            setTimeout(() => whale.remove(), 4000);
        }, i * 300);
    }
}