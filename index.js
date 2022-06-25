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

let form = document.getElementById('devPass');
form.addEventListener('submit', function(event){
        event.preventDefault();
        document.getElementById('TikTakToeStart').addEventListener('click', function(){
            form.submit();
        })
})
