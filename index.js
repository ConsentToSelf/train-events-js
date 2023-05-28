const html = document.documentElement;
const body = document.body;
const container = document.querySelector(".container");
const list = document.querySelector("ul");
const item = document.querySelector("li");

let pause = 200;
// ловим погружение
html.addEventListener("click", handler, true);
body.addEventListener("click", handler, true);
container.addEventListener("click", handler, true);
list.addEventListener("click", handler, true);
item.addEventListener("click", handler, true);

// всплытие

html.addEventListener("click", handler);
body.addEventListener("click", handler);
container.addEventListener("click", handler);
list.addEventListener("click", handler);
item.addEventListener("click", handler);

function handler(event) {
  let ms = (event.timout = event.timeout + pause || 0);
  const temp = event.currentTarget;
  setTimeout((e) => {
    temp.classList.add("another");
    setTimeout((e) => {
      temp.classList.remove("another");
    }, pause);
  }, ms);
}
