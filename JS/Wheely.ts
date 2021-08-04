/**
 * manage wheel events and page transitions
 */
class Wheely {

    /**
     * should the wheely respond to event
     */
    static activated : boolean = true;

    /**
     * Highway Core used for transitions
     */
    static H;

    /**
     * location to go when wheel up
     */
    static onWheelUpLocation : string;

    /**
     * location to go when wheel down
     */
    static onWheelDownLocation : string; 


    /**
     * toggle between activated and desactivated mode
     */
    static toggleActivated(){
        Wheely.activated = !Wheely.activated;
    }

    /**
     * set highway core
     * @param {Highway.Core} highwayCore 
     */
    static setHighway(highwayCore){
        Wheely.H = highwayCore;
    }

    /**
     * update wheel up location
     * (location to go on wheel up)
     * 
     * @param {string} location absolute location, for example /about.html
     */
    static setWheelUpLocation(location){
        Wheely.onWheelUpLocation = location;
    }

    /**
     * update wheel down location
     * (location to go on wheel down)
     * 
     * @param {string} location absolute location, for example /about.html
     */
    static setWheelDownLocation(location){
        Wheely.onWheelDownLocation = location;
    }


    /**
     * manage wheel event
     * change location based on wheel direction
     * 
     * @param {Event} event the wheel event
     */
    static onWheel(event){
        if(Wheely.activated && event.type == "wheel"){
            if(event.deltaY < 0){
                //go up
                Wheely.goUp();
            } else if(event.deltaY > 0){
                //go down
                Wheely.goDown();
            }
        }
    }

    static goUp(){
        if(Wheely.onWheelUpLocation != null){
            Wheely.H.redirect(window.location.origin + Wheely.onWheelUpLocation, "goUp");
        }
    }

    static goDown(){
        if(Wheely.onWheelDownLocation != null){
            Wheely.H.redirect(window.location.origin + Wheely.onWheelDownLocation, "goDown");
        }
    }

    /**
     * change location to go when wheel up or down
     * based on parameters onWheelUpLocation and onWheelDownLocation
     * 
     * @param {HTMLElement} elm element containing the parameters
     */
    static updateLocations(elm = document){

        var paramOnWheelUpLocation : HTMLParamElement = elm.querySelector('param[name="onWheelUpLocation"]');
        var paramOnWheelDownLocation : HTMLParamElement = elm.querySelector('param[name="onWheelDownLocation"]');


        if(paramOnWheelUpLocation != null && paramOnWheelUpLocation.value != ""){
            Wheely.setWheelUpLocation(paramOnWheelUpLocation.value);
        }

        if(paramOnWheelDownLocation != null && paramOnWheelDownLocation.value != ""){
            Wheely.setWheelDownLocation(paramOnWheelDownLocation.value);
        }

    }

    /**
     * update menu elements according to page location
     */
    static updateMenu(){

        //removing active
        document.querySelectorAll(".big_puce.active, .small_puce.active, .summary_chapter_link.active, .summary_subchapter_link.active").forEach(element => {
            element.classList.remove("active");
        })

        //add active
        let pathname: String = window.location.pathname;

        let elements: NodeListOf<Element> = document.querySelectorAll(`a[href='${pathname}']`);
        elements.forEach(element => {
            if(element.className.match("mobile")){
                element.querySelector(".big_puce,.small_puce").classList.add("active");
            } else {
                element.classList.add("active");
            }
        });

    }
    
}

export default Wheely;