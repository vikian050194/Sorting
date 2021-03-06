import Visualizer from "./visualizer";

document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("start").addEventListener("click", () => {
        const countOfElements = parseInt(document.getElementById("count").value || "5");
        const animationDuration = parseInt(document.getElementById("duration").value || "2");
        const animationTypes = document.getElementById("type");
        const animationType = animationTypes.options[animationTypes.selectedIndex].value;
        Visualizer({
            animationDuration,
            countOfElements,
            animationType
        });
    });

    document.getElementById("stop").addEventListener("click", () => {
        document.getElementsByClassName("main-container")[0].innerHTML = "";
    });
});