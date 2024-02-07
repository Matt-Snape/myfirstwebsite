// Contact form. I researched allowing functionality to open an email following submit
// but this looked complicated and perhaps something we will cover later in the course
// so i dont think i was supposed to add this functionality yet?
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    window.alert("Thanks! I will be in contact soon.");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    contactForm.reset();
  });
});

//walking page has chained animation matching this
$(document).ready(function () {
  $("#mainTitle").fadeIn(2000);
});
