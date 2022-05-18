document.addEventListener("mousemove", (e) => {
  const start = document.querySelector("b");
  start.style.left = e.pageX + "px";
  start.style.top = e.pageY + "px";
  console.log(e);
});

document
  .querySelector(".email")
  .addEventListener("click", () =>
    navigator.clipboard.writeText("muslimuwitondanishema@gmail.com")
  );
