// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Visitor Counter using CountAPI
const updateVisitorCount = async () => {
    try {
        const response = await fetch('https://api.countapi.xyz/hit/mattfelber.portfolio/visits');
        const data = await response.json();
        document.getElementById('visitor-count').textContent = data.value;
    } catch (error) {
        console.error('Error updating visitor count:', error);
    }
};

// Initialize visitor counter
document.addEventListener('DOMContentLoaded', updateVisitorCount);
