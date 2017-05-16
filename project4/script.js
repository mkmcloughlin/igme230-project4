

//run
init();

// ex 1 code
function init(){



 // store key codes and currently pressed ones
    var keys = {};
        keys.UP = 38;
        keys.LEFT = 37;
        keys.RIGHT = 39;
        keys.DOWN = 40;

    //store position
    var tardisPos = {
      x: 100,
      y: 100,
      speed: 2,
      element: document.getElementById("tardisImg")
    };

    //check key press
    document.body.onkeyup = 
    document.body.onkeydown = function(e){
      if (e.preventDefault) { 
        e.preventDefault();
      }
      else {
        e.returnValue = false; 
      }
      var kc = e.keyCode || e.which;
      keys[kc] = e.type == 'keydown';
    };

//update movement
    var moveImg = function(dx, dy){
      tardisPos.x += (dx||0) * tardisPos.speed;
      tardisPos.y += (dy||0) * tardisPos.speed;
      tardisPos.element.style.left = tardisPos.x + 'px';
      tardisPos.element.style.top = tardisPos.y + 'px';
    };

   // key functions
    var tardisMovement = function(){
      if ( keys[keys.LEFT] ) {
        moveImg(-5, 0);
      }
      if ( keys[keys.RIGHT] ) {
        moveImg(5, 0);
      }
      if ( keys[keys.UP] ) {
        moveImg(0, -5);
      }
      if ( keys[keys.DOWN] ) {
        moveImg(0, 5);
      }
    };

   
    moveImg();

    // game loop
    setInterval(function(){
      tardisMovement();
    }, 1000/24);


};
   
 



