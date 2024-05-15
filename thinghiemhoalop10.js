// JavaScript cho mục lục
document.addEventListener("DOMContentLoaded", function() {
    const expandableItems = document.querySelectorAll('.expandable');
    
    expandableItems.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('open');
      });
    });
  })
  
  // Lấy thẻ mục con của toc2
var toc2Items = document.querySelectorAll('.toc2 li');

// Thêm sự kiện click cho từng mục con
toc2Items.forEach(function(item) {
    item.addEventListener('click', function() {
        // Kiểm tra xem toc3 có lớp toc-fixed không
        var toc3 = document.getElementById('toc3');
        var toc3HasFixedClass = toc3.classList.contains('toc-fixed');
        
        // Nếu mục con của toc2 được mở và toc3 không có lớp toc-fixed
        // thì thêm lớp toc-fixed vào toc3
        if (!toc3HasFixedClass) {
            toc3.classList.add('toc-fixed');
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
  var toc4 = document.querySelector(".toc4");
  var toc5 = document.querySelector(".toc5");
  var toc6 = document.querySelector(".toc6");
  var toc7 = document.querySelector(".toc7");

  var headerHeight = document.querySelector("header").offsetHeight;
  
  window.addEventListener("scroll", function() {
      var scrolled = window.scrollY;

      if (scrolled > headerHeight) {
          toc4.style.top = "400px";
          toc5.style.top = "194px";
          toc6.style.top = "194px";
          toc7.style.top = "999px";
      } else {
          toc4.style.top = "400px";
          toc5.style.top = "194px";
          toc6.style.top = "194px";
          toc7.style.top = "999px";
      }
  });
});