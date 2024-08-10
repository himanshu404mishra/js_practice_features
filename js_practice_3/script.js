// throtoling - kisi particular code ke no of execution ko kam kardena

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;

      return func(...args);
    }
  };
};

const rotatedeg = [8, 5, -8, 10, -6, -2, 8, -2, 12, 10, -8, -6, 8, 4, -12, 12, -8];
let i = 0
document.querySelector("#center").addEventListener(
  "mousemove",
  throttleFunction((e) => {
    // our less repetation code
    const div = document.createElement("div");

    div.classList.add("imagediv");
    div.style.left = e.clientX + "px";
    div.style.top = e.clientY + "px";
    if(i>rotatedeg.length){
      i=0
    }else{
      div.style.transform= `rotate(${rotatedeg[i]}deg)`;
    i++
    }
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );

    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
      y: 0,
      ease: Power1,
      duration: .8,
    });
    gsap.to(img, {
      y: "150%",
      delay: .8,
      duration: .8,
      ease: Power3,
    });
    setTimeout(() => {
      div.remove();
    }, 2000);
  }, 200)
);
