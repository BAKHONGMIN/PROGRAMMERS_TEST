import sys
import heapq

# 사용자로부터 입력받을 숫자의 개수
numbers = int(input())
heap = []  # 빈 힙 초기화

# 최대 힙 처리
for _ in range(numbers):
    num = int(sys.stdin.readline())  # 숫자를 입력받음
    if num != 0:  # 0이 아닌 경우 힙에 추가
        heapq.heappush(heap, num)  # 숫자를 힙에 추가
    else:
        try:
            # 0이 입력된 경우 힙에서 최대값을 제거하고 출력
            print(heapq.heappop(heap))  # 최대값을 꺼내어 출력
        except IndexError:  # 힙이 비어있을 경우
            print(0)  # 0 출력
