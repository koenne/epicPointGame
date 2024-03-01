const newMap = (whichMap, whichExit) => {
   load.play();
    const node = document.getElementById("interact");
    node.innerHTML = '';
    node.textContent = '';
    const element = document.getElementById("bodyID"); 
    switch (whichMap) {
        case 0:
         playMusic(1);
         if(gameState.well[0] == 0){
            var newNode = document.createElement('div');
            newNode.setAttribute("id", gameState.well[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", gameState.well[2]);
            node.appendChild(newNode);
         }
            var newNode = document.createElement('div');
            newNode.setAttribute("id", gameState.door[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", gameState.door[2]);
            node.appendChild(newNode);
            if(gameState.gravestone[0] == 0){
               var newNode = document.createElement('div');
               newNode.setAttribute("id", gameState.statue[1]);
               newNode.setAttribute("class", 'foreground');
               newNode.setAttribute("style", gameState.statue[2]);
               node.appendChild(newNode);
               var newNode = document.createElement('div');
               newNode.setAttribute("id", gameState.gravestone[1]);
               newNode.setAttribute("class", 'foreground');
               newNode.setAttribute("style", gameState.gravestone[2]);
               node.appendChild(newNode);
            }
            fadeOut(element);
            delay(600).then(() => document.getElementById("map").src = "img/tilemap1.jpg");
            if(whichExit == "1")
            {
               delay(600).then(() => document.getElementById("hero").style="left: 190px; top: 510px;");
            }
            else{
               delay(600).then(() => document.getElementById("hero").style="left: 177px;top: 350px;");
            }

            break;
         case 1:
            playMusic(2);
            if(gameState.caveChest[0] == 0){
                var newNode = document.createElement('div');
                newNode.setAttribute("id", gameState.caveChest[1]);
                newNode.setAttribute("class", 'foreground');
                newNode.setAttribute("style", gameState.caveChest[2]);
                node.appendChild(newNode);
            }
            var newNode = document.createElement('div');
            newNode.setAttribute("id", gameState.caveEntrance[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", gameState.caveEntrance[2]);
            node.appendChild(newNode);
            var newNode = document.createElement('div');
            newNode.setAttribute("id", gameState.caveExit[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", gameState.caveExit[2]);
            node.appendChild(newNode);
            var newNode = document.createElement('div');
            newNode.setAttribute("id", gameState.caveExit[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", gameState.caveExit[3]);
            node.appendChild(newNode);
            fadeOut(element);
            delay(600).then(() => document.getElementById("map").src = "img/tilemap2.png");
            if(whichExit == "1"){
               delay(600).then(() => document.getElementById("hero").style="left: 315px; top: 225px;");
            }
            else{
               delay(600).then(() => document.getElementById("hero").style="left: 20px; top: 410px");

            }

            break;
         case 2:
            playMusic(2);
            var newNode = document.createElement('div');
            newNode.setAttribute("id", gameState.caveEntranceExit[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", gameState.caveEntranceExit[2]);
            node.appendChild(newNode);
            if(gameState.caveEntranceChest1[0] == 0){
               var newNode = document.createElement('div');
               newNode.setAttribute("id", gameState.caveEntranceChest1[1]);
               newNode.setAttribute("class", 'foreground');
               newNode.setAttribute("style", gameState.caveEntranceChest1[2]);
               node.appendChild(newNode);
            }
            if(gameState.caveEntranceChest2[0] == 0){
               var newNode = document.createElement('div');
               newNode.setAttribute("id", gameState.caveEntranceChest2[1]);
               newNode.setAttribute("class", 'foreground');
               newNode.setAttribute("style", gameState.caveEntranceChest2[2]);
               node.appendChild(newNode);
            }

            fadeOut(element);
            delay(600).then(() => document.getElementById("map").src = "img/tilemap3.png");
            delay(600).then(() => document.getElementById("hero").style="left: 815px; top: 800px;");
            break;
        default:
            break;
    }
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


function fadeOut(el) {
   var opacity = 1; // Initial opacity
   var interval = setInterval(function() {
      if (opacity > 0) {
         opacity -= 0.1;
         el.style.opacity = opacity;
      } else {
         clearInterval(interval); // Stop the interval when opacity reaches 0
         document.getElementById("game").style.display = "none";
         delay(500).then(() => fadeIn(el));
      }
   }, 50);
}
function fadeIn(el) {
   document.getElementById("game").style.display = "inline";
    var opacity = 0; // Initial opacity
    var interval = setInterval(function() {
       if (opacity < 1) {
          opacity += 0.1;
          el.style.opacity = opacity;
       } else {
          clearInterval(interval); // Stop the interval when opacity reaches 1
       }
    }, 50);
 }