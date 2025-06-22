// Select the timer display, counter display, and increment button elements
const timerDisplay = document.querySelector('#timer');
const counterDisplay = document.querySelector('#counter');
const incrementButton = document.querySelector('#incrementButton');
const startButton = document.querySelector('#startButton');

// Initialize the timer value
let timerValue = 20;

// Add a variable to keep track of the countdown interval
let countdownInterval = null;

// Function to start the countdown
function startCountdown() {
    // Reset timer value to 20 seconds
    timerValue = 20;
    timerDisplay.textContent = timerValue;
    // Reset counter value to 0
    counterValue = 0;
    counterDisplay.textContent = counterValue;
    // Clear any previous interval
    if (countdownInterval !== null) {
        clearInterval(countdownInterval);
    }
    // Start the countdown
    countdownInterval = setInterval(function() {
        // Decrement the timer value
        timerValue--;
        // Update the timer display
        timerDisplay.textContent = timerValue;

        // Stop the countdown when the timer reaches 0
        if (timerValue <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            timerDisplay.textContent = '0'; // Ensure the display shows 0
        }
    }, 1000);
}

// Initialize the counter value
let counterValue = 0;

// Function to increase the counter
function increaseCounter() {
    // Increment the counter value
    counterValue++;
    // Update the counter display
    counterDisplay.textContent = counterValue;
    // Check if counter is 10 or more and timer is 10 seconds or less
    if (counterValue >= 10 && timerValue >= 10 && timerValue <= 20) {
        // Show confetti using the confetti library
        if (typeof confetti === 'function') {
            confetti();
        }
    }
}

// Add an event listener to the increment button to increase the counter when clicked
incrementButton.addEventListener('click', increaseCounter);

// Add an event listener to the start button to start the countdown when clicked
startButton.addEventListener('click', startCountdown);
