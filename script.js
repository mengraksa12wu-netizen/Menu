document.getElementById("btn").addEventListener("click", function() {
    let balloonsContainer = document.getElementById("balloons");

    for (let i = 0; i < 10; i++) {
        let balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = (Math.random() * 3 + 2) + "s";
        balloonsContainer.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 4000);
    }
});

function getRandomColor() {
    let colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
}