const form=document.querySelector('.form');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const age=document.getElementById('age');
const uname=document.getElementById('uname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const passworda=document.getElementById('passworda');



form.addEventListener('submit',e => {
    e.preventDefault();


    validateinputs();
   
    
})

const setError=(element,message)=>{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
const setSuccess= element => {
    const inputControl= element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText= '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');

}

const validateinputs= ()=>{
    
    const fnameValue =fname.value.trim();
    const lnameValue =lname.value.trim();
    const ageValue =age.value.trim();
    const unameValue =uname.value.trim();
    const emailValue =email.value.trim();
    const passswordValue =password.value.trim();
    const passswordAgainValue =passworda.value.trim();
     
    
    if(fnameValue==''){

        setError(fname,'Firstname is required');
    }else{
        setSuccess(fname);
    } 


   if(lnameValue == ''){

        setError(lname,'Lastname is required');
    }else{
        setSuccess(lname);
    }


    if(ageValue ==''){

        setError(age,'age is required');
    }else{
        setSuccess(age);
    }

    if(unameValue == ''){

        setError(uname,'Username is required');
    }else{
        setSuccess(uname);
    }

    if( emailValue == ''){

        setError(email,'Provide valid email address');
    }else{
        setSuccess(email);
    }
    
    if( passswordValue == ''){

        setError(password,'Password can not be empty');
    }else if(passswordValue.length < 6 || passswordValue.length> 20){
        setError(password,'Password min 6 and max 20 charecters');
    }else{
        setSuccess(password);
    }
    if(passswordAgainValue == ''){

        setError(passworda,"Password can not be empty");
    }else if(passswordAgainValue !== passswordValue){
        setError(passworda,"Password does not match");
    }else{
        setSuccess(passworda);
    }
}
