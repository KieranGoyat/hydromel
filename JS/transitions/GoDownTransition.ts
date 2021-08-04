// Import Highway
import Highway from '@dogstudio/highway';
import Wheely from '../../JS/Wheely';

// GSAP Library
import gsap from 'gsap';

const animDuration : number = 0.5;
// Fade
class GoDownTransition extends Highway.Transition {
  
  in({ from, to, done }) {
    // Reset Scroll
    window.scrollTo(0, 0);
    Wheely.updateMenu();

    //from going up
    from.style.zIndex = 100;
    gsap.fromTo(from, {top:0, zIndex:100}, {duration: animDuration, top:'-100%', onComplete: () => {from.remove();done();}});
    //gsap.fromTo(to,   {top:'100%'}, {duration: animDuration, top:'0%', onComplete: done});

  }

  out({ from, done }) {
    // Animation
    //gsap.fromTo(from,   {duration: 0.5, opacity:1}, {opacity:0, onComplete: done});
    done();

  }
}

export default GoDownTransition;