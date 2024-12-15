document.querySelectorAll('.toggle-paragraph').forEach((toggle) => {
    toggle.addEventListener('click', () => {
        const paragraph = toggle.nextElementSibling;
        if (paragraph.classList.contains('hidden')) {
            paragraph.classList.remove('hidden');
        } else {
            paragraph.classList.add('hidden');
        }
    });
});
