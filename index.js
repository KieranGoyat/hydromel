// Import Highway
import Highway from '@dogstudio/highway';

// Import Transitions
import GoUpTransition from '/JS/transitions/GoUpTransition';
import GoDownTransition from '/JS/transitions/GoDownTransition';

import Wheely from '/JS/Wheely';
import Swipper from '/JS/Swipper';

window.onload = init;

function init(){
  console.log("Hydromel V1.0.0.11");

  //######## HIGHWAY CONF ##########################
  const H = new Highway.Core({
    transitions: {
      index: GoUpTransition,
      default: GoDownTransition,
      goUp: GoUpTransition,
      goDown : GoDownTransition
    }
  });
  //################################################

  //######## WHEELY INIT ###########################
  var body = document.querySelector("body");
  Wheely.setHighway(H);
  Wheely.updateLocations();
  body.addEventListener("wheel", Wheely.onWheel);

  //update wheels location when page change
  H.on('NAVIGATE_IN', ({ to }) => {
    Wheely.updateLocations(to.view);
  });
  //######## WHEELY INIT END #######################

  //######## MOBILE CLOSE MENU #####################
  document.querySelectorAll("a.mobile_chapter_link, a.mobile_subchapter_link").forEach(element => {
    element.addEventListener("click", () => {
      document.getElementById("nav_mobile").classList.add("closed");
    })
  })
  //######## MOBILE CLOSE MENU END #################

  //######## SWIPPER INIT ##########################
  Swipper.swipedetect(document.getElementById("main_container"), (dir)=>{
    if(dir == "down"){
      Wheely.goUp();
    } else if(dir == "up"){
      Wheely.goDown();
    }
  })
  //######## SWIPPER INIT END ######################
}
