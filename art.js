const images = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;

setupDots();
showImage(slideIndex);

function isCurrentDot(dot) {
    return dot === dots[slideIndex];
}

function setupDots() {
    for(let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('mouseover', () => {
            if(!isCurrentDot(dots[i])) {
                dots[i].style.filter = 'opacity(70%)';
            }
        });

        dots[i].addEventListener('mouseout', () => {
            if(!isCurrentDot(dots[i])) {
                dots[i].style.filter = 'opacity(40%)';
            }
        });

        dots[i].addEventListener('mousedown', () => {
            if(!isCurrentDot(dots[i])) {
                dots[i].style.filter = 'opacity(100%)';
            }
        });

        dots[i].addEventListener('mouseup', () => {
            if(!isCurrentDot(dots[i])) {
                slideIndex = i;
                showImage(slideIndex);
            }
        });
    }
}

function incrementSlideIndex(amount) {
    slideIndex += amount;

    if(slideIndex < 0) slideIndex = images.length - 1;
    if(slideIndex > images.length - 1) slideIndex = 0;

    showImage(slideIndex);
}

function showImage(imageIndex) {
    for(let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }

    images[slideIndex].style.display = 'block';

    for(let i = 0; i < dots.length; i++) {
        dots[i].style.filter = 'opacity(40%)';
    }

    dots[imageIndex].style.filter = 'opacity(100%)';
}