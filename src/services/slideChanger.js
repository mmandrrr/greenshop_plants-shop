export class SlideChanger {

    changeSlide = (e,func) => {
        func(e.target.id * (100 / 3));
        this.paintDot(e.target.id);
    }

    deactivateDots = () => {
        document.querySelectorAll('.slider__dot').forEach(item => {
            item.classList.remove('active');
        })
    }

    paintDot = (num) => {
        this.deactivateDots();
        document.querySelectorAll('.slider__dot')[num].classList.add('active')
    }
}