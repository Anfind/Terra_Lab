document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('toggleButton');
  const menuContent = document.querySelector('.menu-content');
  const content = document.querySelector('.content');

  toggleButton.addEventListener('click', function() {
      if (sidebar.style.width === '200px') {
          sidebar.style.width = '60px';
          menuContent.style.display = 'none';
          content.style.marginLeft = '60px';
      } else {
          sidebar.style.width = '200px';
          menuContent.style.display = 'flex';
          content.style.marginLeft = '200px';
      }
  });

  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          content.classList.add('blur');
      } else {
          content.classList.remove('blur');
      }
  });
});