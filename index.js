
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
    "https://dishes-helper.vercel.app/dishes/Linguine-allo-scoglio.jpg",
    "https://dishes-helper.vercel.app/dishes/Escondidinho.jpg",
    "https://dishes-helper.vercel.app/dishes/Gambas-al-ajillo.jpg",
    "https://dishes-helper.vercel.app/dishes/Phanaeng-Curry.jpg",
    "https://dishes-helper.vercel.app/dishes/Mechouia-Salad.jpg",
    "https://dishes-helper.vercel.app/dishes/hummus.jpg",
    "https://dishes-helper.vercel.app/dishes/Esquites.jpg",
    "https://dishes-helper.vercel.app/dishes/Chateaubriand.jpg",
    "https://dishes-helper.vercel.app/dishes/valassky-frgal.jpg",
    "https://dishes-helper.vercel.app/dishes/Pasta-carbonara.jpg",
    "https://dishes-helper.vercel.app/dishes/Otoro-nigiri-sushi.jpg",
    "https://dishes-helper.vercel.app/dishes/Peruvian-roast-chicken.jpg",
    "https://dishes-helper.vercel.app/dishes/tiramisu.jpg",
    "https://dishes-helper.vercel.app/dishes/Phat-kaphrao.jpg",
    "https://dishes-helper.vercel.app/dishes/Guacamole.jpg",
    "https://dishes-helper.vercel.app/dishes/Leche-de-tigre.jpg",
    "https://dishes-helper.vercel.app/dishes/Frozen-custard.jpg",
    "https://dishes-helper.vercel.app/dishes/Giouvetsi.jpg",
    "https://dishes-helper.vercel.app/dishes/Lasagne-alla-Bolognese.jpg",
    "https://dishes-helper.vercel.app/dishes/Manti.jpg",
    "https://dishes-helper.vercel.app/dishes/Dan-Dan-noodles.jpg",
    "https://dishes-helper.vercel.app/dishes/Tagliatelle-al-ragu-alla-Bolognese.jpg",
    "https://dishes-helper.vercel.app/dishes/Dulce-de-leche.jpg",
    "https://dishes-helper.vercel.app/dishes/Milanesa-napolitana.jpg",
    "https://dishes-helper.vercel.app/dishes/mercimek-corbasi.jpg",
    "https://dishes-helper.vercel.app/dishes/Kladdkaka.jpg",
    "https://dishes-helper.vercel.app/dishes/Espetada.jpg",
    "https://dishes-helper.vercel.app/dishes/Tombik-Doner.jpg",
    "https://dishes-helper.vercel.app/dishes/Steak-au-poivre.jpg",
    "https://dishes-helper.vercel.app/dishes/Pasta-alla-gricia.jpg",
    "https://dishes-helper.vercel.app/dishes/Tonkotsu-ramen.jpg",
    "https://dishes-helper.vercel.app/dishes/Enchiladas-Suizas.jpg",
    "https://dishes-helper.vercel.app/dishes/Saganaki.jpg",
    "https://dishes-helper.vercel.app/dishes/Medovik.jpg",
    "https://dishes-helper.vercel.app/dishes/Provoleta.jpg",
    "https://dishes-helper.vercel.app/dishes/Carnitas.jpg",
    "https://dishes-helper.vercel.app/dishes/Tinginys.jpg",
    "https://dishes-helper.vercel.app/dishes/Koldunai.jpg",
    "https://dishes-helper.vercel.app/dishes/Piadina-Romagnola.jpg",
    "https://dishes-helper.vercel.app/dishes/Greek-salad.jpg",
    "https://dishes-helper.vercel.app/dishes/Paidakia.jpg",
    "https://dishes-helper.vercel.app/dishes/Salmon-Soup.jpg",
    "https://dishes-helper.vercel.app/dishes/cochinita-pibil.jpg",
    "https://dishes-helper.vercel.app/dishes/Mutabal.jpg",
    "https://dishes-helper.vercel.app/dishes/Gelato-al-pistacchio.jpg",
    "https://dishes-helper.vercel.app/dishes/Chilaquiles.jpg",
    "https://dishes-helper.vercel.app/dishes/Coxinha.jpg",
    "https://dishes-helper.vercel.app/dishes/Gyoza.jpg"
]
fleisch = [
    "https://dishes-helper.vercel.app/dishes/dondurma.jpg",
    "https://dishes-helper.vercel.app/dishes/Pan-de-bono.jpg",
    "https://dishes-helper.vercel.app/dishes/Tom-kha-gai.jpg",
    "https://dishes-helper.vercel.app/dishes/Picanha.jpg",
    "https://dishes-helper.vercel.app/dishes/Focaccia-alla-Genovese.jpg",
    "https://dishes-helper.vercel.app/dishes/Souffle-au-chocolat.jpg",
    "https://dishes-helper.vercel.app/dishes/Pappardelle-al-cinghiale.jpg",
    "https://dishes-helper.vercel.app/dishes/Pozole.jpg",
    "https://dishes-helper.vercel.app/dishes/Peking-duck.jpg",
    "https://dishes-helper.vercel.app/dishes/Hyderabadi-biryani.jpg",
    "https://dishes-helper.vercel.app/dishes/Fritto-misto.jpg",
    "https://dishes-helper.vercel.app/dishes/Pao-de-queijo.jpg",
    "https://dishes-helper.vercel.app/dishes/Ameijoas-a-Bulhao-Pato.jpg",
    "https://dishes-helper.vercel.app/dishes/Tikka.jpg",
    "https://dishes-helper.vercel.app/dishes/Sernik.jpg",
    "https://dishes-helper.vercel.app/dishes/sarma.jpg",
    "https://dishes-helper.vercel.app/dishes/Mixed-ceviche.jpg",
    "https://dishes-helper.vercel.app/dishes/Carne-de-porco-a-Alentejana.jpg",
    "https://dishes-helper.vercel.app/dishes/Kapustnica.jpg",
    "https://dishes-helper.vercel.app/dishes/Kaiserschmarrn.jpg",
    "https://dishes-helper.vercel.app/dishes/Butter-Garlic-Naan.jpg",
    "https://dishes-helper.vercel.app/dishes/Roti-canai.jpg",
    "https://dishes-helper.vercel.app/dishes/Guotie.jpg",
    "https://dishes-helper.vercel.app/dishes/Jianbing.jpg",
    "https://dishes-helper.vercel.app/dishes/Poke.jpg",
    "https://dishes-helper.vercel.app/dishes/Hunkar-begendi.jpg",
    "https://dishes-helper.vercel.app/dishes/Frango-assado-com-piri-piri.jpg",
    "https://dishes-helper.vercel.app/dishes/baguette.jpg",
    "https://dishes-helper.vercel.app/dishes/Boiled-Maine-Lobster.jpg",
    "https://dishes-helper.vercel.app/dishes/ravioli.jpg",
    "https://dishes-helper.vercel.app/dishes/Kleftiko.jpg",
    "https://dishes-helper.vercel.app/dishes/Pecena-kachna.jpg",
    "https://dishes-helper.vercel.app/dishes/Dakos.jpg",
    "https://dishes-helper.vercel.app/dishes/Pernil.jpg"
]

