function changeColor() {
    let colorCode = (Math.random() * 999999);
    colorCode = Math.ceil(colorCode);
    let colorName = `#${colorCode}`;
    console.log(colorCode);
    console.log(colorName);
    document.body.style.backgroundColor = colorName;
}
let btn = document.getElementById("btn");
btn.addEventListener("click", RGB);
console.log(btn);



function RGB() {
    let red = Math.round(Math.random() * 99);
    let green = Math.round(Math.random() * 99);
    let blue = Math.round(Math.random() * 99);
    let colorRGB = `rgb(${red},${green},${blue})`;
    console.log(colorRGB)
    document.body.style.backgroundColor = colorRGB;
}