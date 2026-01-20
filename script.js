
const menu=document.getElementById('menu');
const navLinks=document.getElementById('navLinks');
menu.addEventListener('click',()=>navLinks.classList.toggle('active'));
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    navLinks.classList.remove('active');
  });
});

/* PROJECT FILTER WITH ANIMATION */
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
        project.style.display = 'block';
      } else {
        project.classList.add('project-hide');
        setTimeout(() => {
          project.style.display = 'none';
        }, 300);
      }
    });
  });
});
const cardLayer = document.querySelector('.card-layer');
const cards = document.querySelectorAll('.card');

cardLayer.addEventListener('mousemove', (e) => {
  const rect = cardLayer.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateY = ((x - centerX) / centerX) * 8;
  const rotateX = -((y - centerY) / centerY) * 8;

  cards.forEach(card => {
    card.style.transform =
      `translateZ(20px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)`;
    card.style.boxShadow =
      `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0,0,0,0.25)`;
  });
});

cardLayer.addEventListener('mouseleave', () => {
  cards.forEach(card => {
    card.style.transform =
      'translateZ(0) rotateX(0) rotateY(0)';
    card.style.boxShadow =
      '0 12px 30px rgba(0,0,0,0.2)';
  });
});

document.querySelectorAll('.skill-card').forEach(card => {

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
  });

});






