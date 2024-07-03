const speed = prompt("How fast are you driving?")

function speedDetector (){
    const speedLimit = 70;
    const kmPerDemeritPoint = 5
    const limitForSuspension = 12

if (speed <= speedLimit) {
    alert("OK!");
} else {
    const demeritPoints = Math.floor((speed - speedLimit)/ kmPerDemeritPoint)
    if (demeritPoints >= limitForSuspension) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
} 

}

speedDetector(speed); 

