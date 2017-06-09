var unit = 1; //Rover unit counter;

var grid = []; //2-dimension array to represent the 10x10 grid
  for (var j = 0; j<10; j++) {
    for (var h = 0; h<10; h++){
      grid.push([j,h]);
    }
  }

function myRover() {
  x = Math.floor((Math.random())*10);
  y = Math.floor((Math.random())*10);
  this.position= [x, y],
  this.direction= 'N'
};

function Send(){
  var name = "myRover" + unit;
  name = new myRover();
  unit ++;
}

Send();
console.log(myRover.position);

var grid = [];
  for (var j = 0; j<10; j++) {
    for (var h = 0; h<10; h++){
      grid.push([j,h]);
    }
  }


confirm("Rover1 is about to land in Mars. \n Use f, b, l and r to move and turn your unit. \n Type \"Send\" to create another Rover")

var myRover1 = new myRover();
console.log(myRover1.position);

var troll = prompt("Y").toUpperCase();



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

    //function turnLeft(rover){
    //  switch(rover.direction) {
    //    case 'N':
    //      rover.direction = 'W'
    //      break;
    //    case 'E':
    //      rover.direction = 'N'
    //      break;
    //    case 'S':
    //      rover.direction = 'E'
    //      break;
      //  case 'W':
    //      rover.direction = 'S'
    //      break;
  //    };
  //  }
    //console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
