window.addEventListener("mousemove", e => {

    let xPos = e.clientX;
    let yPos = e.clientY;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let x = xPos / width;
    let y = yPos /height;

    let parallaxElements = document.querySelectorAll("[data-parallax-x], [data-parallax-y]");
    parallaxElements.forEach(element => {

        let coefX = element.getAttribute("data-parallax-x");
        let coefY = element.getAttribute("data-parallax-y");

        let moveX = 0;
        let moveY = 0;

        if(coefX !== null){
            moveX = -x * coefX;
        }

        if(coefY !== null){
            moveY = -y * coefY;
        }

        console.log(moveX, moveY);

        let transform = "translateX(" + moveX + "%) translateY(" + moveY + "%)";
        element.style.transform = transform;

    })

    console.log("##########");

})