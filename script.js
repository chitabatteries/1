// Counter Animation for Stats
const stats = document.querySelectorAll('.stat-number');
const statsSection = document.querySelector('.stats');

const animateStats = () => {
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const count = parseInt(stat.innerText);
        const increment = target / 200;

        if (count < target) {
            stat.innerText = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.innerText = target;
        }
    });
};

// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('#hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Animate on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if(elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Service Cards Hover Effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Testimonials Slider
const initTestimonialSlider = () => {
    const slider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
};

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initTestimonialSlider();
    animateOnScroll();
});

// Speed Indicator Animation - משופר
const speedFill = document.querySelector('.speed-fill');
const speedIndicator = document.querySelector('.speed-indicator');

function animateSpeedMeter() {
    let currentHeight = 20;
    const maxHeight = 90;
    
    function updateHeight() {
        if (currentHeight < maxHeight) {
            currentHeight += 2;
            speedFill.style.height = `${currentHeight}%`;
            requestAnimationFrame(updateHeight);
        } else {
            setTimeout(() => {
                speedFill.style.height = '20%';
                currentHeight = 20;
                setTimeout(updateHeight, 500);
            }, 1000);
        }
    }

    updateHeight();
}

// הפעלת האנימציה כל 5 שניות
setInterval(animateSpeedMeter, 5000);
// הפעלה ראשונית
animateSpeedMeter();

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// סגירת התפריט בלחיצה על לינק
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Cheetah Spots Animation on Scroll
window.addEventListener('scroll', () => {
    const spots = document.querySelector('.cheetah-spots');
    const scrolled = window.pageYOffset;
    spots.style.transform = `translateY(${scrolled * 0.1}px)`;
});

// Cheetah Character Interactions
const cheetahCharacter = document.querySelector('.cheetah-character');
let isJumping = false;

cheetahCharacter.addEventListener('click', () => {
    window.location.href = 'tel:+972541234567';
});

// Random Cheetah Movements
function randomMovement() {
    const messages = [
        'צריכים מצבר חדש? 🔋',
        'שירות מהיר במיוחד! ⚡',
        'אני כאן לעזור! 🚗',
        'תקועים? נגיע תוך 30 דקות! 🏃'
    ];

    const message = document.querySelector('.cheetah-message');
    
    setInterval(() => {
        if (!isJumping) {
            message.textContent = messages[Math.floor(Math.random() * messages.length)];
            cheetahCharacter.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                cheetahCharacter.style.transform = 'scale(1)';
            }, 200);
        }
    }, 5000);
}

// הפעלת תנועות רנדומליות
randomMovement();

// טיפול בלחיצה על כפתור CTA
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
        // אם רוצים למנוע את ברירת המחדל של הלינק
        // e.preventDefault();
        window.location.href = 'tel:+972541234567';
    });
});

// פונקציה פשוטה לפתיחת WhatsApp
function openWhatsApp() {
    // החלף למספר הטלפון האמיתי שלך
    const phoneNumber = '972541234567'; // לדוגמה: 972541234567
    const message = 'שלום, הגעתי מהאתר של צ׳יטה מצברים ואשמח לקבל שירות';
    const url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
    window.open(url, '_blank');
}

// הוספת מאזין לחיצה כשהדף נטען
document.addEventListener('DOMContentLoaded', function() {
    const cheetahElement = document.querySelector('.cheetah-character');
    if (cheetahElement) {
        cheetahElement.addEventListener('click', function() {
            openWhatsApp();
        });
    }
});

// בדיקה בקונסול שהקוד עובד
console.log('Cheetah click handlers initialized');