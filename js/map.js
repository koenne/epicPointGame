let well = [`0`,`well`, `width: 64px;height: 64px;left: 288px;top: 96px;`];
let door = [`0`,`doorWizardHut`, `width: 32px; height: 64px;left: 177px;top: 287px;`];
let caveChest = [`0`,`caveChest`, `width: 32px; height: 32px; left: 96px; top: 96px;`];
let caveEntrance = [`0`,`caveEntrance`, `width: 64px; height: 64px; left: 300px; top: 215px;`];
let caveExit = [`0`,`caveExit`, `width: 32px; height: 32px; left: 1000px; top: 420px;`, `width: 32px; height: 32px; left: 0px; top: 420px;`];

const newMap = (whichMap) => {
    const node = document.getElementById("interact");
    node.innerHTML = '';
    node.textContent = '';
    const element = document.getElementById("bodyID"); 
    switch (whichMap) {
        case 1:
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
            delay(600).then(() => document.getElementById("hero").style="left: 20px; top: 410px");
            break;
        case 0:
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
            fadeOut(element);
            delay(600).then(() => document.getElementById("map").src = "img/tilemap1.jpg");
            delay(600).then(() => document.getElementById("hero").style="width: 32px; height: 64px;left: 177px;top: 350px;");
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
         
      }
   }, 50);
}
function fadeIn(el) {
    var opacity = 0; // Initial opacity
    var interval = setInterval(function() {
       if (opacity < 1) {
          opacity += 0.05;
          el.style.opacity = opacity;
       } else {
          clearInterval(interval); // Stop the interval when opacity reaches 1
       }
    }, 50);
 }