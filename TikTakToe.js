//import { InputValue as inputvalue } from "./index.js";
const tiles = document.querySelectorAll(".input");

const board = new Array(tiles.length);
board.fill(null);

const AUUGHH1 = new Audio("Sounds/AUUGHH1.MP3");
const AUUGHH2 = new Audio("Sounds/AUUGHH2.MP3");
const happyBirthDay = new Audio("Sounds/Happy Birthday.MP3");
window.happyBirthDay = happyBirthDay;
const clickSound = new Audio("Sounds/Clicking Sound.MP3");
let AUUGHH = 'AUUGHH1';

const strike = document.getElementById('strike');
const gameOver = document.getElementById('gameOver');
const message = document.getElementById('message');
const winner = document.getElementById('winner');
let filledTiles = 0;
let turn = 0;
let win = false;

function TikTakToe(input){

    const tile = document.getElementById(input);
    const tileNumber = document.getElementById(input).dataset.index;

    if(turn % 2 == 0){
    tile.classList.add('x');
    board[tileNumber - 1] = 'x';
    }

    else{
    tile.classList.add('o');
    board[tileNumber - 1] = 'o';
    //PlayAUUGHHSound()
    }

    clickSound.play();
    tile.style.pointerEvents = "none";
    filledTiles++;
    turn++;

    CheckForWin();
};

window.TikTakToe = TikTakToe

/* Tiles Representation:
      [1][2][3]
      [4][5][6]
      [7][8][9] */

let winCombos = [
    {combo: [1,2,3], strikeType: 'strike1'},
    {combo: [4,5,6], strikeType: 'strike2'},
    {combo: [7,8,9], strikeType: 'strike3'},
    {combo: [1,4,7], strikeType: 'strike4'},
    {combo: [2,5,8], strikeType: 'strike5'},
    {combo: [3,6,9], strikeType: 'strike6'},
    {combo: [1,5,9], strikeType: 'strike7'},
    {combo: [3,5,7], strikeType: 'strike8'}
]

function CheckForWin(){

    winCombos.forEach(winCombo => {
        
    const {combo, strikeType} = winCombo;

    let inputValue1 = board[combo[0] - 1];
    let inputValue2 = board[combo[1] - 1];
    let inputValue3 = board[combo[2] - 1];

        if(inputValue1 != null)
        {
            if(inputValue1 == inputValue2 && inputValue2 == inputValue3)
            {
                win = true
                strike.classList.add(strikeType);
                tiles.forEach(tile => {tile.style.pointerEvents = "none"});
                setTimeout(GameOver, 1000);
                message.classList.add('message-win');
                
                // console.log(condition);
                // if(condition == "Test")
                // happyBirthDay.play();


                if(inputValue1 == 'x')
                winner.innerHTML = 'X';
                else
                winner.innerHTML = 'O';
            }
        }
    });

    if(!win && filledTiles == 9)
    {
    setTimeout(GameOver, 1000);
    message.classList.add('message-draw');
    message.innerHTML = 'Draw';
    }
}

function GameOver(){
    gameOver.style.display = "flex";
}

function PlayAUUGHHSound(){

    if(AUUGHH == 'AUUGHH1')
    {
    AUUGHH1.play();
    AUUGHH = 'AUUGHH2' 
    }
    else{
    AUUGHH2.play();
    AUUGHH = 'AUUGHH1';
    }
}