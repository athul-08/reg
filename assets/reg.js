function validateForm(){
    var formValue=document.getElementById('validationForm');
    var userName=formValue.elements['username'].value;
    var email=formValue.elements['email'].value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    console.log(password.length);
    if(userName==null || userName== "" )
    {
        alert ('username cannot be empty');
    }
    else if (email==null || email== "" )
    {
        alert ('email cannot be empty');
    }
    else if (password==null || password== "" )
    {
        alert ('password cannot be empty');
    }
    else if (password.length < 3){
        alert('password is too short');
    }
    else if (confirmPassword==null || confirmPassword== "" )
    {
        alert ('confirmPassword cannot be empty');
    }
    else if(password !== confirmPassword){
        alert('passwords do not match');
    }
    else{
        alert('registered successfully');
    }
}
