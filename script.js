 document.getElementById('change_button').addEventListener('click', function() {
    // Get the block id and color from inputs
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Ensure blockId is between 1 and 9, and color is not empty
    if (blockId >= 1 && blockId <= 9 && color) {
        // Reset all grid items to transparent background first
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

        // Change the background color of the selected grid item
        const selectedBlock = document.getElementById(`grid-item-${blockId}`);
        selectedBlock.style.backgroundColor = color;
    } else {
        alert('Please enter a valid Block ID (1-9) and a color.');
    }
});

document.getElementById('reset_button').addEventListener('click', function() {
    // Reset all grid items to transparent background
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Clear input fields
    document.getElementById('block_id').value = '';
    document.getElementById('colour_id').value = '';
});
