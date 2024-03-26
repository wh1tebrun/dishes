
counter = 0
buttonCounter1 = 0
buttonCounter2 = 0
refreshCounter = 0

const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();



buttons = Array.from(document.getElementsByClassName("food-logo"))



var dishName = document.getElementById("dish-name");

playAgainButtons = Array.from(document.getElementsByClassName("stats-btn__again"))
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

imgs = Array.from(document.getElementsByTagName("img"))
imgs = imgs.slice(2)
vegetarisch = ["https://girlfriend-two.vercel.app/images/Linguine-allo-scoglio.jpg",
    "https://girlfriend-two.vercel.app/images/Escondidinho.jpg",
    "https://girlfriend-two.vercel.app/images/Gambas-al-ajillo.jpg",
    "https://girlfriend-two.vercel.app/images/Phanaeng-Curry.jpg",
    "https://girlfriend-two.vercel.app/images/Mechouia-Salad.jpg",
    "https://girlfriend-two.vercel.app/images/hummus.jpg",
    "https://girlfriend-two.vercel.app/images/Esquites.jpg",
    "https://girlfriend-two.vercel.app/images/Chateaubriand.jpg",
    "https://girlfriend-two.vercel.app/images/valassky-frgal.jpg",
    "https://girlfriend-two.vercel.app/images/Pasta-carbonara.jpg",
    "https://girlfriend-two.vercel.app/images/Otoro-nigiri-sushi.jpg",
    "https://girlfriend-two.vercel.app/images/Peruvian-roast-chicken.jpg",
    "https://girlfriend-two.vercel.app/images/tiramisu.jpg",
    "https://girlfriend-two.vercel.app/images/Phat-kaphrao.jpg",
    "https://girlfriend-two.vercel.app/images/Guacamole.jpg",
    "https://girlfriend-two.vercel.app/images/Leche-de-tigre.jpg",
    "https://girlfriend-two.vercel.app/images/Frozen-custard.jpg",
    "https://girlfriend-two.vercel.app/images/Giouvetsi.jpg",
    "https://girlfriend-two.vercel.app/images/Lasagne-alla-Bolognese.jpg",
    "https://girlfriend-two.vercel.app/images/Manti.jpg",
    "https://girlfriend-two.vercel.app/images/Dan-Dan-noodles.jpg",
    "https://girlfriend-two.vercel.app/images/Tagliatelle-al-ragu-alla-Bolognese.jpg",
    "https://girlfriend-two.vercel.app/images/Dulce-de-leche.jpg",
    "https://girlfriend-two.vercel.app/images/Milanesa-napolitana.jpg",
    "https://girlfriend-two.vercel.app/images/mercimek-corbasi.jpg",
    "https://girlfriend-two.vercel.app/images/Kladdkaka.jpg",
    "https://girlfriend-two.vercel.app/images/Espetada.jpg",
    "https://girlfriend-two.vercel.app/images/Tombik-Doner.jpg",
    "https://girlfriend-two.vercel.app/images/Steak-au-poivre.jpg",
    "https://girlfriend-two.vercel.app/images/Pasta-alla-gricia.jpg",
    "https://girlfriend-two.vercel.app/images/Tonkotsu-ramen.jpg",
    "https://girlfriend-two.vercel.app/images/Enchiladas-Suizas.jpg",
    "https://girlfriend-two.vercel.app/images/Saganaki.jpg",
    "https://girlfriend-two.vercel.app/images/Medovik.jpg",
    "https://girlfriend-two.vercel.app/images/Provoleta.jpg",
    "https://girlfriend-two.vercel.app/images/Carnitas.jpg",
    "https://girlfriend-two.vercel.app/images/Tinginys.jpg",
    "https://girlfriend-two.vercel.app/images/Koldunai.jpg",
    "https://girlfriend-two.vercel.app/images/Piadina-Romagnola.jpg",
    "https://girlfriend-two.vercel.app/images/Greek-salad.jpg",
    "https://girlfriend-two.vercel.app/images/Paidakia.jpg",
    "https://girlfriend-two.vercel.app/images/Salmon-Soup.jpg",
    "https://girlfriend-two.vercel.app/images/cochinita-pibil.jpg",
    "https://girlfriend-two.vercel.app/images/Mutabal.jpg",
    "https://girlfriend-two.vercel.app/images/Gelato-al-pistacchio.jpg",
    "https://girlfriend-two.vercel.app/images/Chilaquiles.jpg",
    "https://girlfriend-two.vercel.app/images/Coxinha.jpg",
    "https://girlfriend-two.vercel.app/images/Gyoza.jpg"]
