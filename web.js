// script.js
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(`#${link.getAttribute('href').slice(1)}`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add event listener to header
const header = document.querySelector('header');
header.addEventListener('mouseover', () => {
  header.classList.add('hover');
});

header.addEventListener('mouseout', () => {
  header.classList.remove('hover');
});

// Add event listener to sections
sections.forEach((section) => {
  section.addEventListener('mouseover', () => {
    section.classList.add('hover');
  });

  section.addEventListener('mouseout', () => {
    section.classList.remove('hover');
  });
});
