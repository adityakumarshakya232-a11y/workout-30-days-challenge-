let completedDays = localStorage.getItem("completedDays")
    ? parseInt(localStorage.getItem("completedDays"))
    : 0;

let mode = localStorage.getItem("mode")
    ? parseInt(localStorage.getItem("mode"))
    : 6;

document.addEventListener("DOMContentLoaded", () => {
    updateProgress();
});

function showDay(day) {
    document.querySelectorAll(".workout").forEach(section => {
        section.style.display = "none";
    });

    document.getElementById(day).style.display = "block";
}

function completeDay() {
    completedDays++;

    localStorage.setItem("completedDays", completedDays);

    updateProgress();

    if(mode === 6 && completedDays >= 6){
        alert("🔥 WEEK COMPLETE! LEVEL UP!");
        completedDays = 0;
        localStorage.setItem("completedDays", completedDays);
        updateProgress();
    }

    if(mode === 30 && completedDays >= 30){
        alert("🔥 30 DAYS COMPLETE! TRANSFORMATION!");
        completedDays = 0;
        localStorage.setItem("completedDays", completedDays);
        updateProgress();
    }
}

function setMode(days){
    mode = days;
    completedDays = 0;

    localStorage.setItem("mode", mode);
    localStorage.setItem("completedDays", completedDays);

    updateProgress();
}

function resetProgress(){
    localStorage.clear();
    completedDays = 0;
    mode = 6;
    updateProgress();
    alert("System Reset Successful");
}

function updateProgress(){
    document.getElementById("progressText").innerText =
        completedDays + " Days Completed (Mode: " + mode + ")";
}
