function solution(cacheSize, cities) {
    
    // 조건 중 대소문자를 구분하지 않으므로 소문자로 모두 치환후 테스트 진행
    cities = cities.map((item) => item.toLowerCase())
    
    // 캐시 store
    const cacheArray = [];
    
    // 실행시간
    let time =0;
    
    // 캐시 크기가 0인경우 cities 크기에 모두 miss 처리
    if(!cacheSize){
        return num = cities.length * 5
    }
    
    
    cities.map((item) => {
        // 캐시 크기를 벗어나면 store에 기존 도시이름이 있으면 삭제후 맨뒤에 다시 넣고 
        // 없다면 맨 앞에 도시이름을 삭제후 맨뒤에 새로운 도시 이름  넣기
        if(cacheArray.length >= cacheSize){
            if(cacheArray.includes(item)){
                const index = cacheArray.indexOf(item);
                cacheArray.splice(index, 1);
                cacheArray.push(item);
                time++;
            }else{
                cacheArray.shift();
                cacheArray.push(item);
                time += 5;
            }       
        }else{
            
            // 캐시 크기를 넘지 않고 기존 store에 존재하면 삭제후 맨뒤에 넣고 없다면 그냥 바로 추가
            if(cacheArray.includes(item)){
                const index = cacheArray.indexOf(item);
                cacheArray.splice(index, 1);
                cacheArray.push(item);
                time++;
            }else{
                cacheArray.push(item);
                time += 5;
            }
        }
    })
    
    return time
}