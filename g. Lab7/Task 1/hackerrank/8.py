if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    largest = second = -101

    for i in range(0, len(arr)):
        largest = max(largest, arr[i])

    for i in range(0, len(arr)):
        if (arr[i] != largest):
            second = max(second, arr[i])
    print(second)
