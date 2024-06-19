function solution(n, k) {
    const convert = n.toString(k);
    const string = convert.split(0);
    let result = 0;
    for(let i=0; i<string.length; i++){
        if(string[i] == "")continue
        const num = string[i];
        if(num == 1){
            continue;
        }else if(num == 2){
            result++
            continue;
        }else{
            let check = 0
            for ( let j = 2 ; j <= Math.sqrt(num) ; j ++) {
                if (num % j === 0) { 
                    check++
                    break
                }
            }
            if(!check)result++;
        }
    }
    return result
}