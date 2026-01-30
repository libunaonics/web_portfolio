// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');

        // Trigger text animations after loading screen hides
        document.querySelectorAll('.fade-in-up').forEach(el => {
            el.classList.add('animate');
        });

    }, 1500);
});

// Theme Toggle + Text Animation Retrigger
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');
const fadeElements = document.querySelectorAll('.fade-in-up');

themeToggle.addEventListener('click', () => {
    // Toggle theme
    body.classList.toggle('dark');
    body.classList.toggle('light');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    // Re-trigger fade animations
    fadeElements.forEach(el => {
        el.classList.remove('animate');          
        void el.offsetWidth;  // force reflow
        el.classList.add('animate');             
    });
});

// Navigation Active State
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
