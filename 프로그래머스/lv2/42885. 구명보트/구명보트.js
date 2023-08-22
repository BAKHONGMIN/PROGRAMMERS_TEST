function solution(people, limit) {
  const arr = people.sort((a, z) => a - z);
  const { length } = arr;
  let start = 0;
  let end = length - 1;
  let count = 0;
  while (start <= end) {
    if (arr[start] + arr[end] > limit || start === end) {
      end--;
    } else {
      start++;
      end--;
      count++;
    }
  }
  return length - count;
}