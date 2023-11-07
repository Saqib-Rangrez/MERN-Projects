const countValue = document.querySelector('#counter');

const increment = () => {
    // Fetching value
    let value = parseInt(countValue.innerText);
    // Updating the value
    value = value + 1;
    // Setting the value
    countValue.innerText = value;
};

const decrement = () => {
    // Fetching value
    let value = parseInt(countValue.innerText);
    // Updating the value
    value = value - 1;
    // Setting the value
    countValue.innerText = value;
};