
        // Welcome modal functions
        function enterWebsite() {
            document.getElementById('welcomeModal').classList.add('hidden');
        }

        function exitWebsite() {
            // Redirect to another website (example: Google)
            window.location.href = 'https://www.google.com';
        }

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(26, 26, 46, 0.98)';
                navbar.style.padding = '12px 0';
                navbar.style.boxShadow = '0 5px 30px rgba(138, 43, 226, 0.3)';
            } else {
                navbar.style.background = 'rgba(26, 26, 46, 0.95)';
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 5px 25px rgba(138, 43, 226, 0.2)';
            }
        });

        // Scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            // Function to check if element is in viewport
            function isInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            // Function to handle scroll events
            function handleScroll() {
                const elements = document.querySelectorAll('.animate-left, .animate-right, .animate-up');
                
                elements.forEach(element => {
                    if (isInViewport(element)) {
                        element.classList.add('animate-visible');
                    }
                });
            }

            // Initial check - make sure about section is visible immediately
            const aboutElements = document.querySelectorAll('#about .animate-up');
            aboutElements.forEach(element => {
                element.classList.add('animate-visible');
            });

            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
        });
