export default function RegisterValidation(email, password, setRegisterData){
    let error = {};
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$])(?=.*\d)[A-Za-z\d!@#$]*$/;

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
        error.password = "Enter your password"
      }
      else if(passwordRegex.test(pass) === false){
        error.password = "Your password must contain at least one capitalized letter and one number";
      }
      else{
        error.password = "";
        setRegisterData(prev => ({...prev, pass: pass}));
      }  

    return error;
}