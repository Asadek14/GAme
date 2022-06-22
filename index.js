let TikTakToeMenu = document.getElementById('TikTakToe-Menu');
let TikTakToeBtn = document.getElementById('TikTakToe');

function TikTakToeMenuOpen(){

    TikTakToeMenu.style.display = "grid";
    TikTakToeMenu.style.animationName = "TTTMenuOpen";
    TikTakToeMenu.style.animationDuration = "0.2s";

    
}

function TikTakToeMenuClose(){

    TikTakToeMenu.style.animationName = "TTTMenuClose";
    TikTakToeMenu.style.animationDuration = "0.2s";
    setTimeout(closeWindow, 50);

}

function closeWindow(){

    TikTakToeMenu.style.display = "none"
}

window.TikTakToeMenuOpen = TikTakToeMenuOpen;
window.TikTakToeMenuClose = TikTakToeMenuClose;


// let InputValue = ' ';

// document.getElementById('SubmitDevPass').addEventListener("click", myFunction);

// function myFunction(){

//     InputValue = (document.getElementById('DevPassInput').value);
// }

// window.InputValue = InputValue;


// export {InputValue}

