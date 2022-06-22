module.exports = function toReadable (number) {
    let check = String(number);
  let finalStr = ''
  if (check === '0') {
    finalStr += 'zero'
  }
  if (check.length === 3) {
    switch (check[0]) {
        case '1':
            finalStr += 'one hundred';
            break;
        case '2':
            finalStr += 'two hundred';
            break;
        case '3': 
            finalStr += 'three hundred';
            break;
        case '4':
            finalStr += 'four hundred';
            break;
        case '5':
            finalStr += 'five hundred';
            break;
        case '6':
            finalStr += 'six hundred';
            break;
      case '7':
            finalStr += 'seven hundred';
            break;
        case '8':
            finalStr += 'eight hundred';
            break;
        case '9': 
            finalStr += 'nine hundred';
            break;    
    }
    
    if (check.length === 3 && (check[1]  || check[2] !== '0')) {
      finalStr += ' '
    } else if (check.length === 3 && (check[1]  && check[2] === '0')) {
        finalStr += ''
    }
   check = check.slice(1)
  }

  if (check.length === 2 && +check >=20) {
    switch (check[0]) {
        case '2':
            finalStr += 'twenty';
            break;
        case '3': 
            finalStr += 'thirty';
            break;
        case '4':
            finalStr += 'forty';
            break;
        case '5':
            finalStr += 'fifty';
            break;
        case '6':
            finalStr += 'sixty';
            break;
        case '7':
            finalStr += 'seventy';
            break;
        case '8':
            finalStr += 'eighty';
            break;
        case '9': 
            finalStr += 'ninety';
            break;
    }
   check = check.slice(1)
   console.log( String(number)[String(number).length -1])
    if ((String(number).length === 3 || String(number).length === 2) && String(number)[String(number).length -1] != '0' ) {
        finalStr += ' '
    }
    
 } else if (check.length === 2 && +check < 20) {
    switch (check) {
        case '10':
            finalStr += 'ten';
            break;
        case '11':
            finalStr += 'eleven';
            break;
        case '12':
            finalStr += 'twelve';
            break;
        case '13':
            finalStr += 'thirteen';
            break;
        case '14':
            finalStr += 'fourteen';
            break;
        case '15':
            finalStr += 'fifteen';
            break;
        case '16':
            finalStr += 'sixteen';
            break;
        case '17':
            finalStr += 'seventeen';
            break;
        case '18':
            finalStr += 'eighteen';
            break;
        case '19':
            finalStr += 'nineteen';
        break;
    }
console.log(check)
  if (check.length === 2 && check[0] === '0') {
    finalStr += ''
    check = check.slice(1)
  }
  console.log(check)
 }
  if (check.length === 1) {
     switch (check) {
        case '1':
            finalStr += 'one';
            break;
        case '2':
            finalStr += 'two';
            break;
        case '3': 
            finalStr += 'three';
            break;
        case '4':
            finalStr += 'four';
            break;
        case '5':
            finalStr += 'five';
            break;
        case '6':
            finalStr += 'six';
            break;
      case '7':
            finalStr += 'seven';
            break;
        case '8':
            finalStr += 'eight';
            break;
        case '9': 
            finalStr += 'nine';
            break;
    }
  }
 return finalStr.trim()
}
   