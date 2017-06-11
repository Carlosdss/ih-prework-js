var unit = 1; //Rover unit counter;

//Grid construction. Empty cells are indicated as zeros;
var grid = [];
for (i=0; i<10; i++){
  var grid2 = [];
  for (var j = 0; j<10; j++){
    grid2[j] = 0;
  }
  grid.push(grid2);
}

var roverList = []; //Array to store the different units sent to Mars;

//function to create a given "number" of random objects
function createObstacles(number){
 for (var i=0; i<number; i++){
   var x = Math.floor((Math.random())*10); //Random coordinates to create obstacles through the grid;
   var y = Math.floor((Math.random())*10);
   grid [x][y] = 1;
 }
}

createObstacles(10);

function showObstacles(){
 for (var i=0; i<10; i++){
   for (var j=0; j<10; j++){
     if (grid[i][j]===1){
       console.log(i,j);
     }else{}
   }
 }
}

//Rover object constructor
function myRover(name) {
  var x = Math.floor((Math.random())*10); //Random coordinates assigned to the Rover once it lands
  var y = Math.floor((Math.random())*10);
  this.name = name;
  this.position= [x, y],
  this.direction= 'N'
};

confirm("\"Rover1\" is about to land in Mars." +
        "\n - Type \"Send()\" to create as many Rovers as you wish."+
        "\n - Type \"moveRover(RoverNumber(integer), \"movements\" (string with \"fblf\"))\" to move the unit forward, backwards, turnleft or turn right");

//function that allows to send several units
function Send(){
  var name = "Rover_" + unit;
  var Rover = new myRover(name);
  roverList.push(Rover);
  var checkFlag = checkObstacles(unit-1);
  if (!checkFlag){
    console.log("The last unit crashed while landing in the following coordinates: \n-Latitude:" + Rover.position[0]+"\n-Longitude:"+ Rover.position[1]);
    roverList.splice(unit-1,1);
  } else {
    markGridPosition(unit-1);
    console.log("Rover" + unit + " landed facing " + Rover.direction + " with the following coordinates:"+
                "\n-Latitude:" + Rover.position[0]+"\n-Longitude:"+ Rover.position[1]);
    unit++;
    return Rover
  };
}

//We create the first object
Send();

if (roverList.length>0){
var input = prompt("Check the current coordinates and use F, B, L and/or R to move and turn your unit.")
confirm("Roger that. To keep operating the unit, please use the function \"operate(myRoverN,\"FBLR\"...)\"");
moveRover(1,input);
}else{
confirm("Please, type Send() to create a new Rover. The first unit crashed against a rock while landing.")
}

//Indicates the position of the Rover in the grid;
function markGridPosition(roverNumber){
  if (roverNumber<0){
    console.log("Unexpected error");
  } else {
    grid[roverList[roverNumber].position[0]] [roverList[roverNumber].position[1]] = 2;
  };
}

//Clears the position of the Rover in the grid;
function clearGridPosition(roverNumber){
    grid[roverList[roverNumber].position[0]] [roverList[roverNumber].position[1]] = 0;
  }

//Checks if there is any obstacle (rock or another Rover) in a given position;
function checkObstacles(roverNumber, action, movement){
     if (grid[roverList[roverNumber].position[0]] [roverList[roverNumber].position[1]] === 1 || grid[roverList[roverNumber].position[0]] [roverList[roverNumber].position[1]] === 2){
       return false;
     } else {
       return true;
     };
  }

