# algorithm
썩어가는 두뇌 살리기

1.remove Duplicate

Question: How would you remove duplicate members from an array?

removeDuplicate([1,3,3,3,1,5,6,7,8,1]);
  = [1, 3, 5, 6, 7, 8]


2.merge two sorted array

Question: How would you merge two sorted array?

Answer: I will keep a pointer for each array and (read the code. and be careful about this one.)

mergeSortedArray([2,5,6,9], [1,2,3,29]);
 = [1, 2, 2, 3, 5, 6, 9, 29]


 3.swap number without temp

 Question: How would you swap two numbers without using a temporary variable?

 Answer: Waste time about thinking it. though u know the answer, act like you are thinking and take your time to answer this one.

 swapNumb(2, 3);
    = before swap:  a:  2 b:  3
    = after swap:  a:  3 b:  2


4.string reverse

Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string

> reverse('you are a nice dude');
  = "edud ecin a era uoy"


5.reverse words

Question: How would you reverse words in a sentence?

Answer: You have to check for white space and walk through the string. Ask is there could be multiple whitespace.

> reverseWords('fix this later')
  " later  this fix"

 --------------------------------------------------------------------------------------------

6.string reverse

Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string

> reverse('you are a nice dude');

    = "edud ecin a era uoy"


7.반복되지 않는 첫번째 문자 찾기

Question: How could you find the first non repeating char in a string?

>firstNonRepeatChar('the quick brown fox jumps then quickly blow air');

 = "f"



8.reverse in place

Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

Answer: To do this, i have to do both string reverse and word reverse.

> reverseInPlace('I am the good boy');

 = "I ma eht doog yob"




 ***
문제 출제는 자유
각자 커밋후 코드 비교 및 반성의 시간
