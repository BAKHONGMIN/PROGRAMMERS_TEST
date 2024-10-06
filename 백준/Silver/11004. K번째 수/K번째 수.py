import sys

# N: 수열의 길이, K: 찾고자 하는 K번째 수
N, K = map(int, sys.stdin.readline().split())

# 수열 입력
data_list = list(map(int, sys.stdin.readline().split()))

# 수열을 오름차순으로 정렬
data_list.sort()

# K번째로 작은 수 출력 (인덱스는 0부터 시작하므로 K-1)
print(data_list[K - 1])
