
counter = 0

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

imgs = Array.from(document.getElementsByTagName("img"))
imgsrcs = Array.from(document.getElementsByClassName("hidden-imgs"))

function my_remove(delIndex) {
    rndNum = getRandomArbitrary(0, imgsrcs.length)
    console.log(`rndNum=${rndNum},${imgsrcs[rndNum]}`)
    imgs[delIndex].src = imgsrcs[rndNum].src
    imgsrcs.splice(rndNum, 1)
}

window.onload = (e) => {
    my_remove(0)
    my_remove(1)
}

function remove_listener(event) {
    img = event.currentTarget
    i = img._index

    delIndex = 1 - i

    if (counter == 11) {

        img.removeEventListener("click", remove_listener)
        imgs[delIndex].style.visibility = "hidden"




    }
    else {
        my_remove(delIndex)
        counter++

    }


}

for (const [i, img] of imgs.entries()) {
    img._index = i
    img.addEventListener("click", remove_listener)
} 
