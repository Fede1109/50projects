const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    /*
    A position is calculated in the window that is 4/5 of the total height of the browser window.
    This is the point at which it will be decided whether a box should be shown or not.
    */
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        //Its top position relative to the browser window is obtained using box.getBoundingClientRect().top
        /*
            The getBoundingClientRect function is a method available on DOM elements in JavaScript. 
            It returns a DOMRect object that provides information about the size of an element and its position relative to the viewport. 
            This includes properties such as top, right, bottom, left, width, and height.
        */
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}