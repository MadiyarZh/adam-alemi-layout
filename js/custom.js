// Filter block

$(".checked-year").bind("click", function() {
    $('#selected-year').val(this.value);
});

$( "input[type=radio][name=baz]:checked" ).val();


// Accordion 

// $(".checkbox").click(function () {
//     $('.accordion .contnet').css('max-height', '1px');
// });

// var acc = document.getElementsByClassName("checkbox");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
// }


// Menu Burger

$(function(){
    $('.menu-trigger').on('click', function() {
      $(".menu-trigger").toggleClass('active');
      $("#leftsidebar").toggleClass('responsive');
      $(".left-sidebar").toggleClass('fixed');
      return false;
    });
});