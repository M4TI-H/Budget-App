export default function RegisterValidation(email, password, setRegisterData){
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
        error.password = "Your password must contain a capitalized letter, number and a symbol";
    } 
    else{
       error.password = "";
       setRegisterData(prev => ({...prev, password: password}));
    } 
    return error;
}