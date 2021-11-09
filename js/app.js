

$(".show-sidebar-btn").click(function () {
    $(".sidebar").animate({marginLeft:0});
});

$(".hide-sidebar-btn").click(function () {
    $(".sidebar").animate({marginLeft:"-100%"});
});
function go(url){
    setTimeout(function(){
        location.href = `${url}`
    },500)
};
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
$("#max").click(function(){
    let currentCard = $(this).closest(".card");
    currentCard.toggleClass("full-screen");
    $("#max-i").toggleClass("feather-maximize-2")
    $("#max-i").toggleClass("feather-minimize-2")
})