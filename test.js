function waitingTime(waitingTimes, serialNumber) {
    // Validate the inputs
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number") {
        return "Invalid Input";
    }

    // Calculate the total time of interviews that have already taken place
    let totalTime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totalTime += waitingTimes[i];
    }

    // Calculate the average time
    const avgTime = totalTime / waitingTimes.length;

    // Calculate the remaining number of people to be interviewed before Ishrat
    const remainingPeople = serialNumber - waitingTimes.length;

    // Calculate the remaining time for Ishrat based on the average time and remaining people
    const remainTime = avgTime * remainingPeople;

    return remainTime;
}

// const result = waitingTime([3, 5, 7, 11, 6], 10);
// console.log(result); // Should output 24
