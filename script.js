// Function to update the live comment section periodically
const liveComments = document.getElementById('liveComments');
const comments = [
    "SpeedDemon: Report these profiles immediately!",
    "GamerX: Be careful with those scammers!",
    "GameMaster23: I just reported one of the scammer profiles.",
    "SafeGamer: Always verify before trusting anyone online."
];

let currentCommentIndex = 0;

// Function to change the comment every 3 seconds
function updateLiveComments() {
    liveComments.textContent = comments[currentCommentIndex];
    currentCommentIndex = (currentCommentIndex + 1) % comments.length;
}

setInterval(updateLiveComments, 3000); // Update every 3 seconds

// Function to randomly shuffle the GIFs on the page
const gifContainer = document.querySelector('.gif-container');
const gifs = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTl0YWpwaGhjNzh4eWl4cm82MmVueGFydGNmc3VnMTcwNHpxMDFlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/enHJZxBZoQRyV3GnVD/giphy.gif",
    "https://media.giphy.com/media/XtTBWLdAk8WzDEnkNI/giphy.gif",
    "https://media.giphy.com/media/xT0xeJ8RILW86N1Fte/giphy.gif",
    "https://media.giphy.com/media/rymG7ThB9BP2M/giphy.gif"
];

function randomizeGifs() {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    const randomGifSrc = gifs[randomIndex];

    // Find all GIF images in the container
    const gifImages = gifContainer.querySelectorAll('img');
    gifImages.forEach(img => {
        img.src = randomGifSrc;
    });
}

// Randomize GIFs every 5 seconds
setInterval(randomizeGifs, 5000);
