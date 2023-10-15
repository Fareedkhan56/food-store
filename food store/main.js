alert("Hello User");

let userFood = prompt("enter food you want");
let foodItems = ["burger", "pizza", "shawarma", "pasta", "nuggets", "wings", "drum sticks"];

if (userFood.charCodeAt(0) >= 65 && userFood.charCodeAt(0) <= 90 || userFood.charCodeAt(0) >= 97 && userFood.charCodeAt(0) <= 122) {
    let flag = false;
    let item;

    for (let i = 0; i < foodItems.length; i++) {
        if (userFood == foodItems[i]) {
            flag = true;
            item = i;
            break;
        }
    }

    if (flag == true) {

        switch (item) {
            case 0:
                document.write("<h1><center>Burgers List ! </br> 1. Cheese Burger 400/- </br> 2. Zinger Burger 500/- </br> 3. Crispy Burger 300/- </center></h1>");
                break;

            case 1:
                document.write("<h1><center>Pizza List ! </br> 1. Cheese Pizza 1400/- </br> 2. Zinger chicago 1500/- </br> 3. Fajita 1300/- </center></h1>");
                break;
            case 2:
                document.write("<h1><center>Shawarma List ! </br> 1. Cheese Shawarma 400/- </br> 2. Zinger Shwarma 500/- </br> 3. Pizza Shawarma 300/- </center></h1>");
                break;
        }
    }
    else {
        document.write("<h1><center>Item Not Availabe !</center></h1>");
    }
}
else {
    document.write("<h1><center>Please Enter Food Name You Want !</center></h1>");
}