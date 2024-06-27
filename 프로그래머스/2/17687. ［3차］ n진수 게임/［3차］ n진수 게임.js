function solution(n, t, m, p) {
    let myPicks = "";
    let result = "";
    let i = 0;
    while(myPicks.length < t*m ){
        const num = i.toString(n).toUpperCase();
        for(let j of num){
            myPicks+=j            
            if(myPicks.length === t*m){
                [...myPicks].map((item, idx) => {
                    if(idx % m === p-1){
                        result+=item
                    }
                })
            }
        }
        i++
    }
    
    return result
}