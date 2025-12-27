const ascii = document.getElementById("ascii");
const output = document.getElementById("output");
let stage = 0;

const drawing = `
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
`;

ascii.innerText = drawing;

function print(text) {
  output.innerText = text;
}

// initial message
print("Welcome to Treasure Island.\nYour mission is to find the treasure.\nYou are at a crossroad. Type 'Left' or 'Right'.");

function submitInput() {
  let input = document.getElementById("userInput").value.toLowerCase().trim();
  document.getElementById("userInput").value = "";

  if (stage === 0) {
    if (input === "left") {
      print("You have a river in front of you.\nDo you want to 'swim' or 'wait'?");
      stage = 1;
    } else if (input === "right") {
      print("You fell into a hole. Game over!");
      stage = -1;
    } else {
      print("Please type 'Left' or 'Right'.");
    }

  } else if (stage === 1) {
    if (input === "wait") {
      print("You have found 3 doors: 'Red', 'Blue', and 'Yellow'.\nWhich door do you choose?");
      stage = 2;
    } else if (input === "swim") {
      print("You were attacked by a trout. Game over!");
      stage = -1;
    } else {
      print("Please type 'swim' or 'wait'.");
    }

  } else if (stage === 2) {
    if (input === "yellow") {
      print("You found the right door! You won the game. Congratulations!");
      stage = -1;
    } else if (input === "red") {
      print("You were burnt by the fire. Game Over!");
      stage = -1;
    } else if (input === "blue") {
      print("You were eaten by the beasts. Game Over!");
      stage = -1;
    } else {
      print("That door doesn't exist. Game Over!");
      stage = -1;
    }
  }
}