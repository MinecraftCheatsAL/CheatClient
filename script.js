/* 1. INTRO & INITIALIZATION LOGIC */
window.onload = function() {
    const introEl = document.getElementById('modern-intro');
    const mainEl = document.getElementById('main');
    
    // Safety timeout to hide intro after 2 seconds
    setTimeout(function() {
        if (introEl) {
            introEl.style.opacity = '0';
            introEl.style.visibility = 'hidden';
            introEl.style.pointerEvents = 'none';
        }
        if (mainEl) {
            mainEl.style.opacity = '1';
        }
    }, 2000);
};

// Clickable cards
function openLink(url){ window.open(url,'_blank'); }

// Custom Cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Particles.js
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        "particles": {
            "number":{"value":80,"density":{"enable":true,"value_area":800}},
            "color":{"value":"#3b82f6"}, // Changed to blue to match your UI
            "shape":{"type":"circle"},
            "opacity":{"value":0.5,"random":true},
            "size":{"value":3,"random":true},
            "line_linked":{"enable":true,"distance":150,"color":"#3b82f6","opacity":0.3,"width":1},
            "move":{"enable":true,"speed":2,"direction":"none","out_mode":"bounce"}
        },
        "interactivity": {
            "detect_on":"canvas",
            "events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"}},
            "modes":{"repulse":{"distance":100},"push":{"particles_nb":4}}
        },
        "retina_detect":true
    });
}

// ScrollReveal animations
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('header h1',{duration:1500, origin:'top', distance:'50px'});
    ScrollReveal().reveal('header p',{duration:1500, origin:'top', distance:'50px', delay:300});
    ScrollReveal().reveal('.card',{duration:1500, origin:'bottom', distance:'50px', interval:200});
}
