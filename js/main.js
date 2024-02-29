document.getElementById("mainTitle").innerText = "Point and Click adventure game";
document.getElementById("heroSpeech").style.opacity = 0;
document.getElementById("counterSpeech").style.opacity = 0;
// Game State
let gameState = {
    "inventory": [],
    "coinPickedUp": false
}
function runGame() {
    newMap(0, 1);
    document.getElementById("start").style.display = "none";
    //Game window reference
    const gameWindow = document.getElementById("gameWindow");
    const inventoryList = document.getElementById("inventoryList");

    //Main Character
    const mainCharacter = document.getElementById("hero");
    const offsetCharacter = 16;


    gameWindow.onclick = function (e) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        console.log(`x = ${x} and y = ${y}`)
        //TODO: calc offset based on character size
        //TODO: making dialog functionality

        if (e.target.id !== "heroImage") {
            mainCharacter.style.left = x - offsetCharacter + "px";
            mainCharacter.style.top = y - offsetCharacter + "px";
        }
        delay(1000);
        switch (e.target.id) {
            case "key":
                console.log("pick up key")
                document.getElementById("key").remove();
                gravestone[0] = 1;
                changeInventory('key', "add");
                whatTextToShow("Wow I found a key!", document.getElementById("heroSpeech"));
                break;
            case "well":
                if (gameState.coinPickedUp == false) {
                    changeInventory("coin", "add");
                    gameState.coinPickedUp = true;
                } else {
                    console.log("There are no more coins in this well!");
                }
                break;
            case "doorWizardHut":
                if (checkItem("key")) {
                    console.log("I opened the door. Yeah!");
                    newMap(1,0);
                } else if (checkItem("coin")) {
                    changeInventory("coin", "remove");
                    console.log("Oh no I lost the coin and it didn't open the door.. Feel kinda stupid..");
                    whatTextToShow("Oh no I lost the coin and it didn't open the door.. I kinda feel stupid..", document.getElementById("heroSpeech"));
                } else {
                    console.log("Fuck this door is locked and I don't have a key. boohoo :(");
                    whatTextToShow("Fuck this door is locked and I don't have a key. boohoo :(", document.getElementById("heroSpeech"));
                }
                break;
            case "statue":
                console.log("hey you.. wanna know where the key is? It's by the graves.");
                statueText("hey you.. wanna know where the key is? It's by the graves.", document.getElementById("counterSpeech"));
                break;
            case "caveChest":
                console.log("You open the chest and find 50 gold!");
                whatTextToShow("Wow I found 50 gold!", document.getElementById("heroSpeech"));
                changeInventory("50 gold","add");
                document.getElementById("caveChest").remove();
                caveChest[0] = 1;
                break;
            case "caveEntranceChest1":
                console.log("You open the chest and find 50 gold!");
                whatTextToShow("Cool test isn't it", document.getElementById("heroSpeech"));
                changeInventory("testaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","add");
                //document.getElementById("caveEntranceChest1").remove();
                //caveEntranceChest1[0] = 1;
                break;
            case "caveExit":
                newMap(0, 0);
                break;
            case "caveEntrance":
                newMap(2,0);
                break;
            case "caveEntranceExit":
                newMap(1,1);
                break;
            default:
                break;
        }
    }

    /**
     * Add or remove item in inventory
     * @param {string} itemName 
     * @param {string} action 
     */
    function changeInventory(itemName, action) {
        if (itemName == null || action == null) {
            console.error("Wrong parameters given to changeInventory()");
            return;
        }

        switch (action) {
            case 'add':
                gameState.inventory.push(itemName);
                break;
            case 'remove':
                gameState.inventory = gameState.inventory.filter(function (newInventory) {
                    return newInventory !== itemName;
                });
                document.getElementById("inv-" + itemName).remove();
                break;

        }
        updateInventory(gameState.inventory, inventoryList);
    }

    /**
     * This returns string value if it exist within the array
     * @param {string} itemName 
     * @returns 
     */
    function checkItem(itemName) {
        return gameState.inventory.includes(itemName);
    }

    function updateInventory(inventory, inventoryList) {
        inventoryList.innerHTML = '';
        inventory.forEach(function (item) {
            const inventoryItem = document.createElement("li");
            inventoryItem.id = 'inv-' + item;
            inventoryItem.innerText = item;
            inventoryList.appendChild(inventoryItem);
        })
    }
const whatTextToShow = (whatText, whatID) => {
if(IsTextShow == false){
    IsTextShow = true;
    fadeTextIn(whatText, whatID);
}

}
const statueText = (whatText, whatID) => {
    if(IsStatueTextShow == false){
        IsStatueTextShow = true;
        fadeTextIn(whatText, whatID);
    }

    }

const fadeTextIn = (whatText, whatID) =>{
    whatID.innerHTML = whatText;
    var opacity = 0; // Initial opacity
    var interval = setInterval(function() {
       if (opacity < 1) {
          opacity += 0.02;
          whatID.style.opacity = opacity;
       } else {
          clearInterval(interval); // Stop the interval when opacity reaches 0
          delay(1000).then(() => fadeTextOut(whatID));
          
       }
    }, 50);
}
  };

 function fadeTextOut(whatID) {
     var opacity = 1; // Initial opacity
     var interval = setInterval(function() {
        if (opacity > 0.05) {
           opacity -= 0.05;
           whatID.style.opacity = opacity;
        } else {
            whatID.style.opacity = 0;
           clearInterval(interval); // Stop the interval when opacity reaches 1
           IsTextShow = false;
           IsStatueTextShow = false;
        }
     }, 50);
  }