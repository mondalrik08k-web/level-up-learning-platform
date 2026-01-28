import { useEffect } from 'react';

const Sudoku = () => {
  const generateGrid = () => {
    const grid = document.getElementById('sudoku-grid');
    grid.innerHTML = ''; // Clear the grid before regenerating
    for (let i = 0; i < 18; i++) { // Set grid size to 18x18
      const row = grid.insertRow(i);
      for (let j = 0; j < 18; j++) {
        const cell = row.insertCell(j);
        cell.className = `border border-gray-300`; // Add basic cell border
        if (i % 3 === 0) cell.classList.add('border-t-2'); // Thicker top border for every 3rd row
        if (j % 3 === 0) cell.classList.add('border-l-2'); // Thicker left border for every 3rd column
        if ((i + 1) % 3 === 0 && i !== 17) cell.classList.add('border-b-2'); // Thicker bottom border for every 3rd row except last
        if ((j + 1) % 3 === 0 && j !== 17) cell.classList.add('border-r-2'); // Thicker right border for every 3rd column except last

        if (Math.random() < 0.5) {
          cell.innerHTML = Math.floor(Math.random() * 9) + 1;
        } else {
          const input = document.createElement('input');
          input.type = 'number';
          input.min = 1;
          input.max = 9;
          input.className = 'w-full h-full text-center border-none text-xl bg-orange-200'; // Set initial box color to orange
          input.oninput = validateInput; // Attach validation
          input.onchange = () => input.classList.add('bg-sky-200'); // Change background to sky blue on entry
          cell.appendChild(input);
        }
      }
    }
  };

  const validateInput = (event) => {
    const input = event.target;
    const value = parseInt(input.value);
    if (isNaN(value) || value < 1 || value > 9) {
      input.classList.add('border-red-500');
      alert('Invalid input. Please enter a number between 1 and 9.');
    } else {
      input.classList.remove('border-red-500');
    }
  };

  useEffect(() => {
    generateGrid();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 bg-gray-800 min-h-screen"> {/* Light black background */}
      <h1 className="text-3xl font-bold mb-5 text-white">Sudoku Game</h1> {/* Contrast text */}
      <div className="grid-container border-2 border-gray-800 rounded-lg shadow-2xl w-[36rem] p-4 bg-white"> {/* Floating effect with shadow */}
        <table id="sudoku-grid" className="border-collapse w-full h-full table-fixed"></table>
      </div>
    </div>
  );
};

export default Sudoku;
