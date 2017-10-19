//write first method
function sleepIn(weekday,vacation) {
    if(weekday && vacation){
        return true;
    }
    if(weekday){
        return false;
    }else {
        return true;
    }

}

//write second method
function monkeyTrouble(a_smile, b_smile) {
    if(a_smile != b_smile){
        return true;
    }else{
        return false;
    }
}
function string_times(word, x){
    var combine = "";
    for(var i = 0; i < x; i ++){
        combine = combine + word;
    }
    return combine;
}

function front_times(word, number){
    var front = word.substring(0,3);
    var solution = "";
    for(var i = 0; i < number; i++){
        solution = solution + front;
    }
    return solution;
}

function string_bits(word){
    var solution = "";
    for(var i = 0; i < word.length; i = i + 2){
        solution = solution + word[i];
    }
    return solution;
}

function caughtSpeeding(speed, birthday) {
    if (birthday == true) {
        speed = speed - 5;
    }
    if (speed <= 60) {
        return 0;
    }
    if (speed > 61 && speed <= 81) {
        return 1;
    }
    if (speed >= 81){
        return 2;
    }
    }

function fizz_buzz(Int){
    var number = Int;
    var fizz = "Fizz";
    var buzz = "Buzz";
    var fizzBuzz = "FizzBuzz";
    if (number % 3 == 0 && number % 5 == 0){
        return fizzBuzz;
    }
    if (number % 3 == 0){
        return fizz;
    }
    if (number % 5 == 0) {
        return buzz;
    }else{
        return number + "!";
    }
}

function teaParty(tea,candy){
    var bad = "0";
    var good = "1";
    var great = "2";
    if (candy < 5 || tea < 5){
        return bad;
    }
    if (candy >= (tea * 2) || tea >= (candy * 2)){
        return great;
    }
    if (candy >= 5 && tea >= 5){
        return good;
    }
}

function blackjack(num1,num2){
    var answer = "";
    var both = "0";
    if (num1 > 21 && num2 > 21){
        return both;
    }
    if (num1 == 21){
        return num1 + answer;
    }
    if (num2 == 21){
        return num2 + answer;
    }
    if (num2 > 21 && num1 <= 21){
        return num1 + answer;
    }
    if (num1 > 21 && num2 <= 21) {
        return num2 + answer;
    }
    if ((21 - num1) > (21 - num2)){
        return num2 + answer;
    }else{
        return num1
    }
}

function loneSum(a,b,c){
    var answer = "";
    var sum = (a + b + c);
    if (a === b && b === c){
        return 0 + answer;
    }
    if (a !== b && b !== c && a !== c){
        return sum + answer;
    }
    if (a === c){
        return b + answer;
    }
    if (c === b){
        return a + answer;
    }
    if (a === b){
        return c + answer;
    }
}
function tester() {

    document.getElementById("output").innerHTML = sleepIn(true, false);
    document.getElementById("output2").innerHTML = monkeyTrouble(true, false);
    document.getElementById("output3").innerHTML = string_times(henry, 6);
    document.getElementById("output4").innerHTML = front_times(bro, 2);
    document.getElementById("output5").innerHTML = string_bits(dude);
    document.getElementById("output6").innerHTML = caughtSpeeding(65, true);
    document.getElementById("output7").innerHTML = fizz_buzz(Int);
    document.getElementById("output8").innerHTML = teaParty(10, 5);
    document.getElementById("output9").innerHTML = blackjack(10, 5);
    document.getElementById("output10").innerHTML = loneSum(2, 5, 3);
}


