function like(sectionId) {
  // Retrieve the current like count from sessionStorage or default to 0
  let likeCount =
    parseInt(sessionStorage.getItem(`likeCount_${sectionId}`), 10) || 0;
  // Add one like per click
  likeCount++;
  // Save the updated like count to sessionStorage
  sessionStorage.setItem(`likeCount_${sectionId}`, likeCount);
  // Update the like count display on the page
  const likeCountElement = document.getElementById(`likeCount_${sectionId}`);
  if (likeCountElement) {
    likeCountElement.textContent = likeCount;
  }
}

// Add event listeners for "Like" buttons
document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".like-btn");
  likeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Extract the section ID from the button's data-section attribute
      const sectionId = button.getAttribute("data-section");
      like(sectionId);
    });
  });
});

//main menu dropdown common to all pages
$(".dropdown").hover(
  function () {
    // Toggle display of the dropdown content on hover
    $(this).find(".dropdown-content").show();
  },
  function () {
    // Hide the dropdown content when mouse leaves the dropdown area
    $(this).find(".dropdown-content").hide();
  }
);

// Mouse hover enter and mouse hover leave animations for photo enlarge
$(document).ready(function () {
  $(".image-wrapper").on({
    mouseenter: function () {
      $(this).find("img").stop().animate({ transform: "scale(1.1)" }, 500);
    },
    mouseleave: function () {
      $(this).find("img").stop().animate({ transform: "scale(1)" }, 500);
    },
  });
});
//walking page has chained animation matching this
$(document).ready(function () {
  $("#mainTitle").fadeIn(2000);
});
