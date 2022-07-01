var i;
for(i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click", audioFun);
}

function audioFun(){
  var buttonInnerHTML=this.innerHTML;
  makeSound(buttonInnerHTML);
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
})
function makeSound(key){
  switch (key) {
    case "w":
      var audio=new Audio("sounds/crash.mp3");
      audio.play()
      break;
    case "a":
      var tom_4=new Audio("sounds/tom-4.mp3");
      tom_4.play()
      break;
    case "s":
      var kick_bass=new Audio("sounds/kick-bass.mp3");
      kick_bass.play()
      break;
    case "d":
      var snare=new Audio("sounds/snare.mp3");
      snare.play()
      break;
    case "j":
      var tom_1=new Audio("sounds/tom-1.mp3");
      tom_1.play()
      break;
    case "k":
      var tom_2=new Audio("sounds/tom-2.mp3");
      tom_2.play()
      break;
    case "l":
      var tom_3=new Audio("sounds/tom-3.mp3");
      tom_3.play()
      break;
    default:console.log(key);

  }
}
