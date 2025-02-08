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
    "https://media.giphy.com/media/aU1zEDJ9xPVjFBbtvJ/giphy.gif?cid=ecf05e475iel9bang2qbef8m6ielasiswu3egon6kt2u28fm&ep=v1_stickers_related&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/MFkTITj69pMOPlbfeX/giphy.gif?cid=ecf05e475iel9bang2qbef8m6ielasiswu3egon6kt2u28fm&ep=v1_stickers_related&rid=giphy.gif&ct=s",
    "https://media.giphy.com/media/kcyx4ajxyWRelw1uPJ/giphy.gif?cid=ecf05e475iel9bang2qbef8m6ielasiswu3egon6kt2u28fm&ep=v1_stickers_related&rid=giphy.gif&ct=s"
];

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const imageDisplay = document.getElementById('dynamicImage');
    noButton.textContent = messages[messageIndex];
    imageDisplay.src = imagePaths[messageIndex]; 
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
