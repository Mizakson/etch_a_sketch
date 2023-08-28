const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const sizeOfGrid = 16;

function createGrid(amtOfGrids) {
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        
        for (let j = 0; j < amtOfGrids; j++) {
            const widthAndHeight = 960 / sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            // event listener to change background color
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'darkblue';
            });
            row.appendChild(gridBox);
        }
        container.appendChild(row);
    }
};

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('Enter desired grid dimensions... max of 100'));

    while (userSize > 100) {
        userSize = Number(prompt('Enter desired grid dimensions... max of 100'));
        createGrid(userSize);
    }
});

createGrid(sizeOfGrid);