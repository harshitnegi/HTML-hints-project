check = () => {
    const e = document.getElementById("email").value;
    const p = document.getElementById("pass").value;

    if(e === 'negiharshit' && p === '123'){
        alert("You have been logged in!");
    }
    else if(e === '' && p === ''){
        document.getElementById("email_empty").innerHTML="Email is empty!";
        document.getElementById("pass_empty").innerHTML="Password is empty!";
    }
    else{
        alert("Enter correct email or password");
    }
}