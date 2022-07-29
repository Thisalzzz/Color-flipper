const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function1 = () => {
    let hexcolor = "#";
    for(let i=0; i < 6; i++){
        hexcolor += hex[randomNumbergen2()]    
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor=hexcolor;

});

randomNumbergen2 = () => {
    return Math.floor(Math.random() * hex.length);
}