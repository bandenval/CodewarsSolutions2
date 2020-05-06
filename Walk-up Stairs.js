// https://www.codewars.com/kata/566c3f5b9de85fdd0e000026

// Walk-up Stairs.


function stairs(n) {
    let  str ='';
    let c;
    for(let i = 1; i <= n; i++){
        str = str + ' '.repeat(((n * 2) - (i * 2)) * 2);
        for (let j = 1; j <= i; j++){
            if (j >= 10) c = j - 10;
            else c = j;
            str = str + c + ' ';
        }
        for (let j = i; j >= 1; j--){
            if (j >= 10) c = j -10;
            else c = j;
            str = (j !==1)? str + c + ' ' : str + c;
        }
        str = (i !== n) ? str + '\n' : str;
    }
    return str;
}
console.log(stairs(10));