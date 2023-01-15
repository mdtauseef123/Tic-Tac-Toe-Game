//Collecting all the buttons in an array
var buttons=document.querySelectorAll(".each-grid");
var move_count = 1;
const first_user_move = [];
const second_user_move = [];
var is_win = false;
for(let i=0;i<buttons.length;i++){
    //Listening for mouse clicks on the buttons
    buttons[i].addEventListener("click", function(event){
        var clicked_grid = document.querySelector("."+event.target.classList[0]);
        var grid_number = event.target.classList[1][0];
        if(is_win === false && move_count <= 9){
            if(move_count % 2 === 1){
                first_user_move.push(grid_number);
                clicked_grid.classList.add("cross-img");
                is_win=check_win(first_user_move, "First");
                
            }
            else{
                second_user_move.push(grid_number);
                clicked_grid.classList.add("circle-img");
                is_win=check_win(second_user_move, "Second");
            }
            move_count++;
        }
    });
}


//Function to check after applying any move whether any user win or not
function check_win(moves, user){
    if(move_count === 9){
        document.querySelector("h1").innerHTML="Draw!";
        return;
    }
    var moves_string = "";
    for(var i=0;i<moves.length;i++){
        moves_string += moves[i];
    }
    var found = false;
    if(moves_string.includes("1") && moves_string.includes("2") && moves_string.includes("3"))
        found=true;
    else if(moves_string.includes("1") && moves_string.includes("4") && moves_string.includes("7"))
        found=true;
    else if(moves_string.includes("7") && moves_string.includes("8") && moves_string.includes("9"))
        found=true;
    else if(moves_string.includes("3") && moves_string.includes("6") && moves_string.includes("9"))
        found=true;
    else if(moves_string.includes("4") && moves_string.includes("5") && moves_string.includes("6"))
        found=true;
    else if(moves_string.includes("2") && moves_string.includes("5") && moves_string.includes("8"))
        found=true;
    else if(moves_string.includes("3") && moves_string.includes("5") && moves_string.includes("7"))
        found=true;
    else if(moves_string.includes("1") && moves_string.includes("5") && moves_string.includes("9"))
        found=true;
    if(found === true){
        document.querySelector("h1").innerHTML=user + " Player Win!";
        return true;
    }
    else
        return false;
}
