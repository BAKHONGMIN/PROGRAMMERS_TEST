function solution(arr1, arr2) {
    const rowA = arr1.length; // arr1의 row의 수
    const colA = arr1[0].length; // arr1의 column의 수
    const rowB = arr2.length; // arr2의 row의 수
    const colB = arr2[0].length; //arr2의 column의 수
    
    let arr3 = []; // 선형대수의 두배열의 곱의 배열
    
    // 선형대수 배열의 조건 arr1의 칼럼의 수와 arr2의 로우의 수와 같아야지만 선형대수 곱의 조건이 된다.
    if(colA === rowB){
        
        // 선형대수 배열은 arr1의 row의 개수와 arr2의 column의 개수로 만들어진 배열이다
        // arr[arr1의 row의 수][arr2의 column의 수]에 0을 채운다.
        arr3 = new Array(rowA);
        for(let i = 0; i < rowA; i++){
            arr3[i] = new Array(colB).fill(0)
        }
        
        // arr3에 선형대수 배열의 곱으로 계산한다.
        for(let i=0; i<rowA; i++){
            for(let j=0; j<colB; j++){
                for(let a=0; a < colA; a++){
                    arr3[i][j] += arr1[i][a] * arr2[a][j];
                }
            }
        }
        
    }
    return arr3
}