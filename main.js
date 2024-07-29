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

// JavaScript to show tooltips
const buttons = document.querySelectorAll("button[data-tooltip]");

buttons.forEach(button => {
    button.addEventListener("mouseenter", showTooltip);
    button.addEventListener("mouseleave", hideTooltip);
});

function showTooltip(event) {
    const button = event.currentTarget;
    const tooltipText = button.getAttribute("data-tooltip");

    // Create tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.textContent = tooltipText;

    // Append tooltip to the body
    document.body.appendChild(tooltip);

    // Position the tooltip
    const rect = button.getBoundingClientRect();
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 5}px`;
    tooltip.style.left = `${rect.left + window.scrollX + (button.offsetWidth / 2) - (tooltip.offsetWidth / 2)}px`;

    // Make the tooltip visible
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";

    // Store the tooltip element on the button element for later removal
    button._tooltip = tooltip;
}

function hideTooltip(event) {
    const button = event.currentTarget;
    const tooltip = button._tooltip;

    if (tooltip) {
        // Hide and remove the tooltip
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "0";
        setTimeout(() => {
            document.body.removeChild(tooltip);
        }, 300); // Wait for the transition to end

        // Remove reference to the tooltip element
        button._tooltip = null;
    }
}

// event listeners
previous.addEventListener("click", goPrevPage);
next.addEventListener("click", goNextPage);

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
                paper1.classList.add("hidden");
                setTimeout(() => {
                    paper1.classList.remove("slide-out");
                }, 1000);
                setTimeout(() => {
                    paper1.classList.add("slide-in");
                }, 1000);
                break;
            case 3:
                paper2.classList.add("flipped");
                break;
            case 4:
                paper2.classList.add("slide-out");
                paper2.classList.add("hidden");
                setTimeout(() => {
                    paper2.classList.remove("slide-out");
                }, 1000);
                setTimeout(() => {
                    paper2.classList.add("slide-in");
                }, 1000);
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
                paper1.classList.remove("slide-in");

                // Add slide-out class after a short delay
                setTimeout(() => {
                    paper1.classList.add("slide-out");

                }, 0);
                // Remove slide-out class after the slide-out animation completes
                setTimeout(() => {
                    paper1.classList.add("slide-in");
                    paper1.classList.remove("hidden");
                    // Add slide-in class to trigger the slide-in animation
                    setTimeout(() => {
                        paper1.classList.remove("slide-out");
                    }, 100); // Adjust this delay to ensure smooth transition
                }, 700);
                break;

            case 4:
                paper2.classList.remove("flipped");
                break;
            case 5:
                paper2.classList.remove("slide-in");
                // Add slide-out class after a short delay
                setTimeout(() => {
                    paper2.classList.add("slide-out");
                }, 0);
                // Remove slide-out class after the slide-out animation completes
                setTimeout(() => {
                    paper2.classList.add("slide-in");
                    paper2.classList.remove("hidden");
                    // Add slide-in class to trigger the slide-in animation
                    setTimeout(() => {
                        paper2.classList.remove("slide-out");
                    }, 100); // Adjust this delay to ensure smooth transition
                }, 700);
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


// coffee

document.getElementById("blackmagic").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!blackmagic");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("caffelatte").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!caffelatte");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("cappuccino").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!cappuccino");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("espresso").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!espresso");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("sugarspice").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!sugarspice");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});


// tea

document.getElementById("galahad").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!galahad");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("mnd").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!mnd");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("masala").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!masala");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("gtl").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!gtl");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("grinch").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!grinch");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

// choci

document.getElementById("bitterheart").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!bitterheart");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("chocobee").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!chocobee");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("darkchoc").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!darkchoc");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("spicedlady").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!spicedlady");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

// milk

document.getElementById("bedchamber").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!bedchamber");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("honeymilk").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!honeymilk");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("milkyway").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!milkyway");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

// recommendations

document.getElementById("musik").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!Musik");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});

document.getElementById("buch").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("!Buch");
    } catch (err) {
        console.error("Fehler beim Kopieren in die Zwischenablage: ", err);
    }
});