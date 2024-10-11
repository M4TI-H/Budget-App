export default function RegisterValidation(email, password, password2, setRegisterData){
    let error = {};

    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm

    if(email === ""){
        error.email = "Enter your email";
    }
    else if(emailRegex.test(email) === false){
        error.email = "Incorrect email format";
    }
    else{
        error.email = "";
        setRegisterData(prev => ({...prev, email: email}));
    }

    if(password === ""){
          error.password = "Enter your password";
    }
    else if(passwordRegex.test(password) === false){
        error.password = "Your password must contain a capitalized letter and a number";
    }
    else if(password !== password2){
        error.password = "Passwords are different";
    }

    else{
       error.password = "";
       setRegisterData(prev => ({...prev, password: password}));
    } 

    if(password2 === ""){
        error.password2 = "Enter your password";
    }
    else if(password !== password2){
        error.password2 = "Passwords are different";
    }
    else{
        error.password2 = "";
        setRegisterData(prev => ({...prev, password2: password2}));
    }



    return error;
}