// Create a function called treasure that returns an alert.
var treasureLocation = Math.floor(Math.random()*9)
var bombLocation = Math.floor(Math.random()*9)
if(treasureLocation === bombLocation){
    bombLocation = Math.floor(Math.random() * 9)
  }
const treasure = (square) => {
    if(treasureLocation === square){
        document.getElementById(square).innerHTML = "💵"
} 
else if(bombLocation === square){
    document.getElementById(square).innerHTML = "💣"
      
}
else {document.getElementById(square).innerHTML = "😂"}


}

// Pass the same number into the function invocation. If this is done correctly, the alert will display the id of each square.

