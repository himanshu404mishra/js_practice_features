window.addEventListener("mousemove", function (e) {
  let rect = this.document.querySelector("#rect");

  let xVal = gsap.utils.mapRange(
    0,
    this.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    this.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    e.clientX
  );
  gsap.to("#rect", {
    left: xVal,
    ease: Power3,
  });
});
