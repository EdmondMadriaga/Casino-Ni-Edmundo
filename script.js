// Slot Machine Logic
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinButton = document.getElementById('spinButton');
const slotMessage = document.getElementById('slotMessage');

const symbols = ['🍒', '🍋', '🍉', '⭐', '🔔', '7️⃣'];

function getRandomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinReels() {
    reel1.textContent = getRandomSymbol();
    reel2.textContent = getRandomSymbol();
    reel3.textContent = getRandomSymbol();

    if (reel1.textContent === reel2.textContent && reel2.textContent === reel3.textContent) {
        slotMessage.textContent = `🎉 Jackpot! You got ${reel1.textContent}!`;
    } else {
        slotMessage.textContent = 'Better luck next time!';
    }
}

spinButton.addEventListener('click', spinReels);

// Higher or Lower Logic
const currentCardElem = document.getElementById('currentCard');
const higherButton = document.getElementById('higherButton');
const lowerButton = document.getElementById('lowerButton');
const cardMessage = document.getElementById('cardMessage');

const cardDeck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let currentCardIndex = Math.floor(Math.random() * cardDeck.length);

function updateCurrentCard() {
    currentCardElem.textContent = cardDeck[currentCardIndex];
}

function drawNewCard() {
    return Math.floor(Math.random() * cardDeck.length);
}

function checkHigherOrLower(choice) {
    const newCardIndex = drawNewCard();
    const newCard = cardDeck[newCardIndex];

    if ((choice === 'higher' && newCardIndex > currentCardIndex) ||
        (choice === 'lower' && newCardIndex < currentCardIndex)) {
        cardMessage.textContent = `🎉 Correct! The new card was ${newCard}.`;
    } else if (newCardIndex === currentCardIndex) {
        cardMessage.textContent = `😲 It's a tie! The new card was also ${newCard}.`;
    } else {
        cardMessage.textContent = `❌ Wrong! The new card was ${newCard}.`;
    }

    currentCardIndex = newCardIndex;
    updateCurrentCard();
}

higherButton.addEventListener('click', () => checkHigherOrLower('higher'));
lowerButton.addEventListener('click', () => checkHigherOrLower('lower'));

// Initialize Higher or Lower
updateCurrentCard();

// Dice Roll Betting Game Logic
const betOver = document.getElementById('betOver');
const betUnder = document.getElementById('betUnder');
const betSeven = document.getElementById('betSeven');
const diceRolls = document.getElementById('diceRolls');
const diceMessage = document.getElementById('diceMessage');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playDiceGame(bet) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const total = dice1 + dice2;

    diceRolls.textContent = `${dice1} + ${dice2} = ${total}`;

    if (bet === 'over' && total > 7) {
        diceMessage.textContent = `🎉 You won! The total is over 7.`;
    } else if (bet === 'under' && total < 7) {
        diceMessage.textContent = `🎉 You won! The total is under 7.`;
    } else if (bet === 'seven' && total === 7) {
        diceMessage.textContent = `🎉 Jackpot! The total is exactly 7.`;
    } else {
        diceMessage.textContent = `❌ You lost! Better luck next time.`;
    }
}

betOver.addEventListener('click', () => playDiceGame('over'));
betUnder.addEventListener('click', () => playDiceGame('under'));
betSeven.addEventListener('click', () => playDiceGame('seven'));

// Coin Flip Betting Game Logic
const betHeads = document.getElementById('betHeads');
const betTails = document.getElementById('betTails');
const coinResult = document.getElementById('coinResult');
const coinMessage = document.getElementById('coinMessage');

function flipCoin() {
    return Math.random() < 0.5 ? 'Heads' : 'Tails';
}

function playCoinFlipGame(bet) {
    const result = flipCoin();
    coinResult.textContent = result;

    if (bet === result) {
        coinMessage.textContent = `🎉 You won! It landed on ${result}.`;
    } else {
        coinMessage.textContent = `❌ You lost! It landed on ${result}.`;
    }
}

betHeads.addEventListener('click', () => playCoinFlipGame('Heads'));
betTails.addEventListener('click', () => playCoinFlipGame('Tails'));
