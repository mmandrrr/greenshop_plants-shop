export class Sort {
    setSort = (e,func) => {
        func(e.target.dataset.sort);
    }

    setSortByAlphabet = (e,setSort,arr,setArr) => {
        this.setSort(e,setSort);

        const result = arr.sort((a,b) => {
            return a.name > b.name ? 1 : -1;
        })

        setArr([...result]);

        if(document.querySelectorAll('.shop__switch-page')[0]) {
            document.querySelectorAll('.shop__switch-page').forEach(item => {
                item.classList.remove('active');
            })
            document.querySelectorAll('.shop__switch-page')[0].classList.add('active');
        }
    }

    setSortByPrice = (e,setSort,arr,setArr) => {
        this.setSort(e,setSort);

        const result = arr.sort((a,b) => {
            return +a.price.split('$')[1] < +b.price.split('$')[1] ? 1 : -1;
        })

        setArr([...result]);

        if(document.querySelectorAll('.shop__switch-page')[0]) {
            document.querySelectorAll('.shop__switch-page').forEach(item => {
                item.classList.remove('active');
            })
            document.querySelectorAll('.shop__switch-page')[0].classList.add('active');
        }
    }
}