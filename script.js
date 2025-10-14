
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            const scrollToTop = document.querySelector('.scroll-to-top');
            
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
                scrollToTop.style.display = 'block';
            } else {
                navbar.classList.remove('scrolled');
                scrollToTop.style.display = 'none';
            }
        });

        // Scroll to top functionality
        document.getElementById('scrollToTop').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Animate stats on scroll with enhanced counter
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(stat => {
                        const finalNumber = stat.textContent;
                        const number = parseInt(finalNumber.replace(/\D/g, ''));
                        const suffix = finalNumber.replace(/\d/g, '');
                        let current = 0;
                        const increment = number / 60;
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= number) {
                                stat.textContent = number + suffix;
                                clearInterval(timer);
                            } else {
                                stat.textContent = Math.floor(current) + suffix;
                            }
                        }, 25);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        // Enhanced FAQ functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isOpen = answer.classList.contains('open');
                
                // Close all other FAQs
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('open');
                });
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                });
                
                // Toggle current FAQ
                if (!isOpen) {
                    answer.classList.add('open');
                    question.classList.add('active');
                }
            });
        });

        // Enhanced card hover effects
        const cards = document.querySelectorAll('.carousel-card, .stat-card, .testimonial-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
        });

        // Testimonial carousel auto-scroll (optional)
        const testimonialCarousel = document.querySelector('.testimonial-carousel');
        if (testimonialCarousel) {
            let isScrolling = false;
            
            testimonialCarousel.addEventListener('scroll', () => {
                isScrolling = true;
                setTimeout(() => {
                    isScrolling = false;
                }, 150);
            });
        }

        // Add loading animation to page
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Enhanced button click effects
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                let ripple = document.createElement('span');
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                
                let x = e.clientX - e.target.offsetLeft;
                let y = e.clientY - e.target.offsetTop;
                
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });


       
