const homeLink = document.getElementById('home_link');
const projectLink = document.getElementById('project_link');
const contactLink = document.getElementById('contact_link');
const main = document.getElementById('main');
const project = document.getElementById('project');
const contact = document.getElementById('contact');

/* HOME LINK */
homeLink.addEventListener('click', () => {
    main.classList.remove('hidden');
    project.classList.add('hidden');
    contact.classList.add('hidden');

    homeLink.classList.add('active_link');
    projectLink.classList.remove('active_link');
    contactLink.classList.remove('active_link');
})

/* PROJECT LINK */
projectLink.addEventListener('click', () => {
    project.classList.remove('hidden');
    main.classList.add('hidden');
    contact.classList.add('hidden');

    projectLink.classList.add('active_link');
    homeLink.classList.remove('active_link');
    contactLink.classList.remove('active_link');
})

/* CONTACT LINK */
contactLink.addEventListener('click', () => {
    contact.classList.remove('hidden');
    main.classList.add('hidden');
    project.classList.add('hidden');

    contactLink.classList.add('active_link');
    homeLink.classList.remove('active_link');
    projectLink.classList.remove('active_link');
})