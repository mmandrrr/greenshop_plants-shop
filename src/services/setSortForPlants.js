export class Sort {
    setSort = (e,func) => {
        func(e.target.dataset.sort);
    }

    setSortByPrice = (e,funcSort,arr,sortPrice) => {
        if(document.querySelectorAll('.shop__switch-page')[0]) {
            document.querySelectorAll('.shop__switch-page').forEach(item => {
                item.classList.remove('active');
            });            
            document.querySelectorAll('.shop__switch-page')[0].classList.add('active');            
        }

        this.setSort(e,funcSort);

        const sortResult = arr.sort((a,b) => {
            return +a.price.split('$')[1] < +b.price.split('$')[1] ? 1 : -1;
        })

        sortPrice([...sortResult])
    }

    setSortByAlphabet = (e,funcSort,arr,sortAlphabet) => {
        if(document.querySelectorAll('.shop__switch-page')[0]) {
            document.querySelectorAll('.shop__switch-page').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.shop__switch-page')[0].classList.add('active');
        }

        this.setSort(e,funcSort);

        const sortResult = arr.sort((a,b) => {
            return a.name > b.name ? 1 : -1;
        })

        sortAlphabet([...sortResult])
    }

    setSortByDate = (e,funcSort,arr,sortDate) => {
        if(document.querySelectorAll('.shop__switch-page')[0]) {
            document.querySelectorAll('.shop__switch-page').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.shop__switch-page')[0].classList.add('active');
        }

        this.setSort(e,funcSort);

        const sortResult = arr.sort((a,b) => {
            return a.date.getTime() > b.date.getTime() ? 1 : -1;
        })


        sortDate([...sortResult])
    }
}