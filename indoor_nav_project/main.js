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

class Vect {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    compare(z) {
        if ((this.x == z.x) && (this.y == z.y) )
            return true;
    }
}


document.getElementById("start").onclick = buttonHandler;
document.getElementById("end").onclick = buttonHandler;
document.getElementById("wall").onclick = buttonHandler;
document.getElementById("search").onclick = buttonHandler;



// const array2D = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];


let addStart = false, addEnd = false; addWall = false;
let startPoint = new Vect(4, 5);
let endPoint = new Vect(6, 9);
var grid = [];
let r = 48;
let c = 30;




function changePoint(index) {
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (index == 0) {
                if (grid[i][j].attr('fill') == 'red')  {
                    return new Vect(i, j);
                }
            }
            if (index == 1) {
                if (grid[i][j].attr('fill') == 'blue')  {
                    return new Vect(i, j);
                }
            }
            if (index == 2) {
                if (grid[i][j].attr('fill') == 'black')  {
                    grid[i][j].attr({ fill: "white", 'fill-opacity': 0 });
                }
            }
        }
    }
}



function buttonHandler(e) {
    if (e.currentTarget.id == "start") {
        addEnd = false;
        addWall = false;
        addStart = true;
    } else if (e.currentTarget.id == "end") {
        addEnd = true;
        addWall = false;
        addStart = false;

    } else if (e.currentTarget.id == "wall") {
        addEnd = false;
        addWall = true;
        addStart = false;
    } else if (e.currentTarget.id == "search") {
        var graph = new Graph(
            [
                // show in presentation
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],           
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],            
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],

            ]);
        // var graph = new Graph([
        //     [1,0,1,1],
        //     [1,0,1,0],
        //     [0,1,1,1]
        // ]);
        // var graph = new Graph([
        //     [1,1,1,1],
        //     [0,1,1,0],
        //     [0,0,1,1]
        // ]);
        // var start = graph.nodes[5][4];
        // var end = graph.nodes[9][6];

        var start = graph.nodes[startPoint.y][startPoint.x];
        var end = graph.nodes[endPoint.y][endPoint.x];


        // var result = astar.search(graph.nodes, start, end);
        // result is an array containing the shortest path
        
        var resultWithDiagonals = astar.search(graph.nodes, start, end, true);
        // result now searches diagonal neighbors as well
    
        // Weight can easily be added by increasing the values within the graph, and where 0 is infinite (a wall)
        var graphWithWeight = new Graph([
            [1,1,2,30],
            [0,4,1.3,0],
            [0,0,5,1]
        ]);
        var startWithWeight = graphWithWeight.nodes[0][0];
        var endWithWeight = graphWithWeight.nodes[1][2];
        // var resultWithWeight = astar.search(graphWithWeight.nodes, startWithWeight, endWithWeight);
        
        console.log(resultWithDiagonals);
        let testX = resultWithDiagonals[0].x;
        let testY = resultWithDiagonals[0].y;
        
        for (let node in resultWithDiagonals) {
            let posX = resultWithDiagonals[node].x
            let posY = resultWithDiagonals[node].y
            grid[posY][posX].attr({ 'fill': 'purple', 'fill-opacity': 1});
            
        }
        // resultWithWeight is an array containing the shortest path taking into account the weight of a node
        
    }

}

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

                // var grid_item =  paper.circle(15+(i*25), 15+(j*20), 10); 

                // grid_item.attr({ fill: "white", 'fill-opacity': 0, 'stroke-width' : 0.1});
                grid_item.attr({ fill: "white", 'fill-opacity': 0, 'stroke-width': 0.0});
                grid_item.click(clickHandler);
                // grid_item.mousedown(startWall)
                // grid_item.mousemove(changeWall);
                // grid_item.mouseup(endWall);
                

                let currentIter = new Vect(i, j);
               
                if (currentIter.compare(startPoint)) {
                    grid_item.attr({ 'fill': 'red', 'fill-opacity': 1});
                } else if (currentIter.compare(endPoint)) {
                    grid_item.attr({ 'fill': 'blue', 'fill-opacity': 1});
                }
                grid[i][j] = grid_item;
            }
        }
        // grid[1][2].node.classList.add("tester");
        grid[0][0].node.id = "room";
        grid[0][0].click(infoHandler);
        
        grid[0][1].node.id = "room";
        grid[0][1].click(infoHandler);
        
        
        
        // const hoverTest = document.getElementById("tester");
        
        // const fps = 60;

        // setInterval(function() {
        // if(getComputedStyle(document.getElementById('tester')).getPropertyValue('--hovered') == 1) {
        //     document.getElementById('text').innerHTML = 'This is the admin roomm';
        // } else {
        //     document.getElementById('text').innerHTML = '';
        // };
        // }, 1000 / fps);
                
        // Check http://raphaeljs.com/reference.html#Raphael for other ways of creating the paper
    });

    let div = document.getElementById("container");
    let title = document.getElementById("room-title");
    let btn = document.getElementById("room");

    div.style.opacity = "0";
    //sets the text
}

