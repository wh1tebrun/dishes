
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
vegan = Array.from(document.getElementsByClassName("hidden-imgs-3"))
vegetarisch = Array.from(document.getElementsByClassName("hidden-imgs-2"))
fleisch = Array.from(document.getElementsByClassName("hidden-imgs-1"))
imgsrcs = fleisch.concat(vegan).concat(vegetarisch)



console.log(fleisch[1].src)

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
    imgs[delIndex].src = imgsrcs[rndNum].src;
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
