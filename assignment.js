 function kilometerToMeter(kilometer) {
     var meter = kilometer * 1000;
     return meter;
 }
 var result = kilometerToMeter(5);
 console.log(result);


 function budgetCalculator(watch, phone, laptop) {
     var result = (watch * 50) + (phone * 100) + (laptop * 500);
     return result;
 }
 var sum = budgetCalculator(10, 7, 5);
 console.log(sum);



 function hotelCost(night) {
     var cost = 0;

     if (night <= 10) {
         cost = night * 100;
     } else if (night <= 20) {
         var firstPart = 10 * 100;
         var remaining = night - 10;
         var secondPart = remaining * 80;
         cost = firstPart + secondPart;

     } else {
         var firstPart = 10 * 100;
         var secondPart = 10 * 80;
         var remaining = night - 20;
         var thirdPart = remaining * 50;
         cost = firstPart + secondPart + thirdPart;
     }
     return cost;
 }
 var result = hotelCost(25);
 console.log(result)


 function megaFriend(friends) {
     var largeName = friends[0];
     for (var i = 0; i < friends.length; i++) {
         var element = friends[i];
         largeName = element;
     }
     return largeName;
 }
 var friends = ["jamal", "jakirkhan", "kadiria", "sultana", "aliabat", "rahimakhanam"];
 var result = megaFriend(friends);
 console.log(result);