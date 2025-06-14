// Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Toggles between menu and close icon
    navbar.classList.toggle('active'); // Toggles the navbar visibility
};

// Highlight active section in navbar on scroll
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove toggle icon and navbar when clicking a navbar link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js for typing effect
const typed = new Typed('.multiple-text', {
    strings: ['Professional Editor,', 'Photographer', 'Designer' , 'Fullstack Developer' , 'Frontend &' ,'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
  
  const projectList = document.getElementById("projectList");
  
  projects.forEach((project) => {
    const div = document.createElement("div");
    div.className = "project-card";
    div.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <p><strong>Tech Stack:</strong> ${project.tech}</p>
      <a href="${project.github}" target="_blank">GitHub</a>
      ${project.live ? `<a href="${project.live}" target="_blank">Live Demo</a>` : ""}
    `;
    projectList.appendChild(div);
  });
  
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  emailjs.sendForm('service_f4p12nh', 'template_va79a8v', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, (error) => {
      alert('Failed to send message. Error: ' + JSON.stringify(error));
    });
});
