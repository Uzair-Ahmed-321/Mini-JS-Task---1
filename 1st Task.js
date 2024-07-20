function changeColor() {
    let colorCode = (Math.random() * 999999);
    colorCode = Math.ceil(colorCode);
    let colorName = `#${colorCode}`;
    console.log(colorCode);
    console.log(colorName);
    document.body.style.backgroundColor = colorName;
}
let Btn = document.getElementById("Btn");
Btn.addEventListener("click", changeColor);
console.log(Btn);