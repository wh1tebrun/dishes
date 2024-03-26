
counter = 0
buttonCounter1 = 0
buttonCounter2 = 0
refreshCounter = 0

const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();







var dishName = document.getElementById("dish-name");

playAgainButtons = Array.from(document.getElementsByClassName("stats-btn__again"))
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

imgs = Array.from(document.getElementsByTagName("img"))
imgs = imgs.slice(2)
vegetarisch = [
    "https://girlfriend-two.vercel.app/dishes/Linguine-allo-scoglio.jpg",
    "https://girlfriend-two.vercel.app/dishes/Escondidinho.jpg",
    "https://girlfriend-two.vercel.app/dishes/Gambas-al-ajillo.jpg",
    "https://girlfriend-two.vercel.app/dishes/Phanaeng-Curry.jpg",
    "https://girlfriend-two.vercel.app/dishes/Mechouia-Salad.jpg",
    "https://girlfriend-two.vercel.app/dishes/hummus.jpg",
    "https://girlfriend-two.vercel.app/dishes/Esquites.jpg",
    "https://girlfriend-two.vercel.app/dishes/Chateaubriand.jpg",
    "https://girlfriend-two.vercel.app/dishes/valassky-frgal.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pasta-carbonara.jpg",
    "https://girlfriend-two.vercel.app/dishes/Otoro-nigiri-sushi.jpg",
    "https://girlfriend-two.vercel.app/dishes/Peruvian-roast-chicken.jpg",
    "https://girlfriend-two.vercel.app/dishes/tiramisu.jpg",
    "https://girlfriend-two.vercel.app/dishes/Phat-kaphrao.jpg",
    "https://girlfriend-two.vercel.app/dishes/Guacamole.jpg",
    "https://girlfriend-two.vercel.app/dishes/Leche-de-tigre.jpg",
    "https://girlfriend-two.vercel.app/dishes/Frozen-custard.jpg",
    "https://girlfriend-two.vercel.app/dishes/Giouvetsi.jpg",
    "https://girlfriend-two.vercel.app/dishes/Lasagne-alla-Bolognese.jpg",
    "https://girlfriend-two.vercel.app/dishes/Manti.jpg",
    "https://girlfriend-two.vercel.app/dishes/Dan-Dan-noodles.jpg",
    "https://girlfriend-two.vercel.app/dishes/Tagliatelle-al-ragu-alla-Bolognese.jpg",
    "https://girlfriend-two.vercel.app/dishes/Dulce-de-leche.jpg",
    "https://girlfriend-two.vercel.app/dishes/Milanesa-napolitana.jpg",
    "https://girlfriend-two.vercel.app/dishes/mercimek-corbasi.jpg",
    "https://girlfriend-two.vercel.app/dishes/Kladdkaka.jpg",
    "https://girlfriend-two.vercel.app/dishes/Espetada.jpg",
    "https://girlfriend-two.vercel.app/dishes/Tombik-Doner.jpg",
    "https://girlfriend-two.vercel.app/dishes/Steak-au-poivre.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pasta-alla-gricia.jpg",
    "https://girlfriend-two.vercel.app/dishes/Tonkotsu-ramen.jpg",
    "https://girlfriend-two.vercel.app/dishes/Enchiladas-Suizas.jpg",
    "https://girlfriend-two.vercel.app/dishes/Saganaki.jpg",
    "https://girlfriend-two.vercel.app/dishes/Medovik.jpg",
    "https://girlfriend-two.vercel.app/dishes/Provoleta.jpg",
    "https://girlfriend-two.vercel.app/dishes/Carnitas.jpg",
    "https://girlfriend-two.vercel.app/dishes/Tinginys.jpg",
    "https://girlfriend-two.vercel.app/dishes/Koldunai.jpg",
    "https://girlfriend-two.vercel.app/dishes/Piadina-Romagnola.jpg",
    "https://girlfriend-two.vercel.app/dishes/Greek-salad.jpg",
    "https://girlfriend-two.vercel.app/dishes/Paidakia.jpg",
    "https://girlfriend-two.vercel.app/dishes/Salmon-Soup.jpg",
    "https://girlfriend-two.vercel.app/dishes/cochinita-pibil.jpg",
    "https://girlfriend-two.vercel.app/dishes/Mutabal.jpg",
    "https://girlfriend-two.vercel.app/dishes/Gelato-al-pistacchio.jpg",
    "https://girlfriend-two.vercel.app/dishes/Chilaquiles.jpg",
    "https://girlfriend-two.vercel.app/dishes/Coxinha.jpg",
    "https://girlfriend-two.vercel.app/dishes/Gyoza.jpg"
]
fleisch = [
    "https://girlfriend-two.vercel.app/dishes/dondurma.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pan-de-bono.jpg",
    "https://girlfriend-two.vercel.app/dishes/Tom-kha-gai.jpg",
    "https://girlfriend-two.vercel.app/dishes/Picanha.jpg",
    "https://girlfriend-two.vercel.app/dishes/Focaccia-alla-Genovese.jpg",
    "https://girlfriend-two.vercel.app/dishes/Souffle-au-chocolat.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pappardelle-al-cinghiale.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pozole.jpg",
    "https://girlfriend-two.vercel.app/dishes/Peking-duck.jpg",
    "https://girlfriend-two.vercel.app/dishes/Hyderabadi-biryani.jpg",
    "https://girlfriend-two.vercel.app/dishes/Fritto-misto.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pao-de-queijo.jpg",
    "https://girlfriend-two.vercel.app/dishes/Ameijoas-a-Bulhao-Pato.jpg",
    "https://girlfriend-two.vercel.app/dishes/Tikka.jpg",
    "https://girlfriend-two.vercel.app/dishes/Sernik.jpg",
    "https://girlfriend-two.vercel.app/dishes/sarma.jpg",
    "https://girlfriend-two.vercel.app/dishes/Mixed-ceviche.jpg",
    "https://girlfriend-two.vercel.app/dishes/Carne-de-porco-a-Alentejana.jpg",
    "https://girlfriend-two.vercel.app/dishes/Kapustnica.jpg",
    "https://girlfriend-two.vercel.app/dishes/Kaiserschmarrn.jpg",
    "https://girlfriend-two.vercel.app/dishes/Butter-Garlic-Naan.jpg",
    "https://girlfriend-two.vercel.app/dishes/Roti-canai.jpg",
    "https://girlfriend-two.vercel.app/dishes/Guotie.jpg",
    "https://girlfriend-two.vercel.app/dishes/Jianbing.jpg",
    "https://girlfriend-two.vercel.app/dishes/Poke.jpg",
    "https://girlfriend-two.vercel.app/dishes/Hunkar-begendi.jpg",
    "https://girlfriend-two.vercel.app/dishes/Frango-assado-com-piri-piri.jpg",
    "https://girlfriend-two.vercel.app/dishes/baguette.jpg",
    "https://girlfriend-two.vercel.app/dishes/Boiled-Maine-Lobster.jpg",
    "https://girlfriend-two.vercel.app/dishes/ravioli.jpg",
    "https://girlfriend-two.vercel.app/dishes/Kleftiko.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pecena-kachna.jpg",
    "https://girlfriend-two.vercel.app/dishes/Dakos.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pernil.jpg"
]

