function getImageElement(imageName) {
    return document.getElementById(imageName);
}

function unscaleImage(image) {
    getImageElement(image).style.transform = 'scale(1)';
    getImageElement(image).style.filter = 'grayscale(1)';
}

function scaleImage(image) {
    getImageElement(image).style.transform = 'scale(1.1)';
    getImageElement(image).style.filter = 'grayscale(0)';
}

function appendElement(quantityOfElements) {

    for(let i = 1; i < quantityOfElements; i++) {
        let node = document.createElement('li');
        let textNode = document.createTextNode(i);

        node.appendChild(textNode);
        document.getElementById('level-list').appendChild(node).classList.add('level-item');
    }
}

var leftPadding = 0;
var rightPadding = 0;

function incrementCarrouselLeft() {
    rightPadding -= 100;
    leftPadding += 100;
    if(leftPadding > 2300) {
        leftPadding = 0;
        rightPadding = 0;
    }
}

function incrementCarrouselRight() {
    leftPadding -= 100;
    rightPadding += 100;
    if(rightPadding > 2100) {
        leftPadding = 0;
        rightPadding = 0;
    }
}

function setPaddingRight(carrousel) {
    let totalPaddingRight = carrousel.style.paddingRight = rightPadding + 'px';

    console.log('paddding right: ' + rightPadding + ' | ' + totalPaddingRight);
}

function setPaddingLeft(carrousel) {
    let totalPaddingLeft = carrousel.style.paddingLeft = leftPadding + 'px';

    console.log('paddding left: ' + leftPadding + ' | ' + totalPaddingLeft);
}

function moveCarrouselLeft(carrousel) {
    incrementCarrouselRight();
    setPaddingRight(carrousel);
}

function moveCarrouselRight(carrousel) {
    incrementCarrouselLeft()
    setPaddingLeft(carrousel);
}

function active(elementLevel) {
    elementLevel.classList.add('last-clicked');
    elementLevel.classList.add('active-level');
    return elementLevel;
}

function removeLastClickedAndActive(elementLevel) {
    elementLevel.classList.remove('last-clicked');
    elementLevel.classList.remove('active-level');
}

function lastCLicked(elementLevel) {
    return elementLevel;
}
 
document.addEventListener('DOMContentLoaded', function() {
    appendElement(100);
    let carrousel = document.getElementById('level-list');
    let arrowRight = document.getElementsByClassName('right-arrow')[0];
    let arrowLeft = document.getElementsByClassName('left-arrow')[0];

    arrowRight.addEventListener('click', function() {
        moveCarrouselLeft(carrousel);
    });

    arrowLeft.addEventListener('click', function() {
        moveCarrouselRight(carrousel);
    });

    var lastClicked;
    carrousel.addEventListener("click", function(e) {
        if(e.target && e.target.matches("li.level-item")) {
            lastCLicked(active(e.target));

            console.log('target = ' + e.target.innerHTML);
            console.log('target = ' + lastClicked.innerHTML);

            if(e.target.matches("last-clicked") && e.target.matches("active-level")) {
                console.log('active match = ' + e.target.classList);
            } else {
                e.target.classList.add('active-level');
                e.target.classList.add('last-clicked');
                lastClicked = e.target;
                console.log('last clicked: ' + lastClicked);
            }
        }
      });

    console.log('all ready');
 }, false);
