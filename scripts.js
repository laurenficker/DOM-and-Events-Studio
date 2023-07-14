// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log('window loaded');

    let altitude = 0;
    let rocketPosX = 0;
    let rocketPosY = 0;


    //BUTTONS
    const takeoff = document.getElementById('takeoff');
    const landing = document.getElementById('landing');
    const abortMission = document.getElementById('missionAbort');

    //AREAS
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    //ROCKET
    const rocket = document.getElementById('rocket');

    takeoff.addEventListener("click", function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result === true) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            altitude = 1000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        });
    
    landing.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        spaceShuttleHeight.innerHTML = altitude;
    });

    abortMission.addEventListener("click", function() {
        let result2 = window.confirm("Confirm that you want to abort the mission.");
        if (result2 === true) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            altitude = 0;
            spaceShuttleHeight.innerHTML = altitude;
        }
    });

    document.addEventListener("click", function(event) {

        if (event.target.id === "left") {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "right") {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px';
        }
        if (event.target.id === "up") {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }
        if (event.target.id === "down") {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude;
        }

    });
});