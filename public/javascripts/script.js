$(function() {

  $("form.delete").submit(function(event) {
    event.preventDefault();
    event.stopPropagation();

    var ok = confirm("Are you sure you want to delete this?");
    if (ok) {
      this.submit();
    }
  });

});