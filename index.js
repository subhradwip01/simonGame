
var buttons=$('.btn')
var start=false;
var level=0;
var btn=["green","yellow","red","blue"];
var buttonPattern=[];
var userPattern=[];

$(document).keypress(function () {
    if(!start){
        $("h1").text("Level "+level);
        gamePattern();
        start=true;
    }
})

$(".btn").click(function () {
    userPattern.push($(this).attr('id'));
    buttonAnimation($(this).attr('id'));
    buttonMusic($(this).attr('id'));
    checker(userPattern.length-1);
})


function gamePattern(){
    userPattern=[];
    level++;
    $("h1").text("Level " + level);
    
    var btnSeletion=Math.floor(Math.random()*4);
    buttonPattern.push(btn[btnSeletion]);

    buttonAnimation(btn[btnSeletion]);
    buttonMusic(btn[btnSeletion]);
}

function checker(curColor) {

    if(userPattern[curColor]==buttonPattern[curColor]){
        if(userPattern.length==buttonPattern.length){
            setTimeout(() => {
                gamePattern();
            }, 1000);
        }
    }
    else{
        level=0;
        $("h1").text("Wrong Entry! Press Any Key to Start Again");
        wrong();
        buttonPattern=[];
        start=false;
    }
    
}

function buttonAnimation(button) {
    $("#" + button).addClass("pressed");
    setTimeout(() => {
        $("#" + button).removeClass("pressed");
    }, 300);
}

function buttonMusic(button) {
    var sound = new Audio("music/" + button + ".mp3");
    sound.play();
}

function wrong() {

    $("body").addClass("wrong");
    setTimeout(() => {
        $("body").removeClass("wrong");
    }, 200);
    var s=new Audio("music/wrong.mp3");
    s.play();
    
}
