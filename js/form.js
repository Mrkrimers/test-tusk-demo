const btnEnter = document.querySelector('.btn__enter');
const btnRegister = document.querySelector('.btn__register');
const linkRestore = document.querySelector('.link__restore');
const checkbox = document.getElementById('remember');

linkRestore.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Переход на страницу восстановления пароля')
})

btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Переход на страницу регистрации')
})

btnEnter.addEventListener('click', (event) => {
    event.preventDefault();

    let error = formValidate();

    if (error === 0) {
        console.log(checkbox.checked);
        alert('Можно сделать отправку данных на авторизацию. В консоле можно посмотреть значение checkbox')
    } else {
        alert('Заполните обязательные поля')
    }
})

function formValidate() {
    let error = 0;

    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.value === '') {
            formAddError(input);
            error++
        }
    }

    return error
}

function formAddError(input) {
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.classList.remove('_error');
}