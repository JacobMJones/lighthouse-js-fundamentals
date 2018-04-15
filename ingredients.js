var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0;
while(count < ingredients.length){
  console.log(ingredients[count]);
  count++;
}

for(var i = 0; i< ingredients.length; i++){
  console.log(ingredients[i]);
}


for(var q = 0;q < ingredients.length; q++){
  var backIndex = ingredients.length - 1 - q;
  console.log(ingredients[backIndex]);
}
