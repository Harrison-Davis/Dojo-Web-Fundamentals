 // Create a function called pizzaOven. We should feel free to customize what information we keep track of for our pizza, but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings.

// Create a function called pizzaOven that returns a JavaScript (Pizza) Object

// Create a pizza with: "deep dish", "traditional", ["mozzarella"], and ["pepperoni", "sausage"]

// Create a pizza with: "hand tossed", "marinara", ["mozzarella", "feta"], and ["mushrooms", "olives", "onions"]

// Create 2 more pizzas with any toppings we like!

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!


var pizza = {
    dough:   ["Thincrust", "Thickcrust"];
    sauce:   ["Marinera", "Olive Oil", "White Sauce"];
    cheese:  ["Chedder", "Swiss", "Mozzerella"];
    protein: ["Pepperoni", "Chicken", "Tofu", "Sausage"];
    veggies: ['Spinach', 'Onions', 'Bell Peppers', 'Mama Lils'];
}
console.log(pizza)



// Funciton

function pizzaOven(dough, sauce, cheese, protein, veggies){
    var pizza = {};
    pizza.dough = dough;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.protein = protein;
    pizza.veggies = veggies;
    return pizza;
}

// var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
// console.log(p1)


// var p2 = pizzaOven("hand tossed", "marinera", ["mozzerella", "feta"], "no protein",["mushrooms", "olives", "onions"])
// console.log(p2)

// var p3 = pizzaOven("Thin Crust", "Olive Oil", "Mozzerella", "Chicken", ["Onion", "Pepperchinni"])
// console.log(p3)

var p4 = pizzaOven("Pre-Frozen", "Elmers Glue", "Rotten", "Chicken Feet", ["Beets", "Potatoes"])
console.log(p4)

