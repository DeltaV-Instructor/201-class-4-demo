let correctAnswers = 0;
let age = 31;

for (let i = 0; i < 4; i++){
  let ageAnswer = prompt('How old is Lee?');
  if (ageAnswer == age) {
    alert('You got it right! Great job, partner. Lee is ' + age + '!');
    console.log('User response is ' + ageAnswer + ' to question 6');
    correctAnswers++;
    break;
  }
  else if (ageAnswer > age) {
    alert('You guessed a bit too high. Does he look that old?');
    console.log('User response is ' + ageAnswer + ' to question ');
  }
  else if (ageAnswer < age) {
    alert('You\'re a bit too low. I realize Lee\'s immature, but not that bad.');
    console.log('User response is ' + ageAnswer + ' to question 6');
  }
  else if (isNaN(ageAnswer) === true) {
    alert('That is not a number. You can\'t do that.');
    console.log('User response is ' + ageAnswer + ' to question 6');
  }
  else if ((i === 3) && (ageAnswer !== age)) {
    alert('You\'ve run out of chances. Lee\'s ' + age + ', for the record!');
    console.log('User response is ' + ageAnswer + ' to question 6');
  }
}
alert('you got correct answer on quiz ' + correctAnswers);