// All the JavaScript functions are defined here



//To refresh the page and reach the top on clicking on "Aayush"
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
  
    scrollToTopButton.addEventListener("click", function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  
      setTimeout(function() {
        window.location.reload();
      }, 1000);
    });
  });
  
  
  
  //To make the three dots section and its options available and function

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

  
  
  
  //To put animation to the about section
  document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll(".hidden-paragraph");
  
    const options = {
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, options);
  
    paragraphs.forEach(paragraph => {
      observer.observe(paragraph);
    });
  });
  
  
  
//   // To redirect to the calculator project page
//   function redirecttoCalculator() {
//       window.location.href = "https://iamAayushbiswas.github.io/Calculator/";
//   }
  
//   // To redirect to the flipkart clone project project page
//   function redirecttoFlipkart() {
//       window.location.href = "https://iamAayushbiswas.github.io/Flipkart-Clone-Project/";
//   }
  
//   // To redirect to the currency converter project project page
//   function redirecttoCurrencyConverter() {
//     window.location.href = "https://iamAayushbiswas.github.io/CurrencyConverter/";
//   }
  
//   // To redirect to the Bhagvadgita Search Engine project project page
//   function redirecttoBhagvadgita() {
//     window.location.href = "https://iamAayushbiswas.github.io/BhagvadGeetaSearchEngine/";
//   }
  
  
  //To send mail
  function sendEmail() {
      var emailAddress = "aayushpatle01@gmail.com";
      var subject = document.getElementById("subject").textContent;
      var body = document.getElementById("message").textContent;
  
      // Construct the mailto link
      var mailtoLink = "mailto:" + emailAddress + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
      // Open the user's default email client
      window.location.href = mailtoLink;
  }
  
  
  // To put the current year in the copyright
  var currentYear = new Date().getFullYear();
  document.getElementById("year").textContent = currentYear;
  
  
    