window.addEventListener('scroll', function() {
    const section2 = document.getElementById('section2');
    const zeus = document.getElementById('zeus');

    // Check if section2 is in view
    const rect = section2.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        zeus.classList.add('scrolled');
    } else {
        zeus.classList.remove('scrolled');
    }
});
