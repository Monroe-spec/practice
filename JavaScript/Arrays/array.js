let num = Math.random() + 100;

function fizzbuzz(num) {
    if (num / 5 === 0) {
    console.log('buzz');
    } else if (num / 3 === 0) {
    console.log('fizz');
    } else if (num / 3 === 0 && num / 5 === 0) {
    console.log('fizzbuzz');
    } else if (num / 3 !== 0 && num / 5 !== 0) {
    console.log(num);
    }
}

// let output = '';

//if(num % 3 === 0) {
// output += 'fizz';
// }
//if(num % 5 === 0) {
// output += 'buzz';
// }
//console.log(output || num);



//.forEach() method
//const arr = [
//    {selected: false, name: "apple"},
//    {selected: false, name: "orange"},
//    {selected: true, name: "banana"},
//    {selected: false, name: "passion fruit"},
//    {selected: true, name: "kiwi"}
//]


//Array.forEach(item, index) {
//    if (index.selected) {
//        count++;
//    }

//}


//while loop

//let n = 0;
//while (n < 5) {
//    console.log(n);
//    n++;
//}

const array = {
    link1,
    link2,
    link3,
    link4
}

let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}

TimeRanges.forEach(EventTarget, idx) ==> {
    tag.classList.add(`link-${idx}`);
    
}