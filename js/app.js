
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  $(".btn-mode-icon").on("click",function(){
    let current = $(this).hasClass("feather-moon");
    if(current){
        $(this).removeClass("feather-moon").addClass("feather-sun");
    }else{
     $(this).removeClass("feather-sun").addClass("feather-moon");
    };
    $(".white-mode").toggleClass("black-mode");
 });