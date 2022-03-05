---
title: Which algorithm will you use?
description: The reason why you can't believe what you see.
slug: algorithm-1920vs10816
category: algorithm
author: MinJun Choi
img: algorithm1.jpg
---

## Beginning
A few days ago, I solved [boj_1920](https://www.acmicpc.net/problem/1920) and [boj_10816](https://www.acmicpc.net/problem/10816) while studying binary search. <br>
<p align="center">
    <img src="/algorithm-1920vs10816/01.jpg" style="zoom:50%;" />
</p>
I hope you will see these before reading this article. <br>
These problems were classified as binary search in [baekjoon](https://www.acmicpc.net/step/29). <br>
So, of course, I've tried to solve these problems in binary search.

Fortunately, boj_1920 was solved with the code below.

```python
n = int(input())
n_list = list(map(int, input().split(' ')))
n_list.sort()

m = int(input())
targets = list(map(int, input().split(' ')))

def binary(target):
    left = 0
    right = n - 1

    while left <= right:
        mid = (left + right) // 2
        if n_list[mid] == target:
            return True

        if target < n_list[mid]:
            right = mid-1
        elif target > n_list[mid]:
            left = mid + 1

for i in range(m):
    if binary(targets[i]):
        print(1)
    else:
        print(0)
```


<br>
And of course, theoretically, boj_10816 was solved with the code below.
<br>

```python
import sys

n = int(sys.stdin.readline())
n_list = list(map(int, sys.stdin.readline().split(' ')))
n_list.sort()

m = int(sys.stdin.readline())
targets = list(map(int, sys.stdin.readline().split(' ')))

def binary(target):
    left = 0
    right = n - 1
    
    while left <= right:
        mid = (left + right) // 2
        if n_list[mid] == target:
            return True
        
        if target < n_list[mid]:
            right = mid-1
        elif target > n_list[mid]:
            left = mid + 1
            
for i in range(m):
    if binary(targets[i]):
        print(n_list.count(targets[i]), end='')
    else:
        print(0)
```

## Problem
But, the problem was the running time of num 10816. <br>
This code is out of time. <br>
It means that it's outcome satisfied the problem but the running time didn't. <br>
<br>
In the end, I thought about it for an hour and googled.<br>
There were also solutions that were solved through binary research, __but there were quite a few ways to solve them differently.__ At that point, I found out that I was trying to solve it only through BS. <br>
<br>
In the first place, that problem could be solved easily through dictionary, and I focused too much on the classification that Baekjoon had done.

```python
import sys

n = int(sys.stdin.readline())
n_list = list(map(int, sys.stdin.readline().split(' ')))
n_list.sort()

m = int(sys.stdin.readline())
targets = list(map(int, sys.stdin.readline().split(' ')))

cnt = {}
for n in n_list:
    if n in cnt:
        cnt[n]+=1
    else:
        cnt[n]=1

for target in targets:
    result = cnt.get(target)
    if result == None:
        print(0, end=' ')
    else:
        print(result, end=' ')
```

## Wrap up
While preparing for the coding test, it is of course important to study each algorithm in detail, but I realized that it is more important to __decide which algorithm and thoughts to solve this problem with.__
<br>
