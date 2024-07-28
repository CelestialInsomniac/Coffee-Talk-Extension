var twitch = window.Twitch.ext;

// refs to dom elements
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// refs to coffee buttons
const blackMagicButton = document.querySelector("#blackmagic");
const caffeLatteButton = document.querySelector("#caffelatte");
const cappuccinoButton = document.querySelector("#cappuccino");
const espressoButton = document.querySelector("#espresso");
const sugarSpiceButton = document.querySelector("#sugarspice");

// event listeners
previous.addEventListener("click", goPrevPage);
next.addEventListener("click", goNextPage);

blackMagicButton.addEventListener("click", () => sendMessage("!blackmagic"));
caffeLatteButton.addEventListener("click", () => sendMessage("!caffelatte"));
cappuccinoButton.addEventListener("click", () => sendMessage("!cappuccino"));
espressoButton.addEventListener("click", () => sendMessage("!espresso"));
sugarSpiceButton.addEventListener("click", () => sendMessage("!sugarspice"));

// business logic
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                previous.style.display = "block";
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
                next.style.display = "none";
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
                previous.style.display = "none";
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
                next.style.display = "block";
                paper3.classList.remove("flipped");
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation--;
    }
}

function sendMessage(message) {
    fetch('http://localhost:3000/pubsub', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ event: 'message', data: message })
    })
    .then(response => {
        if (response.ok) {
            console.log('Message sent to server');
        } else {
            console.error('Failed to send message to server');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

twitch.listen('broadcast', function (target, contentType, message) {
    try {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.event === "message") {
            console.log(`Received message: ${parsedMessage.data}`);
        }
    } catch (e) {
        console.error(`Failed to parse message: ${e}`);
    }
});