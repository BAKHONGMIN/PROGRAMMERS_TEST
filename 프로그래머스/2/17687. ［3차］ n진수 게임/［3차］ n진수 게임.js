function solution(n, t, m, p) {
    let result = ""; // 결과를 저장할 문자열
    let i = 0; // 현재 숫자
    let count = 0; // 변환된 숫자 문자열에서의 현재 인덱스

    // 원하는 길이의 결과 문자열을 얻을 때까지 반복
    while (result.length < t) {
        // 현재 숫자를 n진수 문자열로 변환하고 대문자로 변환
        const num = i.toString(n).toUpperCase();

        // 변환된 숫자 문자열의 각 문자에 대해 반복
        for (let j = 0; j < num.length; j++) {
            // 현재 문자가 p번째 참가자의 차례인 경우
            if (count % m === p - 1) {
                result += num[j]; // 결과 문자열에 추가
                // 원하는 길이의 결과 문자열을 얻으면 반환
                if (result.length === t) {
                    return result;
                }
            }
            count++; // 변환된 숫자 문자열의 인덱스 증가
        }

        i++; // 다음 숫자로 이동
    }

    return result; // 결과 문자열 반환
}