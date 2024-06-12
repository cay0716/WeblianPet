document.addEventListener('DOMContentLoaded', function() {
    const sells = document.querySelectorAll('.sell');
    const images = document.querySelectorAll('.clothes');

    sells.forEach((sell, index) => {
        sell.addEventListener('click', () => {
            if (images[index].style.display === 'block') {
                images[index].style.display = 'none';
                images[index].style.opacity = '0';
            } else {
                images[index].style.display = 'block';
                images[index].style.opacity = '1';
            }
        });
    });


    let clothBtn = document.querySelector('.cloth_btn')
    let clothesAlert = document.querySelector('.alert')
    let yesBtn = document.querySelector('.yes')
    let noBtn = document.querySelector('.no')
    let clothesBox = document.querySelector('.clothes_sell')
    let clothesBtn = document.querySelector('#clothes_btn')
    let pet = document.querySelector('.pet')
    let box = document.querySelector('.box')

    clothesBtn.addEventListener('click', () => {
        clothesBox.style.left = '365px'
        pet.style.left = '120px'
        pet.style.top = '180px'
        box.style.backgroundImage = 'url("svg/blur_bg.svg")'
    })
    clothBtn.addEventListener('click', () => {
        clothesAlert.style.display = 'block';
        clothesAlert.style.opacity = '1'
    })

    yesBtn.addEventListener('click', () => {
        setTimeout(() => {
            alert("구매가 완료되었습니다.")
        }, 500)
        setTimeout(() => {
            clothesAlert.style.display = 'none'
            clothesAlert.style.opacity = '0'
            clothesBox.style.left = '800px'
            pet.style.left = '300px'
            pet.style.top = '320px'
            box.style.backgroundImage = 'url("svg/room_pet3.svg")'
        }, 1000)
    })

    noBtn.addEventListener('click', () =>{
        setTimeout(() => {
            clothesAlert.style.display = 'none'
            clothesAlert.style.opacity = '0'
            clothesBox.style.left = '1000px'

            clothesBox.style.left = '800px'
            pet.style.left = '300px'
            pet.style.top = '320px'
            box.style.backgroundImage = 'url("svg/room_pet3.svg")'
        }, 300)
    })
});

