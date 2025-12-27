alert(`
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     \`"=.|                  |
|___________________|__"=._o\`"-._        \`"=.______________|___________________
          |                \`"=._o\`"=._      _\`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; \`"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .\` \` \`\` ,  \`"-._"-._   ". '__|___________________
          |           |o\`"=._\` , "\` \`; .". ,  "-._"-._; ;              |
 _________|___________| ;\`-.o\`"=._; ." \` '\`."\ \` . "-._ /_______________|_______
|                   | |o ;    \`"-.o\`"=._\`\`  '\` " ,__.--o;   |
|___________________|_| ;     (#) \`-.o \`"=.\`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      \`".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_ 
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_ 
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
`);

alert("Welcome to Treasure Island.");
alert("Your mission is to find the treasure.");
alert("You are at a crossroad. Where do you want to go?");

let leftRight = prompt("Type 'Left' or 'Right'");

if (leftRight && leftRight.toLowerCase() === "left") {
    alert("You have a river in front of you.");
    let swimOrWait = prompt("Do you want to 'swim' or 'wait'?");
    if (swimOrWait && swimOrWait.toLowerCase() === "wait") {
        alert("Now you have found 3 doors.");
        let door = prompt("Choose a door: 'Blue', 'Red', or 'Yellow'");
        if (door && door.toLowerCase() === "yellow") {
            alert("You found the right door! You won the game. Congratulations!");
        } else if (door && door.toLowerCase() === "red") {
            alert("You were burnt by the fire. Game Over!");
        } else if (door && door.toLowerCase() === "blue") {
            alert("You were eaten by the beasts. Game Over!");
        } else {
            alert("Game Over!");
        }
    } else {
        alert("You were attacked by a trout. Game Over!");
    }
} else {
    alert("You fell into a hole. Game Over!");
}