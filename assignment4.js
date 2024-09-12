
function calculateTax(income, expenses) {
    if(typeof income !== 'number' || typeof expenses !== 'number' || 0 > income || 0 > expenses || expenses > income){
        return  "Invalid Input";
    }else{
        const differance = income - expenses;
        const tax = differance * 20 / 100;
        return tax;
    }
}


function sendNotification(email) {
    if(!email.includes('@') || email.indexOf('@')===0 || email.indexOf('@') === email.length - 1){
        return "Invalid Email";
    }else{
        const [userName, DomainName] = email.split('@') ;
        const sendNotificationMsg = userName + ' ' + 'sent you an email from' + ' ' + DomainName;
        return sendNotificationMsg;
    }
}


function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return  "Invalid Input";
    }else{
        for(let i = 0; i < name.length; i++){
            if(name.charAt(i) >= '0' && name.charAt(i) <= '9'){
                return true;
            }
        }
        return false;
    }
}

// problem 4, dear sir, I took full help to solve distructure function, but I learnt. so you can do anything as punishedment for the P-4.

function calculateFinalScore(obj) {
    if(typeof obj !== "object" || obj === null){
        return  "Invalid Input";
    }
    const {name,  testScore, schoolGrade, isFFamily} = obj;
    if(
        typeof name !== "string" || typeof testScore !== "number" || typeof schoolGrade !== "number" || typeof isFFamily !== "boolean"
    ){ return "Invalid Input"}

    let finalScore = obj.testScore + obj.schoolGrade;
    if(isFFamily){
        finalScore += 20;
    } 
    
    if(finalScore >= 80){
        return true;
    }else{
        return false;
    }
}

function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== "number"){
        return "Invalid Input";
    }

    let TotalTime = 0;
    for(let i = 0; i < waitingTimes.length; i++){
        TotalTime += waitingTimes[i];
    }
    const avgTime = TotalTime / waitingTimes.length;
    const round = Math.round(avgTime);
    const remainPeople = (serialNumber - 1) - waitingTimes.length;
    const remainTime = round * remainPeople;
    return remainTime;
}


