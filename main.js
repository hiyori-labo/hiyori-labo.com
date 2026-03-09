document.addEventListener('DOMContentLoaded', () => {
    // Mark elements for reveal
    document.querySelectorAll('section, .work-card').forEach(el => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger animation for work cards
                const delay = entry.target.classList.contains('work-card')
                    ? [...entry.target.parentElement.children].indexOf(entry.target) * 120
                    : 0;
                setTimeout(() => {
                    entry.target.classList.add('is-visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
