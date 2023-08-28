const container = document.querySelector('.container');
const resetButton = document.querySelector('button');

const sizeOfGrid = 16;

function createGrid(amtOfGrids) {
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    
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
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
};

createGrid(sizeOfGrid);

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('Enter desired grid dimensions... max of 100'));

    while (userSize > 100) {
        userSize = Number(prompt('Enter smaller grid dimensions...'));
    }
    const wrapper = document.querySelector('.wrapper');
    wrapper.remove();
    createGrid(userSize);
});
