window.onload = function () {
    $(document.querySelector(".nav_bar")).load("../wrapper/nav_wrapper.html");
    $(document.querySelector(".footer")).load("../wrapper/footer_wrapper.html");
      
    var mHtml = $("html");
    mHtml.animate({scrollTop : 0},10)

}

