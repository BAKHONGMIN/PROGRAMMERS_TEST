function solution(phone_book) {
    // 전화번호 목록 정렬
    phone_book.sort();

    // 정렬된 목록에서 인접한 전화번호만 비교
    for (let i = 0; i < phone_book.length - 1; i++) {
        // 현재 번호가 다음 번호의 접두사인지 확인
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false; // 접두사 관계가 있으면 false
        }
    }

    return true; // 접두사 관계가 없으면 true
}