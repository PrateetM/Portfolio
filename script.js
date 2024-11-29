

document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
  
    // Add fade-in animation to each project when scrolled into view
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    });
  
    projects.forEach(project => {
      observer.observe(project);
    });
  });
  
  // Add hover animation
  document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('mouseover', () => {
      item.classList.add('hover-animate');
    });
  
    item.addEventListener('mouseout', () => {
      item.classList.remove('hover-animate');
    });
  });

  const texts = ["Designing", "Frontend Developer", "Backend Developer"];
  let index = 0;
  
  function typeEffect() {
    const typingText = document.querySelector(".typing-text");
    if (!typingText) return;
  
    typingText.textContent = texts[index];
    typingText.style.animation = "none"; 
    setTimeout(() => {
      typingText.style.animation = "typing 2s steps(20, end), blink 0.8s step-end infinite"; 
    }, 100); 
  

    index = (index + 1) % texts.length;
  
    setTimeout(typeEffect, 3000); 
  }
  
 
  typeEffect();
  
  
  