document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.classList.add("section-visable");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
})