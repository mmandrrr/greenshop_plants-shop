export const openMobile = (className,func) => {
    func(className);
    document.querySelector('body').style.overflow = 'hidden';
}

export const closeMobile = (className,func) => {
    func(className);
    document.querySelector('body').style.overflow = 'auto';
}