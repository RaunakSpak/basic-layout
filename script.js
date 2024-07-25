
document.addEventListener('DOMContentLoaded', () => {

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    
    const gameCards = document.querySelectorAll('.featured-games .card');
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalBody = modal.querySelector('.modal-body');

    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            const gameTitle = card.querySelector('.card-title').textContent;
            const gameDescription = card.querySelector('.card-text').textContent;
            modalTitle.textContent = gameTitle;
            modalBody.textContent = gameDescription;
            $(modal).modal('show');
        });
    });
});
