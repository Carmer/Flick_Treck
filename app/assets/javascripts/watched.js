$(function() {
  $(document).on("click", ".watched-true-user-watchlist", function(event) {
    event.preventDefault();
    $(this).find(".btn").toggleClass("blue-grey lighten-3")
    $(this).find(".btn").val("watched")
    var updateData = { id: $(this).data("id"), watched: $(this).data("watched") }
    $.post("/user_watchlists/update", updateData, function(railsControllerResponse) {
    });
  });

});
