const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
const imagePaths = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5lenZyZHI5OXM2eW95b3pmMG40cWVrMDhtNjVuM3A4dGNxa2g2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/VM1fcpu2bKs1e2Kdbj/giphy.gif",
    "https://media2.giphy.com/media/3o6ZsXkN4eb5gE6m6A/giphy.gif",
    "https://media3.giphy.com/media/l0MYu6n1g8oXo5n7O/giphy.gif",
    "https://media4.giphy.com/media/XWJgZ1m4V3Rk4/giphy.gif"
];

let noClickCount = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    
    // Update button text with a message
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Change the font size of the Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Change the image based on the number of clicks
    if (noClickCount < imagePaths.length - 1) {
        const imageDisplay = document.getElementById('imageDisplay');
        noClickCount++;
        imageDisplay.src = imagePaths[noClickCount]; // Update the image
    }
}

function handleYesClick() {
    const imageDisplay = document.getElementById('imageDisplay');
    imageDisplay.src = imagePaths[imagePaths.length - 1]; // Change to the last image
    document.getElementById('valentineQuestion').textContent = "Te amo!!!!! <3"; // Update the question
    document.querySelector('.buttons').style.display = 'none'; // Hide buttons
    // Optionally redirect or trigger an animation here
    // window.location.href = "yes_page.html"; // Uncomment to redirect
}
