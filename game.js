var colores = ["green","red","yellow","blue"];
var coloresaleatorios = [];
var userChoosenColor = [];
level =1;
var star=0;

$(document).keydown(function(){
    if ( star===0){ 
    nextStepSequence();
    star ++;
    }
});

function nextStepSequence(){
    userChoosenColor.length=0;
    $("h1").text("Level "+level);
    level++;
    var randomNumber = Math.floor(Math.random()*4);
    var randomColor = colores[randomNumber];
    coloresaleatorios.push(randomColor);
    $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);

}
    $(".btn").click(function (event) {
        var id = this.id;
        userChoosenColor.push(id);       
        playSound(id);
        animatePress(id);
        checkAnswer(); 
        
    });
    
        function checkAnswer(){
            var poscomp = userChoosenColor.length-1;
               if (userChoosenColor[poscomp]==coloresaleatorios[poscomp]){
                  if (userChoosenColor.length==coloresaleatorios.length){
                setTimeout(() => {
                    nextStepSequence();
                }, "1000");
            } 
        } else { 
        const sonidowrong = new Audio("sounds/wrong.mp3");
         sonidowrong.play();
         $("body").addClass("game-over");
         setTimeout (function() {
             $("body").removeClass("game-over");
          }, "200");
          $("h1").text("Game-over");
          setTimeout(() => {
            location.reload();
          }, "4000");
        }
} 
     
function animatePress(id){
    $("."+ id).addClass("pressed");
    setTimeout (function() {
        $("."+id).removeClass("pressed");
     }, "100");
}

function playSound(name){
        const audio = new Audio("sounds/"+ name +".mp3");
        audio.play();        
        }   






