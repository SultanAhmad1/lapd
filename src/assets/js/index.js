// // Mobile Responsive accordian code

// /**
//  * 1.-) Get the target class on which user click.
//  * parentlevel1, parentlevel2.nextElementSibling
//  */
// console.log("Accordian index js in publich directory");

// var acc = document.querySelectorAll(".accordion");
// console.log("All acc index js", acc);
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     console.log("I am clicked:");
//     this.classList.toggle("active");
//     var panel = this.parentNode.parentNode.nextElementSibling;
//     console.log("Panel:", panel);
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }