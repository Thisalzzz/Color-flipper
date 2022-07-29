const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "yellow", "black", "blue","pink","purple","brown","orange"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click",function () {
    const randomNumber = randomNumbergen();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    


});

randomNumbergen = () => {
    return Math.floor(Math.random() * 10)
}
