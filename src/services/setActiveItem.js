export const setActiveItem = (e) => {
    const item = document.querySelectorAll(`.${e.target.classList}`);

    item.forEach(item => {
        item.classList.remove('active');
    })

    item[e.target.id].classList.add('active');
}