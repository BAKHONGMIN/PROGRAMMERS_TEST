function solution(s){
    const s_array = s.split("")
    const s_left = s.split("(").length-1 
    const s_right = s.split(")").length-1
    let a = 0
    let b = 0
    let c = true
    
    let aa = s_array.map((x) => {
        if(x == "("){
            a++
        }else{
            b++
        }
        if(a < b){c = false}
    })

    

    const s_first = s_array.slice(0,1) == "("
    const s_final = s_array.slice(-1) == ")"
    const s_length = s.length % 2 == 0 ? true : false
    const s_number = s_left == s_right ?  true : false
    
    if( s_first && s_final && s_length && s_number && c){
        return true
    }else{
        return false
    }

}
