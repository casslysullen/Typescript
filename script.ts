const generateRandom: number = Math.floor(Math.random() * 15 + 1)

const cells: HTMLCollectionOf<Element> = document.getElementsByClassName('cell');


cells[generateRandom].id = '#it';

const clickedList: [clickedList] = [];

interface clickedList {
    style: Object;
    addEventListener: VoidFunction;
    backgroundColor: String;
}

const changeColor(): Function name: (event:) {
    if (event.target.classList.contains('cell')) {
        event.target.style.backgroundColor = 'green';
        clickedList.push(event.target);
    }

    if (event.target.id === '#it') {
        for (let cells of clickedList) {
            cells.style.backgroundColor = 'yellow';
        }
        event.target.style.backgroundColor = 'red';
    }

}
