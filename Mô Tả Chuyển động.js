let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $('#header').addClass('scrolled');
      } else {
        $('#header').removeClass('scrolled');
      }
    });
  
    // Tìm tất cả các li có sub-menu và thêm vào class has-child
    $('.sub-menu').parent('li').addClass('has-child');
  });

  $(document).ready(function() {
    // Xác định vị trí hiện tại của thanh cuộn
    $(window).scroll(function() {
        // Nếu cuộn trang xuống hơn 50px
        if ($(this).scrollTop() > 50) {
            // Thêm class 'scrolled' vào phần header
            $('#header').addClass('scrolled');
            // Thêm class 'scrolled' vào menu chính
            $('#header nav ul#main-menu').addClass('scrolled');
        } else {
            // Nếu cuộn trang lên trên 50px, loại bỏ class 'scrolled'
            $('#header').removeClass('scrolled');
            $('#header nav ul#main-menu').removeClass('scrolled');
        }
    });
});

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