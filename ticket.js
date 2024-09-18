var TicketPrice = 800;
var age = 25;
if(age<10){
    console.log('ticket free for children');
}
else if(age>=10 && age<=30){
    var discount = TicketPrice*50/100;
    console.log('ticket 50% discount for student');
    var ADprice = TicketPrice - discount;
    console.log('you have to pay:'+ADprice)
}

else if(age>=60){
    var discount = TicketPrice*15/100;
    console.log('ticket 15% discount for senior citizens');
    var ADprice = TicketPrice - discount;
    console.log('you have to pay:'+ADprice)
}
else{
    console.log('you have to pay;'+TicketPrice)
}

