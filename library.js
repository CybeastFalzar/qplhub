if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!");
        console.log(registration)
    }).catch(error => {
        console.log("SW Registration Failed!");
        console.log(error);
    })
}

// class grid_node {
//     constructor
// } 





let addStart = false, addEnd = false; addWall = false;

var grid = [];
let r = 48;
let c = 30;






var paper;

function draw() {
    require([ "./raphael/raphael" ], function (Raphael) {
        var container = document.getElementById("grid");
        paper = Raphael(container, 1200, 800);
        // var line = paper.path( "M12.5, 12.5, L25, 25");
        // var line2 = paper.path( "M25, 25, L37.5, 37.5" );
        // var line3 = paper.path( "M37.5, 37.5, L50, 37.5" );
        paper.setViewBox(0, 0, 1200, 800, true);
        paper.setSize('100%', '100%');
        // var grid = [];
        var x = 0;
        for (var i = 0; i < r; i++) {
            grid[i] = [];
            x = 0;
            for (var j = 0; j < c; j++) {
                var grid_item =  paper.rect(0+(i*25), 0+(j*25), 25, 25); 

                grid_item.attr({ fill: "white", 'fill-opacity': 0, 'stroke-width': 0.1});
                // grid_item.click(clickHandler);

                

                grid[i][j] = grid_item;
            }
        }
        // grid[1][2].node.classList.add("tester");
        grid[0][0].node.id = "room";
        grid[0][0].click(infoHandler);
        
        grid[0][1].node.id = "room";
        grid[0][1].click(infoHandler);
        
    
                
        // Check http://raphaeljs.com/reference.html#Raphael for other ways of creating the paper
    });

    let div = document.getElementById("container");
    let title = document.getElementById("room-title");
    let btn = document.getElementById("room");

    div.style.opacity = "0";
    //sets the text
}


 
//toggle var
var info_on = false;
var fade_state = true;
var current_room = "";
//on btn click
var infoHandler = function(event) {
    console.log(info_on);
    console.log(current_room);
  //get the button and div
  
  let node_x = (event.target.x.baseVal.value)/25;
  let node_y = (event.target.y.baseVal.value)/25;

  let div = document.getElementById("container");
  let title = document.getElementById("room-title");
  let btn = document.getElementById("room");
  let par = document.getElementById("body");


var predictedTitle = "";

if (node_x == 0 & node_y == 0) {
    
    predictedTitle = "Children's Activity Room";
  } 
  if (node_x == 0 & node_y == 1) {
    predictedTitle = "Admin Office";
  }

  if (fade_state == true) {
    title.innerHTML = predictedTitle;
    div.style.animation = "fade-in 1s forwards";
    fade_state = false;
    current_room = predictedTitle;
  } else if (fade_state == false) {
    if (current_room != predictedTitle) {
        div.style.animation = "fade-out 1s forwards";
        fade_state = true;
        title.innerHTML = predictedTitle;
        div.style.animation = "fade-in 1s forwards";
        fade_state = false;
        current_room = predictedTitle;

    } else {
        div.style.animation = "fade-out 1s forwards";
        fade_state = true;
    }
  }

  
}





