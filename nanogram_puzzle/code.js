





let selected_type = ''

let rowheaders = [];
let colheaders = [];
let currentboard = "";
let currentsolution = "";

let life = 3;
let move_counter = 0;
let b = 0;
let Z = 1;
let empty_board = [
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b],
    [b, b, b, b, b, b, b, b, b, b]
];





let easy_opl = [
    [b, b, b, Z, b, Z, b, b, b, b],
    [Z, Z, b, Z, b, Z, b, Z, Z, b],
    [b, Z, Z, Z, Z, Z, Z, Z, b, b],
    [b, b, Z, b, Z, Z, Z, b, b, b],
    [b, b, Z, Z, Z, Z, Z, Z, b, b],
    [b, b, Z, Z, Z, Z, Z, Z, Z, b],
    [b, b, Z, Z, Z, Z, Z, Z, Z, Z],
    [b, b, Z, Z, Z, Z, Z, Z, Z, Z],
    [b, b, Z, Z, Z, Z, Z, Z, Z, Z],
    [b, b, Z, Z, Z, Z, b, b, b, b]
];

let intermediate_opl = [

    [b, b, Z, b, b, b, b, Z, b, b],
    [b, Z, Z, Z, b, b, Z, Z, Z, b],
    [Z, Z, Z, Z, Z, Z, Z, Z, Z, Z],
    [Z, Z, b, b, Z, b, b, Z, Z, Z],
    [Z, Z, b, b, b, b, b, Z, Z, Z],
    [Z, Z, b, b, b, b, Z, Z, Z, Z],
    [b, Z, Z, b, b, Z, Z, Z, Z, b],
    [b, b, Z, Z, Z, Z, Z, Z, b, b],
    [b, b, b, Z, Z, Z, Z, b, b, b],
    [b, b, b, b, Z, Z, b, b, b, b]
];

let hard_opl = [
    [b, b, b, b, b, b, Z, Z, Z, Z, Z, b, b, b, b],
    [b, b, b, b, b, Z, Z, Z, b, b, Z, Z, b, b, b],
    [b, b, b, b, Z, Z, Z, Z, Z, b, b, b, b, b, b],
    [b, b, b, b, Z, Z, Z, Z, Z, Z, b, b, b, Z, b],
    [b, b, Z, b, b, Z, Z, b, b, b, b, b, b, Z, Z],
    [b, b, Z, Z, b, b, Z, b, Z, b, b, Z, b, b, Z],
    [b, Z, b, b, Z, b, Z, Z, Z, Z, b, Z, Z, b, Z],
    [b, b, Z, Z, Z, Z, Z, Z, Z, b, b, Z, Z, Z, Z],
    [b, Z, b, b, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z, Z],
    [b, b, Z, Z, Z, Z, Z, Z, b, b, Z, Z, Z, Z, b],
    [b, b, b, Z, Z, Z, Z, Z, Z, b, b, Z, Z, b, b],
    [Z, Z, Z, Z, Z, Z, b, Z, b, Z, b, b, b, b, b],
    [Z, Z, Z, Z, b, Z, b, Z, b, Z, Z, b, b, b, b],
    [b, Z, Z, Z, b, b, Z, b, Z, b, b, b, b, b, b],
    [b, b, Z, Z, b, b, b, b, b, b, b, b, b, b, b]
];


let trivial_opl = [
    [b, b, b, Z, Z],
    [b, b, Z, Z, b],
    [b, Z, Z, b, b],
    [Z, Z, b, b, b],
    [Z, Z, Z, Z, Z]
];

window.onload = function () {
    alert("Welcome! To start playing, please choose a difficulty level & the color you'll gonna play with");
}

function draw_board(board, colheaders, rowheaders) {
    container = document.getElementById("board_container");
    board_html = generate_board_html(board, colheaders, rowheaders);

    container.innerHTML = board_html;
}


function generate_board_html(board, colheaders, rowheaders) {
    let table_inner_html = "<table>";

    // Create the first row with column headers
    let headerow = "<tr><th></th>";
    for (let colheader of colheaders) {
        headerow += `<th>${colheader}</th>`;
    }
    headerow += "</tr>";

    table_inner_html += headerow;

    for (let i = 0; i < board.length; i++) {
        let row_html = "<tr>";

        row_html += `<th>${rowheaders[i]}</th>`;

        for (let j = 0; j < board[i].length; j++) {
            row_html += generate_square(board[i][j]);
        }
        row_html += "</tr>";
        table_inner_html += row_html;
    }

    table_inner_html += "</table>";
    return table_inner_html;
}





function generate_square(type) {
    let square_class = '"empty"';
    let square_content = "";
    if (type == 1) {
        square_class = '"black board_element"';
    }
    else if (type == 2) {
        square_class = '"white board_element"';
        square_content = "X";
    } else if (type == 0) {
        square_class = '"empty board_element" onclick="square_click_handler(this)"'
    }

    return `<td class=${square_class} >${square_content}</td>`;
}


