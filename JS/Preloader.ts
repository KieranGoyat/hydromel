/**
 * preload images 
 */
 class Preloader {

    static images: HTMLImageElement[] = [];
    static links: HTMLLinkElement[] = [];
    static urls: string[][] = [];

    static init() {

        this.urls.push([
            require("../media/images/intro_chap_01/background.png"),
            require("../media/images/intro_chap_01/dragon_motif.png"),
            require("../media/images/intro_chap_01/freya.png"),
            require("../media/images/intro_chap_01/kvasir.png"),
            require("../media/images/intro_chap_01/odin.png")
        ]);

        this.urls.push([
            require("../media/images/chap_01_part_01/background.png"),
            require("../media/images/chap_01_part_01/battle.png"),
            require("../media/images/chap_01_part_01/freyr.png"),
            require("../media/images/chap_01_part_01/odin.png")
        ]);

        this.urls.push([
            require("../media/images/chap_01_part_02/bg.png"),
            require("../media/images/chap_01_part_02/freya et odin.png"),
            require("../media/images/chap_01_part_02/kvasir.png"),
            require("../media/images/chap_01_part_02/treve.png")
        ]);

        this.urls.push([
            require("../media/images/chap_01_part_03/bg.png"),
            require("../media/images/chap_01_part_03/exploration.png"),
            require("../media/images/chap_01_part_03/livre_01.png"),
            require("../media/images/chap_01_part_03/livre_02.png"),
            require("../media/images/chap_01_part_03/livre_03.png"),
            require("../media/images/chap_01_part_03/moine.png")
        ]);

        this.urls.push([
            require("../media/images/intro_chap_02/bg.png"),
            require("../media/images/intro_chap_02/dragon.png"),
            require("../media/images/intro_chap_02/fjalar et galar.png"),
            require("../media/images/intro_chap_02/suttung.png")
        ]);

        this.urls.push([
            require("../media/images/chap_02_part_01/bg.png"),
            require("../media/images/chap_02_part_01/assassinat.png"),
            require("../media/images/chap_02_part_01/fjalar et galar.png"),
            require("../media/images/chap_02_part_01/sang.png")
        ]);

        this.urls.push([
            require("../media/images/chap_02_part_02/abeille.png"),
            require("../media/images/chap_02_part_02/bg.png"),
            require("../media/images/chap_02_part_02/druide.png"),
            require("../media/images/chap_02_part_02/fjalar et galar.png"),
            require("../media/images/chap_02_part_02/suttung's father.png"),
            require("../media/images/chap_02_part_02/suutung's mother.png")
        ]);

        this.urls.push([
            require("../media/images/chap_02_part_03/bg.png"),
            require("../media/images/chap_02_part_03/fiole.png"),
            require("../media/images/chap_02_part_03/fjalar.png"),
            require("../media/images/chap_02_part_03/galar.png"),
            require("../media/images/chap_02_part_03/hand.png"),
            require("../media/images/chap_02_part_03/suttung.png")
        ]);

        this.urls.push([
            require("../media/images/intro_chap_03/bg.png"),
            require("../media/images/intro_chap_03/dragon.png"),
            require("../media/images/intro_chap_03/gunnlod et odin.png"),
            require("../media/images/intro_chap_03/odin arbre.png")
        ]);

        this.urls.push([
            require("../media/images/chap_03_part_01/bg.png"),
            require("../media/images/chap_03_part_01/baugi.png"),
            require("../media/images/chap_03_part_01/gunnlod.png"),
            require("../media/images/chap_03_part_01/odin.png")
        ]);

        this.urls.push([
            require("../media/images/chap_03_part_02/bg.png"),
            require("../media/images/chap_03_part_02/fiole.png"),
            require("../media/images/chap_03_part_02/hand.png"),
            require("../media/images/chap_03_part_02/odin et gunnlod.png")
        ]);

        this.urls.push([
            require("../media/images/chap_03_part_03/bg.png"),
            require("../media/images/chap_03_part_03/odin aigle.png"),
            require("../media/images/chap_03_part_03/tonneau_bot.png"),
            require("../media/images/chap_03_part_03/tonneau_top.png"),
            require("../media/images/chap_03_part_03/valhalla.png")
        ]);

        this.urls.push([
            require("../media/images/conclu/bg.png"),
            require("../media/images/conclu/f.png"),
            require("../media/images/conclu/i.png"),
            require("../media/images/conclu/n.png")
        ]);

        Preloader.preload();

    }

    static preload() {

        var imageUrls = [];
        var htmlUrls = [];

        switch(window.location.pathname.replaceAll('/', '')) {
            case '':
                imageUrls = Preloader.urls[0];
                htmlUrls.push("/chap1/");
                break;

            case 'chap1':
                imageUrls = Preloader.urls[1];
                htmlUrls.push("/chap1/part1/");
                break;

            case 'chap1part1':
                imageUrls = Preloader.urls[2];
                htmlUrls.push("/chap1/part2/");
                break;

            case 'chap1part2':
                imageUrls = Preloader.urls[3];
                htmlUrls.push("/chap1/part3/");
                break;

            case 'chap1part3':
                imageUrls = Preloader.urls[4];
                htmlUrls.push("/chap2/");
                break;

            case 'chap2':
                imageUrls = Preloader.urls[5];
                htmlUrls.push("/chap2/part1/");
                break;

            case 'chap2part1':
                imageUrls = Preloader.urls[6];
                htmlUrls.push("/chap2/part2/");
                break;
            
            case 'chap2part2':
                imageUrls = Preloader.urls[7];
                htmlUrls.push("/chap2/part3/");
                break;

            case 'chap2part3':
                imageUrls = Preloader.urls[8];
                htmlUrls.push("/chap3/");
                break;

            case 'chap3':
                imageUrls = Preloader.urls[9];
                htmlUrls.push("/chap3/part1/");
                break;

            case 'chap3part1':
                imageUrls = Preloader.urls[10];
                htmlUrls.push("/chap3/part2/");
                break;

            case 'chap3part2':
                imageUrls = Preloader.urls[11];
                htmlUrls.push("/chap3/part3/");
                break;

            case 'chap3part3':
                imageUrls = Preloader.urls[12];
                htmlUrls.push("/conclu/");
                break;
        }

        for (var i = 0; i < imageUrls.length; i++) {
            Preloader.images[i] = new Image();
            Preloader.images[i].src = imageUrls[i];
        }

        for (var i = 0; i < htmlUrls.length; i++) {
            Preloader.links[i] = document.createElement("link");
            Preloader.links[i].rel = "prefetch";
            Preloader.links[i].href = htmlUrls[i];

            document.getElementById("main").appendChild(Preloader.links[i]);
        }

    }   

}

export default Preloader;