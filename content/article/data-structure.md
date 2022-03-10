---
title: Data Structure
description: summary of Data Structure
slug: data-structure
category: lecture
author: MinJun Choi
img: datastructure.jpg
---

## Chap 1. Basic Concepts
### C Pointer
* & : address operator
* \* : dereferencing (or indirection) operator



### Algorithm

* A finite set of instructions that accomplishes a certain task
* Criteria
  * Input
  * Output
  * Definiteness: clear, unambiguous
  * Finiteness: termination
  * Effectiveness
* Specification
  * 자연어
  * Diagram
  * Pseudo code
  * Programming language
  * etc



### Pseudo Code

* 장점:
  * programming language의 문법(syntax) 준수에서 자유로움
  * 가독성 높은 알고리즘 명세 용이
* 단점: 알고리즘 criteria 충족하지 못할 수 있는 점 주의 필요
* Example: 배열 A[0...n-1]에 저장된 n개의 수 중 양수의 개수와 그 합 구하기

  ```pseudocode
  sum <- 0
  count <- 0
  for i <- to n-1 do {
  	if (A[1] > 0) then {
  		sum <- sun + A[i]
  		count <- count += 1
  	}
  }
  ```



### Pseudo Code 구문

* Assignment: <-, = := (C 언어: =)
* 제어문
  * if - then - else
  * for i <- 1 to n [by 1] {...} // for (i=1; i<= n; i++) {...}
  * for i <- n to 1 by -1 {...} // for (i=n; i>=1; i--) {...}
  * while (condition) {...}
  * do {...} while (condition)
  * loop {...} endloop // termination condition in the loop body
  * case // C언어 switch문
  * Block of statements: {...}, begin...end, if...endif, for...endfor, while...endwhile
  * etc



### Selection sort 

selection sort algorithm for n integers in A[0..n-1]

* Array is partitioned into two lists

  * A[0], ..., A[i-1]: sorted list // initially empty
  * A[i], ..., A[n-1]: unsorted yet // initially i=0

* Select the minimum from the unsorted list A[i], ..., A[n-1]

  * Assuming that A[i] is the minimum
  * Scan A[i+1] to A[n-1] to find the minimum

* Swap A[i] & the minimum

  * A[0], ..., A[i]: sorted list
  * A[i+1], ..., A[n-1]: unsorted list

* Repeat until sorting is completed

  * A[0], ..., A[n-1]: sorted list or
  * A[0], ..., A[n-2]: sorted list (& A[n-1]: unsorted list)

  ```pseudocode
  for i <- 0 to n-2 do {
  	min <- i
  	for j <- i+1 to n-1 do {
  		if (A[j] < A[min]) min <- j
  	}
  	swap(A[i], A[min]) // A[i] <- -> A[min]
  }
  ```

  

### Binary search

* Search a value in a sorted list in A[0..n-1]
* Assuming values in A[] are distinct: A[i] != A[j] (i != j)
* Returns
  * -1: if the value does not exist
  * pos: if A[pos] = value
* Binary search
  * Takes advantage of the fact that the list is sorted
  * Compares value with A[middle]
  * If A[middle] != value, prune either half of the list

```pseudocode
binary_search(A[0..n-1], value) {
	left <- 0
	right <- n-1
	while (left <= right) do {
		mid <- (left + right)/2
		switch(compare(value, A[mid])) {
			case '<': right <- mid-1
			case '=': return mid
			case '>': left <- mid+1
		}
	}
	return -1
}
```



### Recursion

* Recursion function (재귀적 함수)

  * A function that calls itself

* 작성

  * 함수정의: input, output
  * 재귀적 호출의 결과 활용
    * application/problem-dependent
    * 함수 작성
  * 종료 조건

* Example: n!

  ```pseudocode
  fact(n) {
  	if(n=0) return(1)
  	return (n*fact(n-1))
  }
  ```

  

### Recursion: binary search

```pseudocode
R_binary_search(A[], left, right, value) {
	if(left > right) return -1 //종료조건
	mid ← (left + right)/2
	switch(compare(value, A[mid])) {
		case ‘<‘ : pos ← R_binary_search(A[], left, mid-1, value) 
		case ‘=‘ : pos ← mid
		case ‘>’ : pos ← R_binary_search(A[], mid+1, right, value) 
	} 
	return pos
}
```



### Recursion: Towers of Hanoi

* 3 poles

* Tower

  * p1: n(=64) disks with different diameters
  * smaller disk on top of bigger ones

* Goal: move the tower from p1 to p3

* function TH(n, src, dest, temp)

  * n개 disk 탑을 pole src에서 pole dest로 move
  * pole temp를 이용

* First call: TH(64, 1, 3, 2)

* Recursive calls

  ```pseudocode
  TH(n, src, dest, temp) {
  	if(n=1) { //종료조건
  		move a disk from pole src to pole dest
  		return
  	}
  
  	TH(n-1, src, temp dest)
  	TH(1, src, dest, temp)
  	TH(n-1, temp, dest, src)
  }
  ```



### Performance Analysis

* Algorithm analysis
* Space complexity and time complexity
* Time complexity
  * Measurement/experiment
    * Run the program on some data instance and measure running time
    * Limitations
      * Limited instances of data
      * Dependent on the system capacity and capability
  * Theoretical approach
    * count execution steps
    * Worst, best, average case analysis
      * Example: number of compare operations in binary search
    * Big "oh" notation



### Big "oh" notation

* Worst case analysis
* O(n): order of n
* 대표적 time complexities: O()


__Soon will be updated__
