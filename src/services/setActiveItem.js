export const setActiveItem = (e) => {
    const item = document.querySelectorAll(`.${e.target.classList[0]}`);

    item.forEach(item => {
        item.classList.remove('active');
    })

    item[e.target.dataset.id].classList.add('active');
}