let password= prompt('ENTER your Password:');

for (let i=0 ; i<=password.length; i++) {
    if(password[i]=== password[i].toUpperCase() && password.length>=7) {
        window.alert('STRONG Password!')
        break;
    }
    else if (password[i]!== password[i].toUpperCase() && password.length>=7){
    window.alert('STRONG')
    break;
    } else {window.alert('WEAK!!!')
        break;
    }
}   
