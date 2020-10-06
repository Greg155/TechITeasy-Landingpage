
// const services_p = document.querySelectorAll(".services__word");
// console.log(services_p);

// for(const element of services_p){
//     element.addEventListener('mouseover', function(){
//         element.style.color = "red";
//     })
// }

$(function () {
    $("#testCursor").mousemove(function (e) {
      $(".cursor").show().css({
        "left": e.clientX,
        "top": e.clientY
      });
    }).mouseout(function () {
      $(".cursor").hide();
    });
  });