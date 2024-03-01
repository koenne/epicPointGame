// For todays date;
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function () {
     return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}
let list = document.getElementById("logList");
const logList = (message) => {
    var newDate = new Date();
    var datetime = newDate.today() + " @ " + newDate.timeNow();
    gameState.logArray.push(datetime + " " + message);
    list.innerHTML = '';
    list.textContent = '';
    for (let index = 0; index < gameState.logArray.length; index++) {
        const arrayElement = gameState.logArray[index];
        var newList = document.createElement('li');
        newList.innerHTML = arrayElement.slice(22);
        list.appendChild(newList);
    }
}