document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        alert("You clicked on " + this.innerText);
      });
    });
  });
  