let hagridsHP = 100;
let velociHP = 100;

function voteHagrids() {
    velociHP = velociHP - 10;

    document.getElementById("veloci-hp").textContent = velociHP + " HP";
    document.getElementById("veloci-health").style.width = velociHP + "%";
}

function voteVelociCoaster() {
    hagridsHP = hagridsHP - 10;

    document.getElementById("hagrids-hp").textContent = hagridsHP + " HP";
    document.getElementById("hagrids-health").style.width = hagridsHP + "%";
}