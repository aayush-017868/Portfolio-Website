// All the JavaScript functions are defined here
//Typed Animation Function
const textArray = ["Programmer..", "Developer..", "Learner.."]; // Add your strings here
let arrayIndex = 0;
let charIndex = 0;

function typeAnimate() {
  const span = document.querySelector('.typeAnimate');
  
  if(charIndex < textArray[arrayIndex].length) {
    span.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeAnimate, 150); // You can adjust typing speed here
  } else {
    // Reset for next string
    charIndex = 0;
    setTimeout(() => {
      span.textContent = '';
      arrayIndex = (arrayIndex + 1) % textArray.length; // Loop back to first string after the last one
      setTimeout(typeAnimate, 100); // Delay between strings
    }, 600); // Delay before erasing the string
  }
}

typeAnimate();



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
  
  
// Nigh Mode toggle button
var totalSkills = document.getElementsByClassName('skill-card').length;
var totalProjects = document.getElementsByClassName('proj-card').length;
var totalEducation = document.getElementsByClassName('edu-card').length;
var totalSeperator = document.getElementsByClassName('seperator').length;
function toggleNightMode() {
  //This is for body
  document.body.classList.toggle('night-mode'); 
  //This is for nav bar
  document.querySelector('.nav').classList.toggle('skill-card-night');
  // This is for skill cards
  for(let i = 0; i < totalSkills; i++){
    document.querySelectorAll('.skill-card')[i].classList.toggle('skill-card-night');
  }
  // This is for project cards
  for(let i = 0; i < totalProjects; i++){
    document.querySelectorAll('.proj-card')[i].classList.toggle('proj-card-night');
  }  
   // This is for education cards
  for(let i = 0; i < totalSkills; i++){
    document.querySelectorAll('.edu-card')[i].classList.toggle('edu-card-night');
  }    
   // This is for seperators
  for(let i = 0; i < totalSeperator; i++){
    document.querySelectorAll('.seperator')[i].classList.toggle('seperator-night');
  }    
}