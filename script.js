function userClick(eve) {
    if (eve.target.classList.contains('project__descriptions-open')) {
        const item = eve.target.closest('.project');
        const availablePart = item.querySelector('.project__available-part');
        const elementButton = item.querySelector('.project__descriptions-open');
        const maxHeight = item.querySelector('.project__available-part').scrollHeight;
        if (availablePart.classList.contains('project__available-part_opened')) {
            availablePart.classList.remove('project__available-part_opened');
            availablePart.style.height = `100px`;
            elementButton.textContent = '+';
        } else {
            availablePart.style.height = `${maxHeight}px`;
            availablePart.classList.add('project__available-part_opened');
            elementButton.textContent = '-';
        }
    }
    
}
document.addEventListener('click', userClick);