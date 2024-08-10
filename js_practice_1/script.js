let rect = document.querySelector("#center");

// e.x == e.clientX true

rect.addEventListener("mousemove", function (e) {
  let rectLocation = rect.getBoundingClientRect();
  let mouseLocationX = e.clientX - rectLocation.left;

  if (mouseLocationX < rectLocation.width / 2) {
    // left side
    let redColor = gsap.utils.mapRange(
      0,
      rectLocation.width / 2,
      255,
      0,
      mouseLocationX
    );

    gsap.to(rect, {
      backgroundColor: `rgb(${redColor},0,0)`,
      ease: Power4,
    });
  } else {
    // right
    let blueColor = gsap.utils.mapRange(
      rectLocation.width / 2,
      rectLocation.width,
      0,
      255,
      mouseLocationX
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${blueColor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: `white`,
    ease: Power4,
  });
});
