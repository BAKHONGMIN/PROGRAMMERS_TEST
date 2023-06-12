function solution(s) {
    const ad = s.split(" "); //공백제거하여 반환
    const number = ad.map(item => {return Number(item)}); //크기를 측정하기 위해 number형태로 변환
    const max = Math.max(...number); //최대값
    const min = Math.min(...number); //최솟값
    return `${min} ${max}` //반환
}