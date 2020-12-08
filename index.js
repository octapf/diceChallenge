
var button = document.querySelector(".btn");


function randomPicture() {
        let n = Math.floor (Math.random () * 6 ) + 1 ;

        let playerOne = n ;

        document.querySelector(".img1").setAttribute("src","images/dice" + n + ".png") 

        n = Math.floor (Math.random () * 6 ) + 1 ;

        let playerTwo = n ;

        document.querySelector(".img2").setAttribute("src","images/dice" + n + ".png") 

        if (playerOne > playerTwo) { 
            document.querySelector("h1").innerHTML = "🚩 Player One Wins"
        } 
        
        else if (playerOne == playerTwo) {
            document.querySelector("h1").innerHTML = "🚩 Draw 🚩"
        } 
        
        else { 
            document.querySelector("h1").innerHTML = "Player Two Wins 🚩"
        }

        
        
}
button.addEventListener("click", randomPicture);
