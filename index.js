var answer;

$(document).ready(function () {
  $("#submit").click(function () {
    $(".containerOne").addClass("hidden");
    $(".containerTwo").removeClass("hidden");
  });
});

$(document).ready(function(){
    $(".btn").click(function(){
        $(".btn").removeClass("selected");
        $(this).addClass("selected");
        answer = $(this).attr("id");
        $("#text").text("You selected " + answer + " out of 5");
    });
});




  