function blackmode(type) {
    selected_type = 1

    if (type == 1) {
        square_class = '"black board_element"';
        // update_board(currentboard,row, col, 1);
    }
    return selected_type

}



function whitemode(type) {
    selected_type = 2
    if (type == 2) {
        square_class = '"white board_element"';
        square_content = "X";
        // update_board(currentboard,row, col, 2);
        if (type == 2) {
            b
        }
    }

    return selected_type
}





function update_board(board, row, col, type) {


    board[row][col] = type;
    draw_board(board, colheaders, rowheaders);

}






function square_click_handler(event) {
    // let cell = event.target;
    let col = event.cellIndex - 1;
    let row = event.parentNode.rowIndex - 1;


    update_board(currentboard, row, col, selected_type)
    check_square_correct(row, col);
    updatemovecounterd();
    checkanswer(currentboard);
    document.getElementById('board_container').addEventListener('click', function () {
        starttimer();
    });
}

function check_square_correct(row, col) {
    if (currentsolution[row][col] == 1 && currentboard[row][col] == 1) {


    }

    else if (currentsolution[row][col] == 0 && currentboard[row][col] == 2) {

    }

    else {
        loselives();
    }
    fillremainingblocks();

}

function fillremainingblocks() {
    for (let i = 0; i < currentboard.length; i++) {
        let isrowcorrect = true;

        // Check if the row matches the solution
        for (let j = 0; j < currentboard[i].length; j++) {
            if (currentboard[i][j] !== currentsolution[i][j]) {
                isrowcorrect = false;
                break;
            }
        }

        // If the row matches the solution, fill the remaining blocks in the row
        if (isrowcorrect) {
            for (let j = 0; j < currentboard[i].length; j++) {

                if (currentsolution[i][j] === b && currentboard[i][j] === b && selected_type == 1) {
                    update_board(currentboard, i, j, 2);
                } else if (currentsolution[i][j] === b && currentboard[i][j] === b && selected_type == 2) {
                    update_board(currentboard, i, j, 1);
                }

            }
        }
    }

    // Now, separately check and fill the remaining blocks in columns
    for (let i = 0; i < currentboard.length; i++) {
        let iscolumncorrect = true;

        // Check if the column matches the solution
        for (let j = 0; j < currentboard.length; j++) {
            if (currentboard[j][i] !== currentsolution[j][i]) {
                iscolumncorrect = false;
                break;
            }

        }
        // If the column matches the solution, fill the remaining blocks in the column
        if (iscolumncorrect) {
            for (let j = 0; j < currentboard.length; j++) {
                if (currentsolution[j][i] === b && currentboard[j][i] === b && selected_type == 1) {
                    update_board(currentboard, j, i, 2);
                } else if (currentsolution[j][i] === b && currentboard[j][i] === b && selected_type == 2) {
                    update_board(currentboard, j, i, 1);
                }
            }
        }
    }
}



let easyboard = JSON.parse(JSON.stringify(easy_opl))

function draw_easylevelboard(easy_sol) {

    for (let i = 0; i < easy_sol.length; i++) {
        for (let j = 0; j < easy_sol.length; j++) {
            if (easy_sol[i][j] == Z) {
                easy_sol[i][j] = b;
            }
            if (easy_sol[i][j] == 2) {
                easy_sol[i][j] = b;
            }
        }

    }

    let easy_colheaders = [[1], [2], [8], [6, 3], [8], [10], [7], [5, 2], [4, 1], [3]];
    let easy_rowheaders = [[1, 1], [2, 1, 1, 2], [7], [1, 3], [6], [7], [8], [8], [8], [4]];

    rowheaders = easy_rowheaders;
    colheaders = easy_colheaders;

    draw_board(easy_sol, colheaders, rowheaders);
    currentboard = easy_sol;
    currentsolution = easy_opl;
    return easyboard;

}

let trivialboard = JSON.parse(JSON.stringify(trivial_opl))
function draw_triviallevelboard(trivial_sol) {
    reset();
    for (let i = 0; i < trivial_sol.length; i++) {
        for (let j = 0; j < trivial_sol.length; j++) {
            if (trivial_sol[i][j] == Z) {
                trivial_sol[i][j] = b;
            }
            if (trivial_sol[i][j] == 2) {
                trivial_sol[i][j] = b;
            }

        }


    }
    let trival_rowheaders = [[2], [2], [2], [2], [5]];
    let trival_colheaders = [[2], [3], [1, 2], [1, 2], [1, 1]];
    rowheaders = trival_rowheaders;
    colheaders = trival_colheaders;
    draw_board(trivial_sol, colheaders, rowheaders);
    currentboard = trivial_sol;
    currentsolution = trivial_opl;
    return trivialboard;
}



