jQuery(document).ready(function () {
  jQuery("#menu").load("header.html", function (response, status) {
    /* Optional, but consider revising this function to alert on error */
    if (status === "error") {
      alert("Failed to load header.html");
    } else {
      alert("Success!");
    }
  });
});
