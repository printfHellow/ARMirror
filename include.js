// Function to load HTML file into element
function loadHTML(elementId, file) {
    return fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

// Wait for DOM and load header/footer
document.addEventListener('DOMContentLoaded', function () {
    // Load header and footer first
    Promise.all([
        loadHTML('header-placeholder', 'header.html'),
        loadHTML('footer-placeholder', 'footer.html')
    ]).then(() => {
        // After both are loaded, initialize all scripts
        initializeAllScripts();
    });
});

// Initialize all scripts after header/footer loaded
function initializeAllScripts() {
    initializeHeaderScripts();
    initializeFooterScripts();
    initializeCarousel();
    initializeProducts();
}

// Initialize header scripts
function initializeHeaderScripts() {
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value;
                if (searchTerm) {
                    console.log('Tìm kiếm:', searchTerm);
                    // Navigate to products page with search
                    window.location.href = 'products.html?search=' + encodeURIComponent(searchTerm);
                }
            }
        });
    }

    // Cart button click
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', function () {
            console.log('Mở giỏ hàng');
            // Navigate to cart page
            alert('Chức năng giỏ hàng đang được phát triển!');
        });
    }

    // Points button click
    const pointsBtn = document.querySelector('.points-btn');
    if (pointsBtn) {
        pointsBtn.addEventListener('click', function () {
            console.log('Xem điểm thưởng');
            alert('Bạn có 500 điểm thưởng!');
        });
    }

    // Menu button click
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            console.log('Mở menu người dùng');
            alert('Menu người dùng đang được phát triển!');
        });
    }

    // Contact button click
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function () {
            console.log('Liên hệ');
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Initialize footer scripts
function initializeFooterScripts() {
    // Scroll to top functionality
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Cảm ơn bạn đã đăng ký nhận tin với email: ' + email);
                this.reset();
            }
        });
    }
}

// Initialize carousel
function initializeCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;

    if (totalSlides === 0) return; // Exit if no carousel

    let autoSlideInterval;

    // Show specific slide
    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Event listeners for carousel buttons
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });

    // Auto slide every 5 seconds
    autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause auto slide on hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(nextSlide, 5000);
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
}

// Initialize products functionality
function initializeProducts() {
    // View More button click - Navigate to products page
    const viewMoreBtn = document.querySelector('.view-more-btn');
    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', function () {
            console.log('Xem thêm sản phẩm');
            window.location.href = 'products.html';
        });
    }

    // Product card click - Navigate to detail page
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function () {
            const productName = this.querySelector('h3').textContent;
            console.log('Clicked on:', productName);
            // Navigate to product detail page
            window.location.href = 'product-detail.html';
        });
    });

    // Collection cards hover effect
    const collectionCards = document.querySelectorAll('.collection-card');
    collectionCards.forEach(card => {
        card.addEventListener('click', function () {
            const collectionName = this.querySelector('h3').textContent;
            console.log('Clicked collection:', collectionName);
            // Navigate to products page with collection filter
            window.location.href = 'products.html?collection=' + encodeURIComponent(collectionName);
        });
    });

    // Intro buttons
    const introBtns = document.querySelectorAll('.intro-btn');
    introBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const sectionTitle = this.closest('.intro-section').querySelector('h2').textContent;
            if (sectionTitle.includes('ARTMIRROR')) {
                window.location.href = 'about.html';
            } else if (sectionTitle.includes('MISSION')) {
                window.location.href = 'about.html#mission';
            }
        });
    });
}