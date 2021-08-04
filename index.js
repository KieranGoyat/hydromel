// Import Highway
import Highway from '@dogstudio/highway';

// Import Transitions
import GoUpTransition from '/JS/transitions/GoUpTransition';
import GoDownTransition from '/JS/transitions/GoDownTransition';

import Wheely from '/JS/Wheely';

window.onload = init;

function init(){

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
}
