document.querySelectorAll('.menu-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Hentikan scroll default <body>

    const targetId = this.getAttribute('href').substring(1); // e.g. 'about'
    const targetElement = document.getElementById(targetId);

    const container = document.getElementById('right-side');

    // Scroll ke posisi elemen dalam container
    container.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});

const boxes = document.querySelectorAll('.study-box , .projects-box');
boxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    boxes.forEach(otherBox => {
      otherBox.style.opacity = (otherBox === box) ? '1' : '0.5';
    });
  });

  box.addEventListener('mouseleave', () => {
    boxes.forEach(otherBox => {
      otherBox.style.opacity = '1';
    });
  });
});

const sections = document.querySelectorAll("section, div[id]");
const menuLinks = document.querySelectorAll(".menu-link");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        menuLinks.forEach(link => {
          link.classList.toggle("active", link.dataset.target === id);
        });
      }
    });
  },
  {
    threshold: 0.7
  }
);

sections.forEach(section => observer.observe(section));