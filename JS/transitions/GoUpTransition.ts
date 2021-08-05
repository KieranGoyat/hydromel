// Import Highway
import Highway from '@dogstudio/highway';
import Wheely from '../../JS/Wheely';
import Preloader from '../../JS/Preloader';

// GSAP Library
import gsap from 'gsap';

const animDuration: number = 0.5;

/**
 * transition going up direction
 */
class GoUpTransition extends Highway.Transition {

  in({ from, to, done }) {

    // Reset Scroll
    window.scrollTo(0, 0);
    Wheely.updateMenu();

    //gsap.fromTo(from, {top:'0%'}, {duration: animDuration, top:'100%', onComplete: () => {this.onComplete(from, to, done);}});
    //to comming from top
    gsap.fromTo(to, {top:'-100%', zIndex:100}, {duration: animDuration,  top:'0%', onComplete: () => {this.onComplete(from, to, done);}});

  }

  onComplete(from, to, done){
    from.remove();
    Preloader.preload();
    done();
  }

  out({ from, done }) {
    //no animation on exit
    //managed by next page
    done();
  
  }
}

export default GoUpTransition;