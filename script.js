const cells = document.querySelectorAll(".cell");
const btn = document.querySelector("button");

let board = ["","","","","","","","",""];
let currPlayer = "X";
let gameActive = true;

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const handleCellClick = (event)=>{
    const cell = event.target;
    const index = cell.getAttribute("data-index");

    if(board[index] !== "" || !gameActive) return;

    board[index] = currPlayer;
    cell.innerText = currPlayer;

    checkresult();
};

const checkresult = ()=>{
    let roundWon = false;

    for(let win of winningPattern){
        const [a,b,c] = win;

        if(
            board[a] &&
            board[a] === board[b] &&
            board[b] === board[c]
        ){
        roundWon = true
        break;
        }
    }
    if(roundWon){
        gameActive = false;
        alert(`Player ${currPlayer} Won!`);
        return;
    }
    currPlayer = currPlayer === "X" ? "O" : "X";
};

cells.forEach(cell=>{
    cell.addEventListener("click",handleCellClick);
}) ;

const resetGame = ()=>{
    board = ["","","","","","","","",""];
    currPlayer = "X";
    gameActive = true;
    cells.forEach(cell=>{
        cell.innerText = ""
    })
}
btn.addEventListener("click",resetGame);