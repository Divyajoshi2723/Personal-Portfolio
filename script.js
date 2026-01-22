/* MOBILE MENU */
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    nav.classList.remove("active");
  });
});


/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

/* PROJECT FILTER */
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projects.forEach(project => {
      project.classList.remove('project-show', 'project-hide');

      if (filter === 'all' || project.dataset.category === filter) {
        project.classList.add('project-show');
        project.style.removeProperty('display');
      } else {
        project.classList.add('project-hide');
        setTimeout(() => {
          project.style.display = 'none';
        }, 300);
      }
    });
  });
});

/* HERO CARD TILT */
const cardLayer = document.querySelector('.card-layer');
const cards = document.querySelectorAll('.card');

if (cardLayer && !window.matchMedia("(hover: none)").matches) {
  cardLayer.addEventListener('mousemove', e => {
    const rect = cardLayer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 8;

    cards.forEach(card => {
      card.style.transform =
        `translateZ(20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });

  cardLayer.addEventListener('mouseleave', () => {
    cards.forEach(card => {
      card.style.transform = 'translateZ(0) rotateX(0) rotateY(0)';
    });
  });
}

/* SKILL CARD TILT */
document.querySelectorAll('.skill-card').forEach(card => {

  if (window.matchMedia("(hover: none)").matches) return;

  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 10;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 10;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });

});

/* STICKY HEADER HIDE ON SCROLL */
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // scrolling down
    header.classList.add('hide');
  } else {
    // scrolling up
    header.classList.remove('hide');
  }
 if (nav.classList.contains('active')) {
  lastScrollY = currentScrollY;
  return;
 }
});







