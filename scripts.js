!(function(d) {

    const itemClassName = "carousel-picture";
    let items = d.getElementsByClassName(itemClassName);
    let totalItems = items.length;
    let slide = 0;
    let moving = true;

    function setInitialClasses() {
        items[totalItems - 1].classList.add("prev");
        items[0].classList.add("active");
        items[1].classList.add("next");
    }

    function setEventListeners() {
        let next = d.getElementsByClassName("carousel-button-next");
        let prev = d.getElementsByClassName("carousel-button-prev");

        next.addEventListener('click', moveNext);
        prev.addEventListener('click', movePrev);
    }

    function moveNext() {
        if (!moving) {
            if (slide === (totalItems - 1)) {
                slide = 0;
            } else {
                slide++;
            }

            moveCarouselTo(slide);
        }
    }

    function movePrev() {
        if (!moving) {
            if (slide === 0) {
                slide = (totalItems - 1);
            } else {
                slide--;
            }

            moveCarouselTo(slide);
        }
    }


}(document));