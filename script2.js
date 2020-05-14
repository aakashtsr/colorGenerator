const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  let random = "#" + Math.floor(Math.random() * 12345678).toString(16);

  color.textContent = random;
  document.body.style.backgroundColor = random;
  document.querySelector("a").style.color = random;
  document.querySelector("h4").style.color = random;
});
