let mykeys = document.querySelectorAll(".key");

for (let x = 0; x < mykeys.length; x++){
    mykeys[x].addEventListener("click", () => {
        // alert("Button " + mykeys[x].innerHTML + " Is Clicked");
        // let snd = new Audio('Tunes/do.mp3');
        // snd.play();

        playsnd(mykeys[x].innerHTML);
    })
}

document.addEventListener('keydown', function (btn){
    playsnd(btn.key.toUpperCase());
    let pressed_key = btn.key.toUpperCase();

    for (let x = 0; x < mykeys.length; x++ ){
        mykeys[x].classList.remove('activated');
    }

    for (let x = 0; x < mykeys.length; x++ ){
        if (pressed_key == mykeys[x].innerHTML.toUpperCase()){
            mykeys[x].classList.add('activated');
            
        }
    }
})


function playsnd (key) {
    switch(key) {
        case 'C':
            var snd = new Audio('Tunes/do.mp3');
            snd.play();
          break;
        case 'D':
            var snd = new Audio('Tunes/re.mp3');
            snd.play();
          break;
          case 'E':
            var snd = new Audio('Tunes/mi.mp3');
            snd.play();
          break;
        case 'F':
            var snd = new Audio('Tunes/fa.mp3');
            snd.play();
          break;
          case 'G':
            var snd = new Audio('Tunes/sol.mp3');
            snd.play();
          break;
        case 'A':
            var snd = new Audio('Tunes/la.mp3');
            snd.play();
          break;
          case 'B':
            var snd = new Audio('Tunes/ti.mp3');
            snd.play();
          break;
        case 'K':
            var snd = new Audio('Tunes/sol.mp3');
            snd.play();
          break;
        default:
       console.log(key);
      }

}