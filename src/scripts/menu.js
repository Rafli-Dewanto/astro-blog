document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
});

// Check if element is in view
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add or remove class on scroll
var fadeOnScroll = document.querySelectorAll('.fade-on-scroll');
function onScroll() {
    for (var i = 0; i < fadeOnScroll.length; i++) {
        if (isElementInViewport(fadeOnScroll[i])) {
            if (!fadeOnScroll[i].classList.contains('fade-in-left-to-right')) {
                fadeOnScroll[i].classList.add('fade-in-left-to-right');
            }
        } else {
            fadeOnScroll[i].classList.remove('fade-in-left-to-right');
        }
    }
}
window.addEventListener('scroll', onScroll);

