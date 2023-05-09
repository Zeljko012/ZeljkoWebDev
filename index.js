const navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({behavior: 'smooth'});
  });
});


function redirectToPage() {
  window.location.href = "https://www.example.com"; // zamijenite sa stvarnom URL adresom ciljne stranice
}



function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}