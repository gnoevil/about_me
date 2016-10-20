'use strict';
var msg = "Please use yes and y or no and n for answering the questions. "
var username = prompt('What is your name?');
console.log('Hello ' + username + '!');
var q1 = prompt('Are you a wizard?');
if(q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y') {
    console.log(q1);
} else if (q1.toLowerCase() === 'no' || q1.toLowerCase() === 'n') {
    console.log(q1);
} else {
    console.log(msg);
}

var q2 = prompt('Are you a witch?');
if(q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y') {
    console.log(q2);
} else if (q2.toLowerCase() === 'no' || q2.toLowerCase() === 'n') {
        console.log(q2);
} else {
    console.log(msg);
}
var q3 = prompt('Do you want to be a wizard or a witch?');
if(q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y') {
    console.log(q3);
} else if (q3.toLowerCase() === 'no' || q3.toLowerCase() === 'n') {
    console.log(q1);
} else {
    console.log(msg);
}
var q4 = prompt('Is it silly I am asking you these questions?'); if(q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y') {
    console.log(q4);
} else if (q4.toLowerCase() === 'no' || q4.toLowerCase() === 'n') {
    console.log(q4);
} else {
    console.log(msg);
}

var q5 = prompt('Is this crazy?');
if(q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y') {
    console.log(q5);
} else if (q5.toLowerCase() === 'no' || q5.toLowerCase() === 'n') {
    console.log(q5);
} else {
    console.log(msg);
}
