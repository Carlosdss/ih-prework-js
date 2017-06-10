var unit = 1; //Rover unit counter;

//Grid construction. Empty cells are indicated as zeros
var grid = [];
for (i=0; i<10; i++){
  var grid2 = [];
  for (var j = 0; j<10; j++){
    grid2[j] = 0;
  }
  grid.push(grid2);
}

var roverList = []; //Array to store the different units sent to Mars

//Rover object constructor
function myRover(name) {
  x = Math.floor((Math.random())*10); //Random coordinates while landing....
  y = Math.floor((Math.random())*10);
  this.name = name;
  this.position= [x, y],
  this.direction= 'N'
};

confirm("\"Rover1\" is about to land in Mars.")

//function that allow to send several units
function Send(){
  var name = "Rover_" + unit;
  var Rover = new myRover(name);
  roverList.push(Rover);
  markGridPosition(unit-1);
  console.log("Rover" + unit + " landed with the following coordinates: \n-Latitude:" + Rover.position[0]+"\n-Longitude:"+ Rover.position[1]);
  unit++;
}

Send();
Send();

var input = prompt("Check the current coordinates and use F, B, L and/or R to move and turn your unit.").toUpperCase;
confirm("Roger that. To keep operating the unit, please use the function \"operate(myRoverN,\"FBLR\"...)\"");

//console.log(roverList[1]);

function markGridPosition(roverNumber){
  if (roverNumber<0){
    console.log("Unexpected error");
  } else {
    grid[roverList[roverNumber].position[0]] [roverList[roverNumber].position[1]] = 1;
  }
}

/*
operate(input);

function operate(rover, orders){
 for (var i=0; i<orders.length; i++){
  switch (orders[i]){
      case 'F':
        var freeWay = checkObstacles('F', rover);
        if (freeWay){
          goForward(rover);
          markGridPosition(rover);
        }else{
          console.log("Obstacle detected in Latitude:"+ (myRover1.position[0]+1) + "\n-Longitude:" + myRover1.position[1]);
        }
        break;
      case 'B':
        var freeWay = checkObstacles('B', rover);
          if (freeWay){
            goBackward(rover);
            markGridPosition(rover);
          }else{
            console.log("Obstacle detected in Latitude:"+ (myRover1.position[0]+1) + "\n-Longitude:" + myRover1.position[1]);
          }
          break;
      case 'B':
        var freeWay = checkObstacles('B', rover);
          if (freeWay){
            goBackward(rover);
            markGridPosition(rover);
            }else{
              console.log("Obstacle detected in Latitude:"+ (myRover1.position[0]-1) + "\n-Longitude:" + myRover1.position[1]);
            }
        break;
      case 'L':
        rover.direction
            if (freeWay){
              goBackward(rover);
              markGridPosition(rover);
              }else{
                console.log("Obstacle detected in Latitude:"+ (myRover1.position[0]-1) + "\n-Longitude:" + myRover1.position[1]);
              }
          break;


  //  }
//  }

//}//


//var input = read.
//console.log(myRover.position);

//var myRover1 = new myRover();
//console.log(myRover1.position);

//var troll = prompt("Y").toUpperCase();




function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
}

  function goBackward(rover) {
    switch(rover.direction) {
      case 'N':
        rover.position[0]--
        break;
      case 'E':
        rover.position[1]--
        break;
      case 'S':
        rover.position[0]++
        break;
      case 'W':
        rover.position[1]++
        break;
    };
  }

    function turnRight(rover){
      switch(rover.direction) {
        case 'N':
          rover.direction = 'E'
          break;
        case 'E':
          rover.direction = 'S'
          break;
        case 'S':
          rover.direction = 'W'
          break;
        case 'W':
          rover.direction = 'N'
          break;
      };
    }

    function turnLeft(rover){
      switch(rover.direction) {
        case 'N':
          rover.direction = 'W'
          break;
        case 'E':
          rover.direction = 'N'
          break;
        case 'S':
          rover.direction = 'E'
          break;
        case 'W':
          rover.direction = 'S'
          break;
      };
    }

    function turn(rover.name, command) {
        var directionNumber = directionAsNumber(self.direction);
        if (command === 'l') { // Left
            directionNumber = (directionNumber + 4 - 1) % 4;
        } else { // Right
            directionNumber = (directionNumber + 1) % 4;
        }
        self.direction = self.directions[directionNumber];
    }

    this.directions = ['N', 'E', 'S', 'W'];

    function directionAsNumber(direction) {
        for(var index = 0; index < 4; index++) {
            if (self.directions[index] === direction) return index;
        }
    }


    //console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");

    */
