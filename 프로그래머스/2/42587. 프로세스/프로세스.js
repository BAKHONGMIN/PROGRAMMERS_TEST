function solution(priorities, location) {
    
    let max = Math.max(...priorities);// 처음 왼쪽 부터 가장 큰 수를 찾는다.
    
    let index = priorities.indexOf(max); // 가장 큰수의 index번호를 찾는다
    
    const array = []; // 숫자를 차례대로 넣어줄 배열
    const result = []; // 중요도에 따라 실행될 순서의 배열
    for(let i in priorities)array[i]=Number(i) // 숫자 차례대로 넣기
    
    let lengths = priorities.length; // 반복할 횟수
    while(lengths>0){
        
        result.push(array[index]) // 중요도가 가장 높은 수의 숫자를 넣기
        priorities[index]=0;// 중요도가 큰값을 넣었다면 0으로 하여 무의미한 숫자 넣기
        
        const left = priorities.slice(0, index); // 중요도가 가장 큰 값의 왼쪽 배열모음    
        const right = priorities.slice(index);//중요도가 가장 큰 값의 오른쪽 배열모음
        
        const lmax = Math.max(...left); // 왼쪽배열에서 가장 큰 수를 구한다
        const rmax = Math.max(...right); // 오른쪽배열에서 가장 큰 수를 구한다
    
        //왼쪽배열에서 가장 큰 수와 오른쪽배열 가장 큰수를 비교하여 배열에서 가장 큰 수의 index값 구하기
        if(lmax > rmax){ 
            const idx = left.indexOf(lmax)
            index = idx;  
        }else{
            const idx = right.indexOf(rmax)
            index = idx+index;  
        }
        lengths--
    }

    // 중요도에 따라 넣은 배열에서 location값을 구하고 1부터 시작이므로 1더하기
    const locations = result.findIndex(e => e === location)
    return locations + 1
}