vegan = [
    "https://girlfriend-two.vercel.app/dishes/Chicken-65.jpg",
    "https://girlfriend-two.vercel.app/dishes/Beef-pho.jpg",
    "https://girlfriend-two.vercel.app/dishes/Carne-asada-tacos.jpg",
    "https://girlfriend-two.vercel.app/dishes/Pizza-Napoletana.jpg",
    "https://girlfriend-two.vercel.app/dishes/Creme-brulee.jpg",
    "https://girlfriend-two.vercel.app/dishes/Cesnecka.jpg",
    "https://girlfriend-two.vercel.app/dishes/Shashlik.jpg",
    "https://girlfriend-two.vercel.app/dishes/khinkali.jpg",
    "https://girlfriend-two.vercel.app/dishes/Samgyeopsal.jpg",
    "https://girlfriend-two.vercel.app/dishes/Panzerotti.jpg",
    "https://girlfriend-two.vercel.app/dishes/Tzatziki.jpg",
    "https://girlfriend-two.vercel.app/dishes/quesadilla.jpg",
    "https://girlfriend-two.vercel.app/dishes/Gravlax.jpg",
    "https://girlfriend-two.vercel.app/dishes/Parmigiana-alla-napoletana.jpg",
    "https://girlfriend-two.vercel.app/dishes/Bistecca-alla-Fiorentina.jpg",
    "https://girlfriend-two.vercel.app/dishes/Raclette.jpg"
]
imgsrcs = fleisch.concat(vegan).concat(vegetarisch)


buttons = Array.from(document.getElementsByClassName("food-logo"))
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
    imgs[delIndex].src = imgsrcs[rndNum];
    imgsrcs.splice(rndNum, 1);
}

// When the window loads, replace the first two dishes
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
