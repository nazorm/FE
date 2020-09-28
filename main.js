let dropdown = document.querySelector(".dropdown");
let landing = document.querySelector(".landing")
let signinEmail = document.querySelector(".signinEmail")
let signupEmail = document.querySelector(".signupEmail")
let signinPassword = document.querySelector(".signinPassword")
let signupPassword = document.querySelector("signupPassword")
let confirmPassword = document.querySelector("confirmPassword")
let dashboard = document.querySelector("dashboard")

const displayDropdown =() =>{
    dropdown.style.display = "block"
    landing.style.display = "none"
}

const clearDropdown =()=>{
    dropdown.style.display = "none" 
    landing.style.display = "block"
}

const signIn = ()=>{
    let oldUseremail = signinEmail.value;
    if (!oldUseremail.includes(".com")){
        alert("wrong email format")
        dashboard.style.display = "none"
    }else{
        dashboard.style.display = "block"
    }

   
}

const signUp = ()=>{
    
    let newUserEmail = signupEmail.value;
   
    if(!newUserEmail.includes(".com")){
        alert("wrong email format")
        dashboard.style.display = "none"
    }
     
    let confirmedPassword = confirmPassword.value;
    let newUserPassword = signupPassword.value
    if(newUserPassword !== confirmedPassword){
       alert("passwords do not match")
       dashboard.style.display = "none"
    }else{
        dashboard.style.display = "block"
    }


    }
    
    
    
    






