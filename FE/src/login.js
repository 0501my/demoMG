
function showFormLogin(){
    $('#body').html(`<nav>
  <div>
    <input type="text" placeholder="Username or Email" id="username">
    <input type="password" placeholder="Password" id="password">
    <button type="submit" onclick="Login()">Login</button>
  </div>
</nav>`)
}
function Login(){
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        username: username,
        password: password
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/auth/login',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(user),
        success: (token) => {
            localStorage.setItem('token',JSON.stringify(token))
            showHome();
            showNav();
        }
    })
}
function logOut(){
    localStorage.clear()
    showFormLogin()
    showNav()
}

