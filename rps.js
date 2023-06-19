const user_choices = ["rock", "paper", "scissors"];

// how to get a random value from an array
user1 = user_choices[Math.floor(Math.random() * user_choices.length)];
user2 = user_choices[Math.floor(Math.random() * user_choices.length)];

console.log("user1 played " + user1);
console.log("user2 played " + user2)

if(user1 == user2){
    console.log("it's a tie");
}
else if(user1 == "rock"){
    if(user2 == "paper"){
        console.log("user2 wins");
    }
    if(user2 == "scissors"){
        console.log("user1 wins")
    }
}
else if(user1 == "scissors"){
    if(user2 == "paper"){
        console.log("user1 wins");
    }
    if(user2 == "rock"){
        console.log("user2 wins")
    }
}
else if(user1 == "paper"){
    if(user2 == "rock"){
        console.log("user1 wins");
    }
    if(user2 == "scissors"){
        console.log("user2 wins")
    }
}
