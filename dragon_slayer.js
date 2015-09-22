// Author: Matthew Palomar
// Date: 9/10/15

// Desc: An simple dragon slaying exercise.

var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
  if (youHit) {
    console.log("You hit the dragon and did " + damageThisRound + " damage!");
    totalDamage += damageThisRound;

    if (totalDamage >= 4) {
      console.log("You defeated the dragon!");
      slaying = false;
    } else {
      youHit = Math.floor(Math.random() * 2);
    }
  } else {
    console.log("You missed the dragon and it KILT you!");
    slaying = false;
  }
}