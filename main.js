const bgOne = document.getElementById("bgOne");
const textOne = document.getElementById("textOne");
const textTwo = document.getElementById("textTwo");

bgOne.addEventListener("mouseover", () => {
    textOne.style.textShadow = "0px 1px 30px black";
    textTwo.style.textShadow = "0px 1px 30px black";
});

bgOne.addEventListener("mouseout", () => {
    textOne.style.textShadow = "none";
    textTwo.style.textShadow = "none";
});