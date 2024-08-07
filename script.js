// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Highlight active navigation link
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Thank you for your message. We will get back to you soon!");
    this.reset();
  });

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

function enableSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", enableSmoothScrolling);


// blog

document.addEventListener('DOMContentLoaded', function () {
  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  const postContents = document.querySelectorAll('.post-content');

  readMoreBtns.forEach((btn, index) => {
    btn.addEventListener('click', function () {
      const content = postContents[index];
      content.classList.toggle('expanded');
      btn.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
  });

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  const postBtn = document.getElementById('post-btn');
  const commentsList = document.querySelector('.comments-list');
  const commentInput = document.querySelector('.comment-input');

  postBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    if (name && surname) {
      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.textContent = `Submitted by: ${name} ${surname}`;
      commentsList.appendChild(newComment);
    }
  });

  const commentSubmitBtn = document.querySelector('.comment-submit-btn');

  commentSubmitBtn.addEventListener('click', function () {
    const commentText = commentInput.value.trim();
    if (commentText) {
      const commentDiv = document.createElement('div');
      commentDiv.className = 'comment';
      commentDiv.textContent = commentText;
      commentsList.appendChild(commentDiv);
      commentInput.value = ''; // Clear input
    }
  });
});