vegan = [
    "https://dishes-helper.vercel.app/dishes/Chicken-65.jpg",
    "https://dishes-helper.vercel.app/dishes/Beef-pho.jpg",
    "https://dishes-helper.vercel.app/dishes/Carne-asada-tacos.jpg",
    "https://dishes-helper.vercel.app/dishes/Pizza-Napoletana.jpg",
    "https://dishes-helper.vercel.app/dishes/Creme-brulee.jpg",
    "https://dishes-helper.vercel.app/dishes/Cesnecka.jpg",
    "https://dishes-helper.vercel.app/dishes/Shashlik.jpg",
    "https://dishes-helper.vercel.app/dishes/khinkali.jpg",
    "https://dishes-helper.vercel.app/dishes/Samgyeopsal.jpg",
    "https://dishes-helper.vercel.app/dishes/Panzerotti.jpg",
    "https://dishes-helper.vercel.app/dishes/Tzatziki.jpg",
    "https://dishes-helper.vercel.app/dishes/quesadilla.jpg",
    "https://dishes-helper.vercel.app/dishes/Gravlax.jpg",
    "https://dishes-helper.vercel.app/dishes/Parmigiana-alla-napoletana.jpg",
    "https://dishes-helper.vercel.app/dishes/Bistecca-alla-Fiorentina.jpg",
    "https://dishes-helper.vercel.app/dishes/Raclette.jpg"
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

    dishName.textContent = img.src.slice(40, -4).replaceAll("-", " ").toUpperCase()
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
