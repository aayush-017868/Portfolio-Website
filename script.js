// All the JavaScript functions are defined here
//Typed Animation Function
const textArray = ["A Programmer..", "Developer..", "Learner.."]; // Add your strings here
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
  // var currentYear = new Date().getFullYear();
  // document.getElementById("year").textContent = currentYear;
  
  // const nightModeToggle = document.getElementsByClassName('toggle');
  // nightModeToggle.checked = true;
  
// Nigh Mode toggle button
var totalSeperator = document.getElementsByClassName('seperator').length;

var totalExperience = document.getElementsByClassName('exp-card').length;

var totalEducation = document.getElementsByClassName('edu-card').length;

var totalTechnologies = document.getElementsByClassName('tech-card').length;

var totalTechTabs = document.getElementsByClassName('tech-tab').length;

var totalSkills = document.getElementsByClassName('skill-card').length;

var totalProjects = document.getElementsByClassName('proj-card').length;

function toggleNightMode() {
  //This is for body
  document.body.classList.toggle('night-mode'); 
  // This is for seperators
  for(let i = 0; i < totalSeperator; i++){
   document.querySelectorAll('.seperator')[i].classList.toggle('seperator-night');
  }    
  // This is for experience cards
 for(let i = 0; i < totalExperience; i++){
   document.querySelectorAll('.exp-card')[i].classList.toggle('night-card');
   document.querySelectorAll('.exp-card')[i].classList.toggle('border-night');
 } 
  // This is for education cards
 for(let i = 0; i < totalEducation; i++){
   document.querySelectorAll('.edu-card')[i].classList.toggle('night-card');
   document.querySelectorAll('.edu-card')[i].classList.toggle('border-night');
 }    
 // This is for technology cards
for(let i = 0; i < totalTechnologies; i++){
  document.querySelectorAll('.tech-card')[i].classList.toggle('night-card');
  document.querySelectorAll('.tech-card')[i].classList.toggle('border-night');
}    
 // This is for technology tabs
for(let i = 0; i < totalTechTabs; i++){
  document.querySelectorAll('.tech-tab')[i].classList.toggle('night-card');
  document.querySelectorAll('.tech-tab')[i].classList.toggle('border-night');
}    
  // This is for skill cards
  for(let i = 0; i < totalSkills; i++){
    document.querySelectorAll('.skill-card')[i].classList.toggle('night-card');
    document.querySelectorAll('.skill-card')[i].classList.toggle('border-night');
  }
  // This is for project cards
  for(let i = 0; i < totalProjects; i++){
    document.querySelectorAll('.proj-card')[i].classList.toggle('night-card');
    document.querySelectorAll('.proj-card')[i].classList.toggle('border-night');
  }  

}