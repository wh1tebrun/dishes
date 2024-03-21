
counter = 0


const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();
const button1 = document.querySelector("food-logo-1");
const button2 = document.querySelector("food-logo-2");

var dishName = document.getElementById("dish-name");

playAgainButtons = Array.from(document.getElementsByClassName("stats-btn__again"))
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

imgs = Array.from(document.getElementsByTagName("img"))
vegan = Array.from(document.getElementsByClassName("hidden-imgs-1"))
fleisch = Array.from(document.getElementsByClassName("hidden-imgs-3"))
imgsrcs = vegan.concat(fleisch)


function foodTypeListener(event) {

    if (event.currentTarget === button1) {

    }

    else if (event.currentTarget === button2) {

    }

    else {

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
