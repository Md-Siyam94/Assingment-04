//----------Number-1

function calculateTax(income, expenses) {

    const gain = income;
    const invest = expenses;
    
    if( gain < invest && gain <= 0 && invest <= 0){
        return "Invalid Input";
    }

    let remaining = gain - invest;
    let multiply = remaining * 20;
    let avg = multiply / 100;
     return avg;
}


//----------Number-2

function sendNotification(email) {
          const split = email.split('@');
          const firstIndex = split[0];
          const secondIndex = split[1];
          if(typeof split === 'undefined'){
            return  "Invalid Email";
          }
         

         return (firstIndex + ' sent you an email from ' + secondIndex);
       
         
}


//-------------Number-3

function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return "Invalid Input";
    }
    let man = [];
    for(let nam of name){
        if(man = parseInt(nam)){
           
            return true;
        }
        
    }
    return false;
}

//----------number-4

function calculateFinalScore(obj) {

        let data = obj;
        const score = data.testScore;
        const grade = data.schoolGrade;
        let mark = score + grade;

        if(typeof data !== 'object'){
            return "Invalid Input";
        }
       let totalMark = mark + 20;
        const family = data.isFFamily;
        if(family !== true || mark < 80){
            return false;
        }
        if(family === true || totalMark >= 80 ){
            return true;
            
        }
        if ( totalMark  >= 80){
            return true;
        }
         
        else{
            return false;
        }
}

//-------------Number-5

function  waitingTime(waitingTimes  , serialNumber) {
        const timeOfWaiting = waitingTimes;
        const serial = serialNumber;

        if(  typeof serialNumber !== 'number'){
            return "Invalid Input";
        }
        let sum = 0;
        for(const number of timeOfWaiting){
            sum = sum + number;                             
        }
        
        const divid = timeOfWaiting.length;
        const avg = sum / divid;
        const serialNum = serial - 1;
        const remainingSerial = serialNum - divid;
        rounded = Math.round(avg);
        let avgTime = rounded * remainingSerial;
        return avgTime;
        
       
}