//function to control the movement of the Rover
function moveRover(roverNumber, orders){
  orders = orders.toUpperCase();
  if (roverNumber > roverList.length){
    console.log("The specified Rover has not landed yet. Please, type \"Send()\" to land more units onto the surface.");
    return;
  }
  clearGridPosition(roverNumber-1);
  for (var i=0; i<orders.length; i++){
    var chekFlag = false;
    switch (orders[i]){
      case 'F':
        goForward(roverNumber-1);
        checkFlag = checkObstacles(roverNumber-1);
        if (checkFlag){
        }else{
          goBackward(roverNumber-1);
          markGridPosition(roverNumber-1)
          console.log("Rover" + roverNumber + " found an obstacle moving forward and is stopped at the following coordinates:" +
                      "\n-Latitude:" + roverList[roverNumber-1].position[0] +
                      "\n-Longitude:"+ roverList[roverNumber-1].position[1] +
                      "\n-Direction:"+ roverList[roverNumber-1].direction);
        };
        break;
        case 'B':
        goBackward(roverNumber-1);
        checkFlag = checkObstacles(roverNumber-1);
        if (checkFlag){
          break;
        }else{
          goBackward(roverNumber-1);
          markGridPosition(roverNumber-1);
          console.log("Rover" + roverNumber + " found and obstacle moving backwards and is stopped " +
                      "at the following coordinates: \n-Latitude:" + roverList[roverNumber-1].position[0] +
                      "\n-Longitude:"+ roverList[roverNumber-1].position[1] +
                      "\n-Direction:"+ roverList[roverNumber-1].direction);
        }
        break;

        case 'R':
        turnRight(roverNumber-1);
        break;

        case 'L':
        turnLeft(roverNumber-1);
        break;
      };

      if (!checkFlag){
        return;
      } else {
        continue;
      };
    };

    markGridPosition(roverNumber-1)
    console.log("Rover" + roverNumber + " acomplished all the movements and arrived at the following coordinates:"+
                "\n-Latitude:" + roverList[roverNumber-1].position[0] +
                "\n-Longitude:"+ roverList[roverNumber-1].position[1] +
                "\n-Direction:"+ roverList[roverNumber-1].direction);
}


//Functions to move the Rover, called by moveRover;
function goForward(roverNumber) {
  switch(roverList[roverNumber].direction) {

    case 'N':
      roverList[roverNumber].position[0]++
      if (roverList[roverNumber].position[0]===(10)){
        roverList[roverNumber].position[0] = 0;
      }else{};
      break;

      case 'E':
        roverList[roverNumber].position[1]++
        if (roverList[roverNumber].position[1]===(10)){
          roverList[roverNumber].position[1] = 0;
        }else{};
        break;

    case 'S':
    roverList[roverNumber].position[0]--
    if (roverList[roverNumber].position[0]===(-1)){
      roverList[roverNumber].position[0] = 9;
    }else{};
    break;

    case 'W':
    roverList[roverNumber].position[1]--
    if (roverList[roverNumber].position[1]===(-1)){
      roverList[roverNumber].position[1] = 9;
    }else{};
    break;
  };
}

  function goBackward(roverNumber) {
    switch(roverList[roverNumber].direction) {
      case 'N':
        roverList[roverNumber].position[0]--
        if (roverList[roverNumber].position[0]===(-1)){
          roverList[roverNumber].position[0] = 9;
        }else{};
        break;
      case 'E':
        roverList[roverNumber].position[1]--
        if (roverList[roverNumber].position[1]===(-1)){
          roverList[roverNumber].position[1] = 9;
        }else{};
        break;
      case 'S':
        roverList[roverNumber].position[0]++
        if (roverList[roverNumber].position[0]===10){
          roverList[roverNumber].position[0] = 0;
        }else{};
        break;
      case 'W':
        roverList[roverNumber].position[1]++
        if (roverList[roverNumber].position[1]===(10)){
          roverList[roverNumber].position[1] = 0;
        }else{};
        break;
    };
  }

    function turnRight(roverNumber){
      switch(roverList[roverNumber].direction) {
        case 'N':
          roverList[roverNumber].direction = 'E'
          break;
        case 'E':
          roverList[roverNumber].direction = 'S'
          break;
        case 'S':
          roverList[roverNumber].direction = 'W'
          break;
        case 'W':
          roverList[roverNumber].direction = 'N'
          break;
      };
    }

    function turnLeft(roverNumber){
      switch(roverList[roverNumber].direction) {
        case 'N':
          roverList[roverNumber].direction = 'W'
          break;
        case 'E':
          roverList[roverNumber].direction = 'N'
          break;
        case 'S':
          roverList[roverNumber].direction = 'E'
          break;
        case 'W':
          roverList[roverNumber].direction = 'S'
          break;
      };
    }
