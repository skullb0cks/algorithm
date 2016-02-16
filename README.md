# algorithm
썩어가는 두뇌 살리기

#### 1. remove Duplicate

Question: How would you remove duplicate members from an array?

removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
  = [1, 3, 5, 6, 7, 8]


#### 2. merge two sorted array

Question: How would you merge two sorted array?

Answer: I will keep a pointer for each array and (read the code. and be careful about this one.)

mergeSortedArray([2,5,6,9], [1,2,3,29]);
 = [1, 2, 2, 3, 5, 6, 9, 29]


#### 3. swap number without temp

 Question: How would you swap two numbers without using a temporary variable?

 Answer: Waste time about thinking it. though u know the answer, act like you are thinking and take your time to answer this one.

 swapNumb(2, 3);
    = before swap:  a:  2 b:  3
    = after swap:  a:  3 b:  2


#### 4.string reverse

Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string

> reverse('you are a nice dude');
  = "edud ecin a era uoy"


#### 5.reverse words

Question: How would you reverse words in a sentence?

Answer: You have to check for white space and walk through the string. Ask is there could be multiple whitespace.

> reverseWords('fix this later')
  " later  this fix"

 --------------------------------------------------------------------------------------------

#### 6.string reverse

Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string

> reverse('you are a nice dude');

    = "edud ecin a era uoy"


#### 7.First non repeating char

Question: How could you find the first non repeating char in a string?

>firstNonRepeatChar('the quick brown fox jumps then quickly blow air');

 = "f"



#### 8.reverse in place

Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

Answer: To do this, i have to do both string reverse and word reverse.

> reverseInPlace('I am the good boy');

 = "I ma eht doog yob"




#### 9. extract duplicated string(longest)

Q : Extract duplicated string.

var a = "Hi, I am Jein. How are you?";
var b = "I am Jein. Here is algorithm page"

> getDuplicatedStr(a, b);

=> 'I am Jein. H'


 ***
문제 출제는 자유
각자 커밋후 코드 비교 및 반성의 시간


2016.02.15 제인추가. 
풀어줘용. 

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

Assume that:

N is an integer within the range [1..2,147,483,647].
Complexity:

expected worst-case time complexity is O(log(N));
expected worst-case space complexity is O(1).

