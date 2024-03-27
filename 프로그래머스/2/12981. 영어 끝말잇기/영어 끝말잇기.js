function solution(n, words) {
    const set = new Set();
    let prevWord = words[0];
    let idx = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        
        if (set.has(word) || prevWord[prevWord.length - 1] !== word[0]) {
            idx = i;
            break;
        }

        set.add(word);
        prevWord = word;
    }

    return idx === 0 ? [0, 0] : [(idx % n) + 1, Math.ceil((idx + 1) / n)];
}