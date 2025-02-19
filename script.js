const diceImages = [
    'images/dice1.png',
    'images/dice2.png',
    'images/dice3.png',
    'images/dice4.png',
    'images/dice5.png',
    'images/dice6.png'
  ];

let set1=Math.floor(Math.random() * 6) + 1;
let set2=Math.floor(Math.random() * 6) + 1;

if (!sessionStorage.getItem('pageLoaded')) {
    // Page is being loaded for the first time
    document.querySelectorAll("h1")[0].innerHTML="Refresh Me";
    // Set an item in sessionStorage to indicate that the page has been loaded
    sessionStorage.setItem('pageLoaded', 'true');
  } else {
    // Page is being refreshed
    
    if(set1>set2){
        document.querySelectorAll("h1")[0].innerHTML="Player 1 wins";
        
    }
    else if (set1<set2) {
        document.querySelectorAll("h1")[0].innerHTML="Player 2 wins";
        
        
    } else {
    
        document.querySelectorAll("h1")[0].innerHTML="Draw";
        
    }
  }



document.querySelectorAll(".img1")[0].setAttribute("src", diceImages[set1 - 1]);
document.querySelectorAll(".img2")[0].setAttribute("src", diceImages[set2 - 1]);