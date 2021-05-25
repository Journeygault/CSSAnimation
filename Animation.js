
window.onload = function (){
   
    
var playButton=document.getElementById("playstate")
       
    playButton.onclick=transform;
    function transform(){
        
        document.getElementById("Truck-Cabby").style.animationPlayState = "running";
        document.getElementById("leftArm").style.animationPlayState = "running";
        document.getElementById("LhandandFarm").style.animationPlayState = "running";
        document.getElementById("leftHand").style.animationPlayState = "running";
        document.getElementById("forarmLarm").style.animationPlayState = "running";
        document.getElementById("cabLArm").style.animationPlayState = "running";
        document.getElementById("cabChest").style.animationPlayState = "running";
        document.getElementById("rightArm").style.animationPlayState = "running";
        document.getElementById("forarmRarm").style.animationPlayState = "running";
        document.getElementById("rightHand").style.animationPlayState = "running";
        document.getElementById("head").style.animationPlayState = "running";
        document.getElementById("leftEye").style.animationPlayState = "running";
        document.getElementById("rightEye").style.animationPlayState = "running";
        document.getElementById("hidewheel").style.animationPlayState = "running";
        document.getElementById("legs").style.animationPlayState = "running";
        document.getElementById("leftLeg").style.animationPlayState = "running";
        document.getElementById("leftTheigh").style.animationPlayState = "running";
        document.getElementById("LeftFoot").style.animationPlayState = "running";
        document.getElementById("RightLeg").style.animationPlayState = "running";
        document.getElementById("RightTheigh").style.animationPlayState = "running";
        document.getElementById("RightFoot").style.animationPlayState = "running";
        
        var Ruinarray = document.getElementsByClassName("wheel");
        for(var i=0; i<Ruinarray.length; i++){
         Ruinarray[i].style.animationPlayState = "running";
        }
    }
}



