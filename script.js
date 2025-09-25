// Simple animation (optional)
window.onload = () => {
  const content = document.querySelector(".content");
  content.style.opacity = 0;
  content.style.transform = "translateY(30px)";
  
  setTimeout(() => {
    content.style.transition = "all 3s ease";
    content.style.opacity = 1;
    content.style.transform = "translateY(0)";
  }, 500);
};
