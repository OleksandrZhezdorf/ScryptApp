//Task1//

function encrypt (str, n) {
    if (str === null || str === '') return str
    let step;
    for (step = 0; step < n; step++) {
    let arr = str.split('')
    let arrodd = arr.filter(item => arr.indexOf(item) % 2 !== 0)
    let arreven = arr.filter(item => arr.indexOf(item) % 2 === 0)
    const arrcommon = arrodd.concat(arreven);
    str = arrcommon.join('')
    }
    return str
}

console.log(encrypt("abcdefghi", 2))


function decrypt (str, n) {
    if (str === null || str === '') return str
    let step;
    for (step = 0; step < n; step++) {
    let arr = str.split('')
    let arrlength = arr.length
    let arrodd = arr.slice(Math.floor(arrlength/2))
    let arreven = arr.slice(0, Math.floor(arrlength/2))
    const arrcommon = arrodd.reduce((acc, el, i) => {
    acc.push(el, arreven[i]);
    return acc;
    }, []);
    if (arrlength % 2 !== 0) {arrcommon.splice(-1, 1)}
    str = arrcommon.join('')
    }
    return str
}

console.log(decrypt("dhcgbfaei", 2))


//Task 2//


let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud";
function strRepeating(str) {
    let frequency = {}, value;
    let strLow = str.toLowerCase()
    let strLit = strLow.replace(/[^a-z `]/g, '') 
    let array = strLit.split(' ')

    for(let i = 0; i < array.length; i++) {
         let value = array[i];
        if(value in frequency) {
            if (value !== '' || null || undefined)
            frequency[value]++;
        }
        else {
            frequency[value] = 1;
        }
    }

    let uniques = [];
    for(value in frequency) {
        uniques.push(value);
    }

    function compareLit(a, b) {
        return frequency[b] - frequency[a];
    }

    let arrayfinal = uniques.sort(compareLit);
    if (arrayfinal.length >= 3) {return arrayfinal.slice(0, 3)}
    else return []

}

console.log(strRepeating(str))