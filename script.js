// Clickable cards
function openLink(url) {
    window.open(url, '_blank');
}

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Particles.js configuration
particlesJS("particles-js", {
    "particles": {
        "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#ff3d00"},
        "shape": {"type": "circle"},
        "opacity": {"value": 0.5, "random": true},
        "size": {"value": 3, "random": true},
        "line_linked": {"enable": true, "distance": 150, "color": "#ff3d00", "opacity": 0.3, "width": 1},
        "move": {"enable": true, "speed": 2, "direction": "none", "out_mode": "bounce"}
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "repulse"},
            "onclick": {"enable": true, "mode": "push"}
        },
        "modes": {
            "repulse": {"distance": 100},
            "push": {"particles_nb": 4}
        }
    },
    "retina_detect": true
});

// ScrollReveal animations
ScrollReveal().reveal('header h1', { duration: 1500, origin: 'top', distance: '50px' });
ScrollReveal().reveal('header p', { duration: 1500, origin: 'top', distance: '50px', delay: 300 });
ScrollReveal().reveal('.card', { duration: 1500, origin: 'bottom', distance: '50px', interval: 200 });
