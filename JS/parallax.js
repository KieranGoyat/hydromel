window.addEventListener("mousemove", mouseMove);

//trigger parallax max one per frame -> smooth
let lastUpdateCall = null;
function mouseMove(e){

    if(lastUpdateCall) cancelAnimationFrame(lastUpdateCall);

    lastUpdateCall = requestAnimationFrame(()=>{
        parallax(e);
        lastUpdateCall = null;
    });

}

function parallax(e){

    let parallaxElements = document.querySelectorAll("[data-parallax]");
    parallaxElements.forEach(element => {

        //1 speed means move by 1% of main element
        let speed = element.getAttribute("data-parallax");

        let moveX = - e.clientX * speed / 100; 
        let moveY = - e.clientY * speed / 100;

        console.log(element.getBoundingClientRect().left);

        element.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;

    });

}