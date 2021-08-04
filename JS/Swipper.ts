/**
 * manage swip events 
 */
 class Swipper {

    //from http://www.javascriptkit.com/javatutors/touchevents2.shtml
    static swipedetect(el: HTMLElement, callback: (dir: String) => void){
    
        var touchsurface: HTMLElement = el;
        var swipedir: String;
        var startX: number;
        var startY: number;
        var distX: number;
        var distY: number;
        var threshold: number = 20; //required min distance traveled to be considered swipe in % of height
        var restraint: number = 80; // maximum distance allowed at the same time in perpendicular direction in % of threshold
        var allowedTime: number = 600; // maximum time allowed to travel that distance
        var elapsedTime: number;
        var startTime: number;
        var handleswipe: Function = callback || function(swipedir){};
    
        touchsurface.addEventListener('touchstart', function(e){
            var touchobj = (<TouchEvent>e).changedTouches[0]
            swipedir = 'none'
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
        }, false)
    
        touchsurface.addEventListener('touchmove', function(e){
            e.preventDefault() // prevent scrolling when inside DIV
        }, false)
    
        touchsurface.addEventListener('touchend', function(e){
            var touchobj = (<TouchEvent>e).changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
            var thresholdPixel = threshold / 100 * window.innerHeight;
            var restraintPixel = restraint / 100 * thresholdPixel;

            if (elapsedTime <= allowedTime){ // first condition for awipe met
                if (Math.abs(distX) >= thresholdPixel && Math.abs(distY) <= restraintPixel){ // 2nd condition for horizontal swipe met
                    swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
                }
                else if (Math.abs(distY) >= thresholdPixel && Math.abs(distX) <= restraintPixel){ // 2nd condition for vertical swipe met
                    swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
                }
            }
            handleswipe(swipedir)
            e.preventDefault()
        }, false)
    }

}

export default Swipper;