fleisch = ["dondurma.jpg",
    "https://girlfriend-two.vercel.app/images/Pan-de-bono.jpg",
    "https://girlfriend-two.vercel.app/images/Tom-kha-gai.jpg",
    "https://girlfriend-two.vercel.app/images/Picanha.jpg",
    "https://girlfriend-two.vercel.app/images/Focaccia-alla-Genovese.jpg",
    "https://girlfriend-two.vercel.app/images/Souffle-au-chocolat.jpg",
    "https://girlfriend-two.vercel.app/images/Pappardelle-al-cinghiale.jpg",
    "https://girlfriend-two.vercel.app/images/Pozole.jpg",
    "https://girlfriend-two.vercel.app/images/Peking-duck.jpg",
    "https://girlfriend-two.vercel.app/images/Hyderabadi-biryani.jpg",
    "https://girlfriend-two.vercel.app/images/Fritto-misto.jpg",
    "https://girlfriend-two.vercel.app/images/Pao-de-queijo.jpg",
    "https://girlfriend-two.vercel.app/images/Ameijoas-a-Bulhao-Pato.jpg",
    "https://girlfriend-two.vercel.app/images/Tikka.jpg",
    "https://girlfriend-two.vercel.app/images/Sernik.jpg",
    "https://girlfriend-two.vercel.app/images/sarma.jpg",
    "https://girlfriend-two.vercel.app/images/Mixed-ceviche.jpg",
    "https://girlfriend-two.vercel.app/images/Carne-de-porco-a-Alentejana.jpg",
    "https://girlfriend-two.vercel.app/images/Kapustnica.jpg",
    "https://girlfriend-two.vercel.app/images/Kaiserschmarrn.jpg",
    "https://girlfriend-two.vercel.app/images/Butter-Garlic-Naan.jpg",
    "https://girlfriend-two.vercel.app/images/Roti-canai.jpg",
    "https://girlfriend-two.vercel.app/images/Guotie.jpg",
    "https://girlfriend-two.vercel.app/images/Jianbing.jpg",
    "https://girlfriend-two.vercel.app/images/Poke.jpg",
    "https://girlfriend-two.vercel.app/images/Hunkar-begendi.jpg",
    "https://girlfriend-two.vercel.app/images/Frango-assado-com-piri-piri.jpg",
    "https://girlfriend-two.vercel.app/images/baguette.jpg",
    "https://girlfriend-two.vercel.app/images/Boiled-Maine-Lobster.jpg",
    "https://girlfriend-two.vercel.app/images/ravioli.jpg",
    "https://girlfriend-two.vercel.app/images/Kleftiko.jpg",
    "https://girlfriend-two.vercel.app/images/Pecena-kachna.jpg",
    "https://girlfriend-two.vercel.app/images/Dakos.jpg",
    "https://girlfriend-two.vercel.app/images/Pernil.jpg"]

