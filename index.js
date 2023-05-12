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

// Email form

document.getElementById('my-form').addEventListener('submit', function(event) {
  event.preventDefault(); // sprečava podnošenje forme

  // Dohvatanje vrednosti iz forme
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Slanje e-poruke putem Email.js
  emailjs.send('service_fo9a1nr', 'template_btfj4vo', {
    to_email: 'proviczeljko@gmail.com',
    from_name: name,
    from_email: email,
    message: message
  }).then(function() {
    alert('Poruka je uspešno poslata!');
  }).catch(function(error) {
    console.error('Došlo je do greške prilikom slanja poruke:', error);
  });
});


