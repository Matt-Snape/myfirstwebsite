// Save button functionality for saved for later page
document.addEventListener("DOMContentLoaded", function () {
  const saveButtons = document.querySelectorAll(".save-btn");
  saveButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const locationId = button.getAttribute("data-location");
      const content = document.getElementById(locationId).innerHTML;
      // Save the content to sessionStorage
      sessionStorage.setItem(locationId, content);
      sessionStorage.setItem(locationId + "-clicked", true);
      // Hide the button after saving
      button.style.display = "none";
      // Count the total number of items saved
      const totalSavedItems = Array.from(saveButtons).reduce((count, btn) => {
        const btnLocationId = btn.getAttribute("data-location");
        return (
          count + (sessionStorage.getItem(btnLocationId + "-clicked") ? 1 : 0)
        );
      }, 0);
      // Show an alert with the total number of items saved
      alert(
        `Location saved successfully! Total items saved: ${totalSavedItems}`
      );
    });
  });
  // Hide the "Save for Later" buttons that have been clicked on a previous visit
  saveButtons.forEach(function (button) {
    const locationId = button.getAttribute("data-location");
    const isButtonClicked = sessionStorage.getItem(locationId + "-clicked");
    if (isButtonClicked) {
      button.style.display = "none";
    }
  });
});

document.getElementById("submitBtn").addEventListener("click", addComment);
// Load existing comments from localStorage
window.addEventListener("load", loadComments);
function addComment() {
  // Get references to the input fields and comments container
  var nameInput = document.getElementById("name");
  var commentInput = document.getElementById("comment");
  var commentsContainer = document.getElementById("comments");
  // Retrieve values from the input fields
  var name = nameInput.value;
  var comment = commentInput.value;

  if (name && comment) {
    var commentElement = document.createElement("div");
    // Set the inner HTML of the comment element with the name and comment
    commentElement.innerHTML = "<strong>" + name + ":</strong> " + comment;
    // Add a class to the comment element for styling
    commentElement.classList.add("comment");
    commentsContainer.appendChild(commentElement);
    // Save comment to localStorage
    saveComment(name, comment);
    // Clear the input fields
    nameInput.value = "";
    commentInput.value = "";
  } else {
    alert("Please enter both your name and comment.");
  }
}

function loadComments() {
  // Get a reference to the container where comments will be displayed
  var commentsContainer = document.getElementById("comments");
  // Retrieve saved comments from sessionStorage or set an empty array if no comments are found
  var savedComments = JSON.parse(sessionStorage.getItem("comments")) || [];
  // Loop through each saved comment and display it in the UI
  savedComments.forEach(function (comment) {
    var commentElement = document.createElement("div");
    commentElement.innerHTML =
      "<strong>" + comment.name + ":</strong> " + comment.comment;

    // Add a class to the comment element for styling
    commentElement.classList.add("comment");

    commentsContainer.appendChild(commentElement);
  });
}
// Comments section on page
function saveComment(name, comment) {
  // Retrieve the existing saved comments from sessionStorage or set an empty array if none exist
  var savedComments = JSON.parse(sessionStorage.getItem("comments")) || [];
  savedComments.push({ name: name, comment: comment });
  sessionStorage.setItem("comments", JSON.stringify(savedComments));
}
// Show hide part of page - the quote
document.getElementById("hideButton").addEventListener("click", function () {
  var quoteElement = document.getElementById("quote");
  if (quoteElement.style.display === "none") {
    quoteElement.style.display = "block";
  } else {
    quoteElement.style.display = "none";
  }
});
// chained animation
$(document).ready(function () {
  $("#mainTitle").fadeIn(2000);
  $("#favoritePlacesTitle").delay(1000).fadeIn(2000);
});
