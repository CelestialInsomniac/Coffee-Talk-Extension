var twitch = window.Twitch.ext;

// refs to dom elements
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");


// event listeners
previous.addEventListener("click", goPrevPage);
next.addEventListener("click", goNextPage);

// business logic
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

//function openBook() {
//    book.style.transform = "translateX(0%)";
//    previous.style.transform = "translateX(0px)";
//    next.style.transform = "translateX(0px)";
//}

//function closeBook(isAtBeginning) {
//    if (isAtBeginning) {
//        book.style.transform = "translateX(0%)";
//
//    } else {
//        book.style.transform = "translateX(0%)";
//    }
//    previous.style.transform = "translateX(0px)";
//    next.style.transform = "translateX(0px)";
//}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                paper1.classList.add("flipped");
                break;
            case 2:
                paper1.classList.add("slide-out");
                paper2.classList.add("slide-in");
                break;
            case 3:
                paper2.classList.add("flipped");
                break;
            case 4:
                paper2.classList.add("slide-out");
                paper3.classList.add("slide-in");
                break;
            case 5:
                paper3.classList.add("flipped");
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                paper1.classList.remove("flipped");
                break;
            case 3:
                paper1.classList.remove("slide-out");
                paper1.classList.add("slide-in");
                paper2.classList.remove("slide-in");
                paper2.classList.remove("flipped");
                break;
            case 4:
                paper2.classList.remove("flipped");
                break;
            case 5:
                paper2.classList.remove("slide-out");
                paper2.classList.add("slide-in");
                paper3.classList.remove("slide-in");
                paper3.classList.remove("flipped");
                break;
            case 6:
                paper3.classList.remove("flipped");
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}