// let clicked = false;
// var infoHandler = function() {
//     if (clicked === false) {
//         document.getElementById('text').innerHTML = 'Admin Room';
//         clicked = true;
//     } else {
//         document.getElementById('text').innerHTML = '';
//         clicked = false;
//     }
// }
 
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


//   if (node_x == 0 & node_y == 0) {
//     title.innerHTML = "Children's Activity Room";
//   } 
//   if (node_x == 0 & node_y == 1) {
//     title.innerHTML = "Admin Office";
//   }

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

//   if (fade_state == true) {
//     div.style.animation = "fade-in 1s forwards";
//     fade_state = false;
//   }  else if (fade_state == false) {
//         div.style.animation = "fade-out 1s forwards";
//         fade_state = true;
//   }
// console.log(predictedTitle);






// if (info_on === false) {
//       title.innerHTML = predictedTitle;
//       current_room = title.innerHTML;

//       if (fade_state == true) {
//         div.style.animation = "fade-in 1s forwards";
//         fade_state = false;
//       }  
//       info_on = true;
//     } 
//     else if (info_on == true) {
//         if (predictedTitle === current_room) {
//             div.style.animation = "fade-out 1s forwards";
//             fade_state = true;
//             info_on = false;
//         } else if (predictedTitle !== current_room) {
//             div.addEventListener("animationend", () => {

//                 if (predictedTitle !== current_room) {
//                     title.innerHTML = predictedTitle;
//                     current_room = predictedTitle;

//                     div.style.animation = "fade-in 1s forwards";
//                     fade_state = false;
//                 }
                
//         });
//             div.style.animation = "fade-out 1s forwards";
//             fade_state = true;
            
//             //div.removeEventListener("animationend", this);
        
//             // div.style.animation = "fade-in 1s forwards";
//             // fade_state = false;
//         }
        



        


        // if (fade_state == false) {
        //     div.style.animation = "fade-out 1s forwards";
        //     fade_state = true;
        // }
        
        
        // if (predictedTitle === current_room) {
        //     console.log("same room fade");
        //     //trigers animation
        //     div.style.animation = "fade-out 1s forwards";
        //     //sets the text
        //     btn.innerHTML = "fade-in";
        //     //sets fade_state
        //     fade_state = false;
            
            
        // } 
        // info_on = false;
        
        // else {
        //     div.style.animation = "fade-in 1s forwards";
        //     //sets the text
        //     btn.innerHTML = "fade-out";
        //     //sets fade_state
        //     fade_state = true;

        //     title.innerHTML = predictedTitle

        //     div.style.animation = "fade-out 1s forwards";
        //     //sets the text
        //     btn.innerHTML = "fade-in";
        //     //sets fade_state
        //     fade_state = false;
        // }



//}




// if (current_room != title.innerHTML) {
//     div.style.animation = "fade-in 1s forwards";
//     //sets the text
//     btn.innerHTML = "fade-out";
//     //sets fade_state
//     fade_state = true;
//   }


// if (node_x == 0 & node_y == 0) {
//     console.log("car");
//     title.innerHTML = "Children's Activity Room";
//     current_room = "Children's Activity Room";
//   } 
// if (node_x == 0 & node_y == 1) {
//     title.innerHTML = "Admin Office";
//     current_room = "Admin Office";
//   }




  //if faded in or out
//   if (fade_state == true) {
//     //trigers animation
//    div.style.animation = "fade-out 1s forwards";
//     //sets the text
//     btn.innerHTML = "fade-in";
//     //sets fade_state
//     fade_state = false;
//   } else if (fade_state == false) {
//     //trigers animation
//     div.style.animation = "fade-in 1s forwards";
//     //sets the text
//     btn.innerHTML = "fade-out";
//     //sets fade_state
//     fade_state = true;
//   }
  
}


var clickHandler = function(e){
    console.log("Current Space: ");
    console.log((e.target.y.baseVal.value)/25);
    console.log((e.target.x.baseVal.value)/25);

    if (addStart == true) {
        grid[startPoint.x][startPoint.y].attr({ fill: "white", 'fill-opacity': 0 });
        this.attr({ 'fill': 'red', 'fill-opacity': 1});
        startPoint = changePoint(0);
        addStart = false;
        changePoint(2);
    }

    if (addEnd == true) {
        grid[endPoint.x][endPoint.y].attr({ fill: "white", 'fill-opacity': 0 })
        this.attr({ 'fill': 'blue', 'fill-opacity': 1});
        endPoint = changePoint(1);
        addEnd = false;
        changePoint(2);
    }
};

let currentChange = false;
var startWall = function(event) {
    event.preventDefault();
    if (addWall == true) {
        currentChange = true;
        this.attr({ 'fill': 'black', 'fill-opacity': 1});
    }
};

var changeWall = function(event) {
    event.preventDefault();
    if (currentChange == true) {
        this.attr({ 'fill': 'black', 'fill-opacity': 1});
    }
};

var endWall = function(event) {
    event.preventDefault();
    addWall = false;
    currentChange = false;
};




