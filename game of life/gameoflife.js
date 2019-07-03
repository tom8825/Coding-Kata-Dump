let gameGrid;
let rows = 20; //8
let cols = 20; //4
let nextGeneration;
let generation = 1;

function createArray(rows, cols){
    let matrix = new Array(cols)
    for(let i = 0; i < matrix.length; i++){
        matrix[i] = new Array(rows);
    }
    return matrix;
}

function createNewGame(){
    gameGrid = createArray(rows, cols);
    nextGeneration = createArray(rows, cols);
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            gameGrid[i][j] = Math.round(Math.random());
        }
    }

}



function runGeneration(){
    for (let i = 0; i < cols; i++){
        for (let j = 0; j < rows; j++){
            let living = 0;
            
            if(i > 0  && j > 0  &&  gameGrid[i-1][j-1] === 1){living++;}
            if(i > 0  && j > 0  &&  gameGrid[i-1][j] === 1){living++;}
            if(i > 0  && j > 0  &&  gameGrid[i-1][j+1] === 1){living++;}
            if(gameGrid[i][j-1] === 1){living++;}
            if(gameGrid[i][j+1] === 1){living++;}
            if(i < cols-1  && j < rows-1  &&  gameGrid[i+1][j-1] === 1){living++;}
            if(i < cols-1  && j < rows-1  &&  gameGrid[i+1][j] === 1){living++;}
            if(i < cols-1  && j < rows-1  &&  gameGrid[i+1][j+1] === 1){living++;}

            if(living < 2){nextGeneration[i][j] = 0;}
            if(living > 3){nextGeneration[i][j] = 0;}
            if(living === 3){nextGeneration[i][j] = 1;}
            if(living === 2 || living === 3){nextGeneration[i][j] = 1;}

            
        }
    }
    console.clear();
    console.log("Generation: " + generation);
    console.table(nextGeneration);
    gameGrid = nextGeneration;
    generation++;
}

function runGame(){
    createNewGame();
    setInterval(function(){
        if(generation<200){
            runGeneration()
        }else{
            
        }
    }, 250)
}
