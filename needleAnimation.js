// Handling animation for the compass needle

needle = document.getElementById("needle");
needle.addEventListener("transitionend", rotateNeedle);

addEventListener("load", rotateNeedle);

function rotateNeedle()
{
    const turns = 10 * Math.random() - 5;
    needle.style.transform = `rotate(${turns}turn)`;
}