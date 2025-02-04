document.addEventListener('DOMContentLoaded', function() {
  const projectLinks = document.querySelectorAll('#projects a');
  
  projectLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      this.style.color = 'blue';
    });
    
    link.addEventListener('mouseout', function() {
      this.style.color = '';
    });
  });
});
