// Select some elements...

// align the main header to the left
let header = document.querySelector("#page-header");
header.style.textAlign = "left";

//add rounded corners to dog images
let dogImages = document.querySelectorAll(".dog-image");
for (let i = 0; i < dogImages.length; i++) {
  dogImages[i].style.borderRadius = "50px";

  //flip images of dogs upside down
  dogImages[i].style.transform = "scaleY(-1)";
}

//align dog names to the left
let dogNames = document.querySelectorAll(".dog-name");
for (let i = 0; i < dogNames.length; i++) {
  dogNames[i].style.textAlign = "left";
}
