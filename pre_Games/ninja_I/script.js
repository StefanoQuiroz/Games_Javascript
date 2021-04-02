var topValue= 150, leftValue=150, direction="down", step=1;

function update(){
    if(step === 1){
        step = 2;
    } else {
        step = 1;
    }
    document.getElementById("ninja").style.left= leftValue+"px"; 
    document.getElementById("ninja").style.top = topValue+"px";
    document.getElementById("ninja").style.backgroundImage = "url(./image/"+direction+step+".png)"  
}

document.onkeydown = function(e){
    console.log(e.keyCode);
    //left 37
    //right 39
    //up 38
    //down 40
    if(e.keyCode === 37 && leftValue > 0){
        leftValue -= 10;
        direction = "left";
    } else if(e.keyCode === 39 && leftValue < 900){
        leftValue += 10;
        direction = "right";
    } else if(e.keyCode === 38 && topValue > 0){
        topValue -= 10;
        direction = "top"
    } else if(e.keyCode === 40 && topValue < 750){
        topValue += 10;
        direction = "down"
    }
    update();
}