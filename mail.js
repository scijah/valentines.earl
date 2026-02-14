// Select buttons and heading
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const title = document.querySelector(".envelope-screen h1"); // make sure this is selected

// Initial scale for Yes button
let yesScale = 1;

// Prepare Yes button for scaling
yesBtn.style.position = "relative";
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

/* --- No button click: scale Yes button --- */
noBtn.addEventListener("click", () => {
    yesScale += 0.2;

    if (yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    } else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});

/* --- Yes button click: change heading then redirect --- */
yesBtn.addEventListener("click", () => {
    // 1. Update the heading immediately
    title.textContent = "Yippeee ♡⸜(˶˃ ᵕ ˂˶)⸝♡";

    // 2. Wait 500ms then redirect
    setTimeout(() => {
        window.location.href = "letter.html";
    }, 500); // 0.5 seconds
});
