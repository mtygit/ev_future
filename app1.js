function getName() {
    let userName = prompt('Please Enter Your Name');
/*    if (userName == null){
        return 'userNull';
    } else if(userName == '') {
        return 'userEmpty';
    }  else {
        return userName;
    }
*/
    while (userName == null || !(/[a-zA-Z]/).test(userName.charAt(0)) ){
        userName = prompt('Please Enter Your Name');
    }
    return userName;
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
    carOwner = window.confirm('Do you like electric vehicles?');

    if (carOwner){
        document.write('We have an E.V. lover here!');
    } else {
        document.write('I wish you will find this page helpful to learn about E.V.');
    }

}

function addPics(){
    numOfPics = prompt ('How many cars would you like to see? (from 1 to 10)');
    url = "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/788x525/quality/85/https://s.aolcdn.com/commerce/autodata/images/USC70TSC024B021001.jpg";
    let picCounter = 1;
    while (!(numOfPics >= 1 && numOfPics < 10)){
        numOfPics = prompt ('How many cars would you like to see? (from 1 to 10)');
    }

    for (let i = 0; i < numOfPics; i++){
        document.write('<img src="' + url + '" >');
        document.write('Picture number ' + picCounter++);
    }

}








