var myScore = 88;

if (myScore>=80){
    var friendScore = 77;
    if(friendScore>80){
        console.log('Go for a lunch');
    }
    if(friendScore<80 && friendScore>=60){
        console.log('good luck next time');
    }
    if(friendScore<60 && friendScore>=40){
        console.log('keep your friends message unseen');
    }
    if(friendScore<40){
        console.log('blocked your friend');
    } 
}
else if(myScore<80){
    console.log('go to home and sleep and act sad')
}