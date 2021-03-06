window.addEventListener("mousemove", mouseMove);

//trigger parallax max one per frame -> smooth
let lastUpdateCall = null;
let isFloating = true;
let floatingCall = null;
function mouseMove(e){

    if(lastUpdateCall) cancelAnimationFrame(lastUpdateCall);

    lastUpdateCall = requestAnimationFrame(()=>{
        parallax(e);
        lastUpdateCall = null;
    });

}

function parallax(e){

    //desactivate floating
    isFloating = false;
    if(floatingCall) clearTimeout(floatingCall);

    let parallaxElements = document.querySelectorAll("[data-parallax]");
    parallaxElements.forEach(element => {

        //1 speed means move by 1% of main element
        let speed = element.getAttribute("data-parallax");

        let moveX = - e.clientX * speed / 100; 
        let moveY = - e.clientY * speed / 100;

        setTranslate(element, moveX, moveY);

    });

    //enable floating in 2s if no call to parallax
    floatingCall = setTimeout(()=>{ isFloating = true;}, 1000);

}


const reMatrixStart = new RegExp("matrix\\([^,]*,\\s[^,]*,\\s[^,]*,\\s[^,]*,\\s");
/**
 * update translate properties of transform without affecting rotation
 */
function setTranslate(element, moveX, moveY){
    let matrix = window.getComputedStyle(element).getPropertyValue('transform');
    if(matrix == "none"){
        matrix = "matrix(1, 0, 0, 1, 0, 0)";
    }

    let newMatrix = matrix.match(reMatrixStart)[0] + moveX + ", " + moveY + ")";

    element.style.transform = newMatrix;
}

/**
 * move elements with parallax auto
 */
function floating(){

    let seconds = new Date().getTime() / 1000;
    let angle = (seconds * 40) % 360;

    let width2 = window.innerWidth / 2;
    let height2 = window.innerHeight / 2;

    let x = width2 + Math.cos(angle/180*Math.PI) * width2;
    let y = height2 + Math.sin(angle/180*Math.PI) * height2;

    let parallaxElements = document.querySelectorAll("[data-parallax]");
    parallaxElements.forEach(element => {

        //1 speed means move by 1% of main element
        let speed = element.getAttribute("data-parallax");
        
        let moveX = - x * speed / 100; 
        let moveY = - y * speed / 100;

        setTranslate(element, moveX, moveY);

    });

}
setInterval(() => {
    if(isFloating) requestAnimationFrame(floating);
}, 100);