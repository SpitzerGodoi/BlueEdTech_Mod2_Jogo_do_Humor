const nome = document.getElementById("nome");
let btn = document.getElementById("btn");
const img = document.getElementById("goku");

btn.addEventListener("click", () => {
  if (btn.value == "transformar") {
    nome.innerText = "Super Saiyajin";
    img.src = "./assets/img/super1.PNG";
    btn.value = "transformar1";
  } else if (btn.value == "transformar1") {
    nome.innerText = "Super Saiyajin 2";
    img.src = "./assets/img/super2.png";
    btn.value = "transformar2";
  } else if (btn.value == "transformar2") {
    nome.innerText = "Super Saiyajin 3";
    img.src = "./assets/img/super3.png";
    btn.value = "transformar3";
  } else if (btn.value == "transformar3") {
    nome.innerText = "Super Saiyajin Deus";
    img.src = "./assets/img/gokudeus.png";
    btn.value = "transformar4";
  } else if (btn.value == "transformar4") {
    nome.innerText = "Super Saiyajin Deus Blue";
    img.src = "./assets/img/gokudeusblue.png";
    btn.value = "inicio";
  } else {
    nome.innerText = "Son Goku";
    img.src = "./assets/img/songoku.PNG";
    btn.value = "transformar";
  }
});
