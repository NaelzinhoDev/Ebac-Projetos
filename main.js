$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const novaTarefa = $("#novaTarefa").val();
    const novoItem = $("<li></li>");
    $(`<p>${novaTarefa}</p>`).appendTo(novoItem);
    $(novoItem).appendTo("ul");
    $(novoItem).fadeIn();
    $("#novaTarefa").val("");

    $("p").click(function (e) {
      e.preventDefault();
      $(this).css("text-decoration", "line-through");
    });
  });
});
