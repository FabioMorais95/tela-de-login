const btn = document.querySelector('#entrar').addEventListener('click', checkLogin)


function checkLogin() {
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    const correctEmail = 'admin'
    const correctPassword = 'admin'
    if (email == correctEmail && password == correctPassword) {
        alert('Login realizado com sucesso!')
    } else {
        document.querySelector('.invalid').innerHTML = '<p>Login ou senha inválidos!</p>'
        setTimeout(() => {
            document.querySelector('.invalid').innerHTML = ''
            document.querySelector('.email').value = ''
            document.querySelector('.password').value = ''
        }, 2000);
    }
}