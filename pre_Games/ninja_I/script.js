function update(){
    document.getElementById("ninja").style.left = leftValue+"px";
    document.getElementById("ninja").style.top = topValue+"px"; 
}
var leftValue = 750, topValue= 150;
document.onkeydown = function(e){
    console.log(e);
    console.log(e.keyCode);
    // 37 left
    // 39 right
    // 40 down
    // 38 up
    if(e.keyCode === 37 && leftValue > 0){
        leftValue -=10;
    } else if(e.keyCode === 39 && leftValue < 350){
        leftValue +=10;
    } else if(e.keyCode === 40 && topValue < 350){
        topValue +=10;
    } else if(e.keyCode === 38 && topValue > 0){
        topValue -=10;
    }
    update();
}