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
                //openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                paper2.style.display = "none"; // Hide paper2
                paper3.style.display = "none"; // Hide paper3
                break;
            case 2:
                paper2.style.zIndex = 2;
                paper2.style.display = "block"; // Show paper2
                paper3.style.display = "none"; // Hide paper3
                break;
            case 3:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                paper2.style.display = "block"; // Show paper2
                paper3.style.display = "none"; // Hide paper3
                break;
            case 4:
                paper3.style.zIndex = 3;
                paper3.style.display = "block"; // Show paper2
                paper2.style.display = "none"; // Hide paper2
                break;
            case 5:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                paper3.style.display = "block"; // Show paper2
                paper2.style.display = "none"; // Hide paper2
                break;
            //closeBook();
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
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:

                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();

                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}