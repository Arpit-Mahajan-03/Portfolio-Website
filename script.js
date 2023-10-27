// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetElement.offsetTop - 50,
            });
        }
    });
});

// Highlight navigation links as you scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        if (
            scrollPosition >= section.offsetTop - 100 &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ) {
            const targetId = section.getAttribute('id');
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${targetId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
