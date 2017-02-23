window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");

    $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", visProduktListe)






}

function visProduktListe(listen) {
    console.table(listen);
    listen.forEach(visProdukt);
}



function visProdukt(produkt) {
    console.log(produkt);

    var klon = document.querySelector("#produkt_template").content.cloneNode(true);


    klon.querySelector(".data_navn").innerHTML = produkt.navn;
    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    var rabatpris = Math.ceil(produkt.pris - (produkt.pris * produkt.rabatsats / 100));
    klon.querySelector(".data_rabatpris").innerHTML = rabatpris;

    klon.querySelector(".data_billede").src = "imgs/medium/" + produkt.billede + "-md.jpg";

    if (produkt.udsolgt == false) {

        var udsolgttekst = klon.querySelector(".udsolgttekst");
        udsolgttekst.parentNode.removeChild(udsolgttekst);
    } else {
        klon.querySelector(".pris").classList.add("udsolgt");
    }


    document.querySelector(".produktliste").appendChild(klon);
}
