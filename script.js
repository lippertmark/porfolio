function change() {
    const bd = document.body
    if (bd.classList.contains('light')) {
        bd.classList.remove('light');
    }
    else {
        bd.classList.add('light');
    }
}