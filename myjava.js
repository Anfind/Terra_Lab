$(window).scroll(function() {
  if ($(this).scrollTop() > 100) { // Khoảng cách cuộn để kích hoạt hiệu ứng cố định
    $('#header').addClass('scrolled');
  } else {
    $('#header').removeClass('scrolled');
  }
});

  <script>
  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      $('.parallax').css('background-position', 'center ' + -(scrollTop / 2) + 'px');
    })
  });
</script>