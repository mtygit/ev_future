function getName() {
    let userName = prompt('Please Enter Your Name');
    if (userName == null){
        return 'userNull';
    } else if(userName == '') {
        return 'userEmpty';
    }  else {
        return userName;
    }
    
}

function greeting(){
    let user = getName();
    if (user.toLowerCase() == 'tim'){
        document.write('<h3>' + user + ' you have a cool name!</h3>');
    } else{
        document.write('<h3>Welcome ' + user + ' !</h3>');
    }
}


function evLover(){
    let carOwner = window.confirm('Do you like electric vehicles?');

    if (carOwner){
        document.write('We have an E.V. lover here!');
    } else {
        document.write('I wish you will find this page helpful to learn about E.V.');
    }

}









