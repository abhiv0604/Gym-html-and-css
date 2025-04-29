const board = document.getElementById('board');
const status = document.getElementById('status');
let cells = [];
let currentPlayer = 'X';
let gameActive = true;

function createBoard() {
  board.innerHTML = '';
  cells = [];
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.index = i;
    cell.addEventListener('click', handleCellClick);
    board.appendChild(cell);
    cells.push(cell);
  }
}

function handleCellClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  if (!gameActive || cell.textContent) return;

  cell.textContent = currentPlayer;

  if (checkWin(currentPlayer)) {
    status.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (cells.every(c => c.textContent)) {
    status.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    status.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin(player) {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return winPatterns.some(pattern =>
    pattern.every(index => cells[index].textContent === player)
  );
}

function restartGame() {
  currentPlayer = 'X';
  gameActive = true;
  status.textContent = "Player X's turn";
  createBoard();
}

createBoard();