let intermidateboard = JSON.parse(JSON.stringify(intermediate_opl))
function draw_intermidatelevelboard(intermediate_sol) {
    reset();
    for (let i = 0; i < intermediate_sol.length; i++) {
        for (let j = 0; j < intermediate_sol.length; j++) {
            if (intermediate_sol[i][j] == Z) {
                intermediate_sol[i][j] = b;
            }
            if (intermediate_sol[i][j] == 2) {
                intermediate_sol[i][j] = b;
            }


        }

    }
    let intermediate_colheaders = [[4], [6], [2, 3], [2, 2], [3, 2], [4, 1], [4, 2], [8], [6], [4]];
    let intermediate_rowheaders = [[1, 1], [3, 3], [10], [2, 1, 3], [2, 3], [2, 4], [2, 4], [6], [4], [2]];




    rowheaders = intermediate_rowheaders;
    colheaders = intermediate_colheaders;

    draw_board(intermediate_sol, colheaders, rowheaders);
    currentboard = intermediate_sol;
    currentsolution = intermediate_opl;
    return intermidateboard;
}

let hardboard = JSON.parse(JSON.stringify(hard_opl))
function draw_hardlevelboard(hard_sol) {
    reset();
    for (let i = 0; i < hard_sol.length; i++) {
        for (let j = 0; j < hard_sol.length; j++) {
            if (hard_sol[i][j] == Z) {
                hard_sol[i][j] = b;
            }
            if (hard_sol[i][j] == 2) {
                hard_sol[i][j] = b;
            }

        }

    }



    let hard_colheaders = [[2], [3, 1, 1], [4, 1, 1, 2], [6, 1, 1], [6, 2], [6, 4], [1, 11], [7, 4], [1, 1, 4, 2], [2, 1, 1, 1], [1, 2, 2], [6, 1], [5], [3, 1], [5]];
    let hard_rowheaders = [[5], [3, 2], [5], [6, 1], [1, 2, 2], [1, 1, 1, 1, 2], [1, 2, 4, 1, 1], [4, 7], [1, 11], [4, 6], [2, 6], [1, 1, 6], [2, 1, 1, 4], [1, 1, 3], [2]];


    colheaders = hard_colheaders;
    rowheaders = hard_rowheaders;

    draw_board(hard_sol, colheaders, rowheaders);
    currentboard = hard_sol;
    currentsolution = hard_opl;
    return hardboard;
}




function loselives() {
    life -= 1;
    update_lives();
    document.getElementById("livescount").innerText = `Lives: ${life}`;
}


function update_lives() {
    if (life === 0) {
        alert("Game Over! You've run out of lives.");
        stoptimer();
        move_counter = 0;
        reset();
        alert("choose your level before starting to play")
    }

    else {
        stoptimer();
        alert(`You've lost one of your lives. Lives left: ${life}`);
        starttimer();

    }

}

function updatemovecounterd() {
    if (life > 0) {
        move_counter += 1;
        document.getElementById('show_movecounter').textContent = 'Move counter :' + move_counter;

    } else if (life === 0) {
        update_lives();
    }

}


let timerinterval;
let seconds = 0;
let minutes = 0;

function starttimer() {
    timerinterval = setInterval(updatetimer, 1000);
}

function updatetimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }


    document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
} // ik heb dit line met hulp van AI geschreven 

function stoptimer() {
    clearInterval(timerinterval);


}




function reset() {
    stoptimer()
    draw_easylevelboard(easyboard);


    currentboard = [];
    life = 3;
    move_counter = 0;
    seconds = 0;
    minutes = 0;

    document.getElementById('timer').textContent = '00:00';
    document.getElementById('livescount').innerText = `Lives: ${life}`;
    document.getElementById('show_movecounter').textContent = 'Move counter :' + 0;



}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function arraysmatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] !== arr2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

function checkanswer(board) {
    let new_board = JSON.parse(JSON.stringify(board))

    for (let i = 0; i < new_board.length; i++) {
        for (let j = 0; j < new_board.length; j++) {
            if (new_board[i][j] == 2) {
                new_board[i][j] = b;
            }

        }

    }

    if (arraysmatch(new_board, trivial_opl)) {
        stoptimer();
        alert("You've solved the Trivial puzzle");
    } else if (arraysmatch(new_board, easy_opl)) {
        stoptimer();
        alert("You've solved the Easy puzzle");
    } else if (arraysmatch(new_board, intermediate_opl)) {
        stoptimer();
        alert("You've solved the Intermediate puzzle");
    } else if (arraysmatch(new_board, hard_opl)) {
        stoptimer();
        alert("You've solved the Hard puzzle");
    }
}







////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// gebruikte bronnen : 
// voor html : https://blog.hubspot.com/website/html-space
// voor javascript: 
// https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript
//https://www.youtube.com/watch?v=wAj074hO_3g&ab_channel=JamesQQuick
//https://www.shecodes.io/athena/52336-how-to-create-a-countdown-timer-in-javascript
