document.addEventListener("DOMContentLoaded", function () {
  const savedLocation1Content = sessionStorage.getItem("location1");
  document.getElementById("savedLocation1").innerHTML = savedLocation1Content;

  const savedLocation2Content = sessionStorage.getItem("location2");
  document.getElementById("savedLocation2").innerHTML = savedLocation2Content;

  const savedLocation3Content = sessionStorage.getItem("location3");
  document.getElementById("savedLocation3").innerHTML = savedLocation3Content;

  // Remove the "Save for Later" buttons from the loaded content
  document.querySelectorAll(".save-btn").forEach(function (button) {
    button.remove();
  });
});

//walking page has chained animation matching this
$(document).ready(function () {
  $("#mainTitle").fadeIn(2000);
});
