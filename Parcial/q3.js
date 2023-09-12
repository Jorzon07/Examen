document.addEventListener("DOMContentLoaded", function () {
    const misionLink = document.getElementById("mision-link");
    const visionLink = document.getElementById("vision-link");
    const teamLink = document.getElementById("team-link");
    const misionSection = document.getElementById("mision-section");
    const visionSection = document.getElementById("vision-section");
    const teamSection = document.getElementById("team-section");
    const changeFontSizeButton = document.getElementById("change-font-size");
    const changeFontColorButton = document.getElementById("change-font-color");

    misionLink.addEventListener("click", function (event) {
        event.preventDefault();
        misionSection.classList.remove("hidden");
        visionSection.classList.add("hidden");
        teamSection.classList.add("hidden");
    });

    visionLink.addEventListener("click", function (event) {
        event.preventDefault();
        misionSection.classList.add("hidden");
        visionSection.classList.remove("hidden");
        teamSection.classList.add("hidden");
    });

    teamLink.addEventListener("click", function (event) {
        event.preventDefault();
        misionSection.classList.add("hidden");
        visionSection.classList.add("hidden");
        teamSection.classList.remove("hidden");
    });

    changeFontSizeButton.addEventListener("click", function () {
        
    });

    changeFontColorButton.addEventListener("click", function () {
       
    });
});
