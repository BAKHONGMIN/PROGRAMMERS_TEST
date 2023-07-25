function solution(s) {
    
    let binaryNumber = s; // 이진 문자를 받아서 변경 가능하게 변수에 저장
    
    const reduce = []; // 제거된 0의 개수, 배열의 개수는 회차 
    
    while(true){
        
        // 제거한 0의 개수
        const reduceCount = binaryNumber.length - binaryNumber.split("0").join("").length;
        
        // 0을 제거하고 1을 다시 연결하여 2진수로 변환하고 다시 반환
        binaryNumber = binaryNumber.split("0").join("").length.toString(2);
        
        // 제거한 0의 개수를 배열에 push
        reduce.push(reduceCount)
        
        // 반환된 값이 1이 되면 멈춤
        if(binaryNumber == "1"){
            break;
        }
    }
    
    const resultNumber = reduce.length;  // 반환값 1이 되기까지의 회차
    const reduceNumber = reduce.reduce((acc, cur) => acc+cur); // 총 제거된 0의 개수
    
    return [resultNumber, reduceNumber]
}