// Бургер-меню

const navigation = document.querySelector('.navigation_block');
const header_burger = document.querySelector('.header_burger');
const register = document.querySelector('.navigation_item_mobile');


if (navigation && header_burger) {
    header_burger.addEventListener('click', () => {
        navigation.classList.toggle('transform')
        header_burger.classList.toggle('transform')
    })

    register.addEventListener('click', () => {
        navigation.classList.toggle('transform')
        header_burger.classList.toggle('transform')
    });
}

// Pop-up

const html = document.querySelector('html');
const background = document.querySelector('.pop-up');
const popUp = document.querySelector('.pop-up_content');
const popUpButton = document.querySelector('.header_button');
const popUpEmail = document.querySelector('.pop-up_input_email');
const popUpPassword = document.querySelector('.pop-up_input_password');
const popUpSignIn = document.querySelector('.pop-up_sign-in');
const mobileAccount = document.querySelector('.navigation_link_account');
const registerLink = document.querySelector('.pop-up_register_link');
const google = document.querySelector('.pop-up_google_btn');
const facebook = document.querySelector('.pop-up_facebook_btn');
const border = document.querySelector('.pop-up_border');
const forgot = document.querySelector('.pop-up_forgot');
const popUpTitle = document.querySelector('.pop-up_title');
const popUpRegisterText = document.querySelector('.pop-up_register_text');
const popUpRegisterLink = document.querySelector('.pop-up_register_link');

registerLink.addEventListener('click', () => {
    popUp.classList.toggle('pop-up_content__register');
    google.classList.toggle('pop-up_google_btn');
    google.classList.toggle('registerHidden');
    facebook.classList.toggle('pop-up_facebook_btn');
    facebook.classList.toggle('registerHidden');
    border.classList.toggle('pop-up_border');
    border.classList.toggle('registerHidden');
    forgot.classList.toggle('pop-up_forgot');
    forgot.classList.toggle('registerHidden');
    if (popUpTitle.innerHTML === 'Create account') {
        popUpTitle.innerHTML = 'Log in to your account';
    } else if (popUpTitle.innerHTML ==='Log in to your account') {
        popUpTitle.innerHTML = 'Create account';
    }

    if (popUpSignIn.innerHTML === 'Sign In') {
        popUpSignIn.innerHTML = 'Sign Up';
    } else if (popUpSignIn.innerHTML ==='Sign Up') {
        popUpSignIn.innerHTML = 'Sign In';
    }

    if (popUpRegisterText.innerHTML === 'Don’t have an account? ') {
        popUpRegisterText.innerHTML = 'Already have an account? ';
    } else if (popUpRegisterText.innerHTML ==='Already have an account? ') {
        popUpRegisterText.innerHTML = 'Don’t have an account? ';
    }

    if (popUpRegisterLink.innerHTML === 'Register') {
        popUpRegisterLink.innerHTML = 'Log in';
    } else if (popUpRegisterLink.innerHTML ==='Log in') {
        popUpRegisterLink.innerHTML = 'Register';
    }


});


popUpButton.addEventListener('click', () => {
    background.classList.add('pop-up__visible');
    popUp.classList.add('pop-up_content__visible');
    html.classList.add('noScroll');
});

mobileAccount.addEventListener('click', () => {
    background.classList.add('pop-up__visible');
    popUp.classList.add('pop-up_content__visible');
    html.classList.add('noScroll');
});

background.addEventListener('click', (event) => {
    if (event.target.classList.contains('pop-up')) {
        background.classList.remove('pop-up__visible');
        popUp.classList.remove('pop-up_content__visible');
        html.classList.remove('noScroll');
    }
});

popUpSignIn.addEventListener('click', () => {
    alert ('Email: ' + popUpEmail.value + '\n\nPassword: ' + popUpPassword.value)
});




// Слайдер

const leftPhoto = document.querySelector('#leftPhoto');
const centerPhoto = document.querySelector('#centerPhoto');
const rightPhoto = document.querySelector('#rightPhoto');
const circlesAll = document.querySelector('.destinations_buttons_circle');
const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('#circle2');
const circle3 = document.querySelector('#circle3');
const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');

const sliderContainer = document.querySelector('.destinations_slider_container');

const moveToLeft = () => {
    sliderContainer.classList.add('moveToLeft');
    sliderContainer.classList.remove('moveToRight');
    circle1.classList.add('destinations_buttons_circle_black');
    circle2.classList.remove('destinations_buttons_circle_black');
    circle3.classList.remove('destinations_buttons_circle_black');
}

const moveToRight = () => {
    sliderContainer.classList.add('moveToRight');
    sliderContainer.classList.remove('moveToLeft');
    circle3.classList.add('destinations_buttons_circle_black');
    circle1.classList.remove('destinations_buttons_circle_black');
    circle2.classList.remove('destinations_buttons_circle_black');
}

const moveToCenter = () => {
    sliderContainer.classList.remove('moveToLeft');
    sliderContainer.classList.remove('moveToRight');
    circle2.classList.add('destinations_buttons_circle_black');
    circle1.classList.remove('destinations_buttons_circle_black');
    circle3.classList.remove('destinations_buttons_circle_black');
}

arrowRight.addEventListener('click', () => {
    if (sliderContainer.classList.contains('moveToLeft')) {
        moveToCenter();
        arrowLeft.classList.remove('arrow_opacity')
    } else {
        moveToRight();
        arrowRight.classList.add('arrow_opacity')
    }
});

arrowLeft.addEventListener('click', () => {
    if (sliderContainer.classList.contains('moveToRight')) {
        moveToCenter();
        arrowRight.classList.remove('arrow_opacity')
    } else {
        moveToLeft();
        arrowLeft.classList.add('arrow_opacity')
    }
});

leftPhoto.addEventListener('click', moveToLeft);
centerPhoto.addEventListener('click', moveToCenter);
rightPhoto.addEventListener('click', moveToRight);
circle1.addEventListener('click', moveToLeft);
circle2.addEventListener('click', moveToCenter);
circle3.addEventListener('click', moveToRight);







// Самостоятельная оценка

console.log ('Слайдер изображений в секции destinations +50\nНажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап  +50\nНажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up +25\n\nИтого:125 из 75 = 75 баллов');