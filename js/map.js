let well = [`0`,`well`, `width: 64px;height: 64px;left: 288px;top: 96px;`];
let door = [`0`,`doorWizardHut`, `width: 32px; height: 64px;left: 177px;top: 287px;`];
let statue = [`0`, `statue`, `width: 32px; height: 64px; left: 704px; top: 287px;`];
let gravestone = [`0`, `key`, `width: 32px; height: 32px; left: 86px; top: 450px;`];
let caveChest = [`0`,`caveChest`, `width: 32px; height: 32px; left: 96px; top: 96px;`];
let caveEntrance = [`0`,`caveEntrance`, `width: 64px; height: 64px; left: 300px; top: 215px;`];
let caveExit = [`0`,`caveExit`, `width: 32px; height: 32px; left: 1000px; top: 420px;`, `width: 32px; height: 32px; left: 0px; top: 420px;`];
let caveEntranceExit = [`0`, `caveEntranceExit`, `width: 64px; height: 64px; left: 815px; top: 800px;`];
let caveEntranceChest1 = [`0`, `caveEntranceChest1`, `width: 32px; height: 32px; left: 122px; top: 100px;`];
let caveEntranceChest2 = [`0`, `caveEntranceChest2`, `width: 32px; height: 32px; left: 1350px; top: 100px;`];
let IsTextShow = false;
let IsStatueTextShow = false;

const newMap = (whichMap, whichExit) => {
   load.play();
    const node = document.getElementById("interact");
    node.innerHTML = '';
    node.textContent = '';
    const element = document.getElementById("bodyID"); 
    switch (whichMap) {
        case 0:
         playMusic(1);
            var newNode = document.createElement('div');
            newNode.setAttribute("id", well[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", well[2]);
            node.appendChild(newNode);
            var newNode = document.createElement('div');
            newNode.setAttribute("id", door[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", door[2]);
            node.appendChild(newNode);
            if(gravestone[0] == 0){
               var newNode = document.createElement('div');
               newNode.setAttribute("id", statue[1]);
               newNode.setAttribute("class", 'foreground');
               newNode.setAttribute("style", statue[2]);
               node.appendChild(newNode);
               var newNode = document.createElement('div');
               newNode.setAttribute("id", gravestone[1]);
               newNode.setAttribute("class", 'foreground');
               newNode.setAttribute("style", gravestone[2]);
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
            if(caveChest[0] == 0){
                var newNode = document.createElement('div');
                newNode.setAttribute("id", caveChest[1]);
                newNode.setAttribute("class", 'foreground');
                newNode.setAttribute("style", caveChest[2]);
                node.appendChild(newNode);
            }
            var newNode = document.createElement('div');
            newNode.setAttribute("id", caveEntrance[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", caveEntrance[2]);
            node.appendChild(newNode);
            var newNode = document.createElement('div');
            newNode.setAttribute("id", caveExit[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", caveExit[2]);
            node.appendChild(newNode);
            var newNode = document.createElement('div');
            newNode.setAttribute("id", caveExit[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", caveExit[3]);
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
            newNode.setAttribute("id", caveEntranceExit[1]);
            newNode.setAttribute("class", 'foreground');
            newNode.setAttribute("style", caveEntranceExit[2]);
            node.appendChild(newNode);
            if(caveEntranceChest1[0] == 0){
               var newNode = document.createElement('div');
               newNode.setAttribute("id", caveEntranceChest1[1]);
               newNode.setAttribute("class", 'foreground');
               newNode.setAttribute("style", caveEntranceChest1[2]);
               node.appendChild(newNode);
            }
            if(caveEntranceChest2[0] == 0){
               var newNode = document.createElement('div');
               newNode.setAttribute("id", caveEntranceChest2[1]);
               newNode.setAttribute("class", 'foreground');
               newNode.setAttribute("style", caveEntranceChest2[2]);
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
         delay(500).then(() => fadeIn(el));
         document.getElementById("game").style.display = "none";
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