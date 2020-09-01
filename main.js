let dropdown = document.querySelector(".dropdown");
let landing = document.querySelector(".landing")
let logIn = document.querySelector(".logInPage")
let signup = document.querySelector(".signupPage")
let dashboard = document.querySelector(".dashboard")

const displayDropdown =() =>{
    dropdown.style.display = "block"
    landing.style.display = "none"
    logIn.style.display = "none"
}

const clearDropdown =()=>{
    dropdown.style.display = "none" 
    landing.style.display = "block"
    logIn.style.display = "none"
}
const memberlogin = ()=>{
    goToLogin();
}

const goToSignUp = () =>{
    dropdown.style.display = "none" 
    landing.style.display = "none"
    logIn.style.display = "none"
    signup.style.display = "block"
}

const goToLogin = ()=>{
    dropdown.style.display = "none" 
    landing.style.display = "none"
    logIn.style.display = "block"
    signup.style.display = "none"
}

const goToDashboard = ()=>{
    dashboard.style.display = "block"
    dropdown.style.display = "none" 
    landing.style.display = "none"
    signup.style.display = "none"
    logIn.style.display = "none"
}