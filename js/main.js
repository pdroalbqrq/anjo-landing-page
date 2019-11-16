new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    slidesToScroll:1,
    draggable: true,
    scrollLock:true,
    scrollLockDelay:50,
    arrows:{
        prev: '.glider-prev',
        next: '.glider-next'
    }
})
new Glider(document.querySelector('#glider-second'), {
    slidesToShow: 1,
    slidesToScroll:1,
    draggable: true,
    scrollLock:true,
    scrollLockDelay:50,
    arrows:{
        prev: '.glider-p',
        next: '.glider-n'
    }
})