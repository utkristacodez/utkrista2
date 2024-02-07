

function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
    setTimeout(() => {
        popup.classList.add('active');
    }, 10);
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('active');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

