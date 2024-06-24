window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.fade-in');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    elements.forEach(function(element) {
        observer.observe(element);
    });

    var links = document.querySelectorAll('nav a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            document.querySelectorAll('.container').forEach(function(section) {
                section.classList.add('hidden');
            });
            targetSection.classList.remove('hidden');
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });
});