vegan = [
    "https://girlfriend-two.vercel.app/images/Chicken-65.jpg",
    "https://girlfriend-two.vercel.app/images/Beef-pho.jpg",
    "https://girlfriend-two.vercel.app/images/Carne-asada-tacos.jpg",
    "https://girlfriend-two.vercel.app/images/Pizza-Napoletana.jpg",
    "https://girlfriend-two.vercel.app/images/Creme-brulee.jpg",
    "https://girlfriend-two.vercel.app/images/Cesnecka.jpg",
    "https://girlfriend-two.vercel.app/images/Shashlik.jpg",
    "https://girlfriend-two.vercel.app/images/khinkali.jpg",
    "https://girlfriend-two.vercel.app/images/Samgyeopsal.jpg",
    "https://girlfriend-two.vercel.app/images/Panzerotti.jpg",
    "https://girlfriend-two.vercel.app/images/Tzatziki.jpg",
    "https://girlfriend-two.vercel.app/images/quesadilla.jpg",
    "https://girlfriend-two.vercel.app/images/Gravlax.jpg",
    "https://girlfriend-two.vercel.app/images/Parmigiana-alla-napoletana.jpg",
    "https://girlfriend-two.vercel.app/images/Bistecca-alla-Fiorentina.jpg",
    "https://girlfriend-two.vercel.app/images/Raclette.jpg"
]
imgsrcs = fleisch.concat(vegan).concat(vegetarisch)

buttons[0].addEventListener('click', downButton1)
buttons[1].addEventListener('click', downButton2)





function downButton1() {

    if (buttonCounter1 < 1 && buttonCounter2 < 1) {

        imgsrcs = vegan
        buttons[0].style.backgroundColor = "#6fffca83";
        buttonCounter1++
        replaceAndRemoveImage(0);
        replaceAndRemoveImage(1);
        refreshCounter++
    }

    else {
        imgsrcs = fleisch.concat(vegan)
        buttons[0].style.backgroundColor = "#fff"
        buttonCounter1--

        if (buttonCounter1 < 0) {
            buttonCounter1 = 0
        }


    }

    if (refreshCounter === 3) {
        location.reload();
    }


}
function downButton2() {

    if (buttonCounter2 < 1 && buttonCounter1 < 1) {

        imgsrcs = vegetarisch
        buttons[1].style.backgroundColor = "#6fffca83";
        buttonCounter2++
        replaceAndRemoveImage(0);
        replaceAndRemoveImage(1);
        refreshCounter++
    }

    else {
        imgsrcs = fleisch.concat(vegan)
        buttons[1].style.backgroundColor = "#fff"
        buttonCounter2--


        if (buttonCounter2 < 0) {
            buttonCounter2 = 0
        }

    }

    if (refreshCounter === 3) {
        location.reload();
    }

}





// Function to replace the image source of the image at delIndex with a random image from imgsrcs
// and then remove the used image source from imgsrcs
function replaceAndRemoveImage(delIndex) {
    const rndNum = Math.floor(getRandomArbitrary(0, imgsrcs.length));
    imgs[delIndex] = imgsrcs[rndNum];
    imgsrcs.splice(rndNum, 1);
}

// When the window loads, replace the first two images
window.onload = () => {
    replaceAndRemoveImage(0);
    replaceAndRemoveImage(1);
};



// Event listener function for removing an image
function removeImageListener(event) {
    const img = event.currentTarget;
    const i = img._index;
    const delIndex = 1 - i;

    dishName.textContent = img.src.slice(41, -4).replaceAll("-", " ").toUpperCase()
    console.log(dishName.textContent)


    if (counter == parseInt(output.innerHTML, 10) - 2) {
        img.removeEventListener("click", removeImageListener);
        imgs[delIndex].style.visibility = "hidden";
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        }).then(() => jsConfetti.addConfetti());

        playAgainButtons[0].style.visibility = 'visible';


    } else {
        replaceAndRemoveImage(delIndex);
        counter++;
    }

    if (counter >= 1) {
        document.getElementById("myRange").disabled = true;
        buttons[0].removeEventListener("click", downButton1);
        buttons[1].removeEventListener("click", downButton2);
    }
}

// Adding the event listener to each image
imgs.forEach((img, i) => {
    img._index = i;
    img.addEventListener("click", removeImageListener);

});







var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;


}
