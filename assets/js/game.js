document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const scoreDisplay = document.querySelector('#score');
    const rewardDisplay = document.querySelector('#reward');
    const endGameButton = document.querySelector('#end-game');
    const width = 5;
    const symbols = ['🍬', '🍭', '🍫', '🍡', '🍪'];
    let score = 0;
    let squares = [];
    let selectedTile = null;
    let symbolBeingDragged, symbolBeingReplaced;
    let squareIdBeingDragged, squareIdBeingReplaced;

    // Create Board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const square = document.createElement('div');
            square.setAttribute('id', i);
            let randomSymbol = Math.floor(Math.random() * symbols.length);
            square.innerHTML = symbols[randomSymbol];
            square.classList.add('tile');
            square.addEventListener('click', handleClick);
            grid.appendChild(square);
            squares.push(square);
        }
    }

    createBoard();

    // Handle tile click
    function handleClick(e) {
        if (selectedTile === null) {
            selectedTile = e.target;
            selectedTile.classList.add('selected');
            symbolBeingDragged = selectedTile.innerHTML;
            squareIdBeingDragged = parseInt(selectedTile.id);
        } else {
            let clickedTile = e.target;
            squareIdBeingReplaced = parseInt(clickedTile.id);
            symbolBeingReplaced = clickedTile.innerHTML;
            // Check if the clicked tile is adjacent to the selected tile
            const validMoves = [
                squareIdBeingDragged - 1, squareIdBeingDragged + 1, 
                squareIdBeingDragged - width, squareIdBeingDragged + width
            ];
            if (validMoves.includes(squareIdBeingReplaced)) {
                // Swap the symbols
                clickedTile.innerHTML = symbolBeingDragged;
                selectedTile.innerHTML = symbolBeingReplaced;
                // Check for matches
                checkForMatches();
            }
            // Reset selection
            selectedTile.classList.remove('selected');
            selectedTile = null;
        }
    }

    // Check for Matches
    function checkForMatches() {
        let matchFound = false;

        // Check for row of three
        for (let i = 0; i < 25; i++) {
            let rowOfThree = [i, i + 1, i + 2];
            let decidedSymbol = squares[i].innerHTML;
            const isBlank = squares[i].innerHTML === '';

            const notValid = [3, 4, 8, 9, 13, 14, 18, 19, 23, 24];
            if (notValid.includes(i)) continue;

            if (rowOfThree.every(index => squares[index].innerHTML === decidedSymbol && !isBlank)) {
                matchFound = true;
                score += 10;
                scoreDisplay.innerHTML = `Score: ${score}`;
                rowOfThree.forEach(index => {
                    squares[index].classList.add('matched');
                });
                setTimeout(() => {
                    rowOfThree.forEach(index => {
                        squares[index].innerHTML = '';
                        squares[index].classList.remove('matched');
                    });
                    refillBoard();
                }, 500);
            }
        }

        // Check for column of three
        for (let i = 0; i < 15; i++) {
            let columnOfThree = [i, i + width, i + width * 2];
            let decidedSymbol = squares[i].innerHTML;
            const isBlank = squares[i].innerHTML === '';

            if (columnOfThree.every(index => squares[index].innerHTML === decidedSymbol && !isBlank)) {
                matchFound = true;
                score += 10;
                scoreDisplay.innerHTML = `Score: ${score}`;
                columnOfThree.forEach(index => {
                    squares[index].classList.add('matched');
                });
                setTimeout(() => {
                    columnOfThree.forEach(index => {
                        squares[index].innerHTML = '';
                        squares[index].classList.remove('matched');
                    });
                    refillBoard();
                }, 500);
            }
        }

        if (!matchFound) {
            if (score >= 1000) {
                endGameButton.classList.remove('hidden');
            }
        }
    }

    // Refill the board after matches
    function refillBoard() {
        for (let i = 0; i < 25; i++) {
            if (squares[i].innerHTML === '') {
                let randomSymbol = Math.floor(Math.random() * symbols.length);
                squares[i].innerHTML = symbols[randomSymbol];
            }
        }
    }

    // End Game Button
    endGameButton.addEventListener('click', () => {
        rewardDisplay.classList.remove('hidden');
        grid.style.pointerEvents = 'none'; // Disable further interactions
        endGameButton.classList.add('hidden');
    });

    // Check for matches at regular intervals
    window.setInterval(() => {
        checkForMatches();
    }, 100);
});
