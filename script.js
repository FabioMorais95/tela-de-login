const btn = document.querySelector('#entrar').addEventListener('click', checkLogin)
const iconUser = document.querySelector('.username')
const iconPassword = document.querySelector('.userpassword')

function checkLogin() {
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    const correctEmail = 'admin'
    const correctPassword = 'admin'
    if (email == correctEmail && password == correctPassword) {
        alert('Login realizado com sucesso!')
        document.querySelector('.email').value = ''
        document.querySelector('.password').value = ''
    } else {
        wrongPassword()
    }
}

function wrongPassword() {
    document.querySelector('.invalid').innerHTML = '<p>Login ou senha inválidos!</p>'
    iconUser.style.color = '#FC575E'
    iconPassword.style.color = '#FC575E'
    setTimeout(() => {
        document.querySelector('.invalid').innerHTML = ''
        document.querySelector('.email').value = ''
        document.querySelector('.password').value = ''
        iconUser.style.color = '#F0F1F5'
        iconPassword.style.color = '#F0F1F5'
    }, 2000);
}