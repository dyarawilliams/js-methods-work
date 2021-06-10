# JS Methods
A short description of what the method does, how it works, it's time complexity, and give three examples of it in action!

## map method
The map method transforms an array by creating a new array of the elements and returns the results of the provided function on every element in the calling array. This method takes can take in up to three arguments the element, index, and array. The element param is required.

- Time Complexity: 0(n)
- 3 Examples: [map.js](https://github.com/dyarawilliams/js-methods-work/blob/main/map.js)

## reduce method
The reduce method executes a reducer function on each element of an array. This method can take in up to four arguments the accumulator, current value, current index, and the source array. The accumulator and currentValue is required.

- Time Complexity: 0(n)
- 3 Examples: [reduce.js](https://github.com/dyarawilliams/js-methods-work/blob/main/reduce.js)

## filter method
The filter method creates a new array with the elements that pass the given filter condiion as true.

- Time Complexity: 0(n)
- 3 Examples: [filter.js](https://github.com/dyarawilliams/js-methods-work/blob/main/filter.js)

## forEach method
The forEach method executes a function for each element in the array.
- Time Complexity: 0(n)
- 3 Examples: [forEach.js](https://github.com/dyarawilliams/js-methods-work/blob/main/forEach.js)

## sort method
The sort method modifies the array by ordering the array and returns the sorted array. The default sort is ascending.
- Time Complexity: 0(n log(n))
- 3 Examples: [sort.js](https://github.com/dyarawilliams/js-methods-work/blob/main/sort.js)

## slice method
The slice method returns a copy of the sub array between two indexes, start and end. The original array will not be modified.
- Time Complexity: 0(n)
- 3 Examples: [slice.js](https://github.com/dyarawilliams/js-methods-work/blob/main/slice.js)

## pop method
The pop method deletes the last element of the array.
- Time Complexity: 0(1)
- 3 Examples: [pop.js](https://github.com/dyarawilliams/js-methods-work/blob/main/pop.js)

## shift method
The shift method deletes the first element of the array.
- Time Complexity: 0(n)
- 3 Examples: [shift.js](https://github.com/dyarawilliams/js-methods-work/blob/main/shift.js)

## push method
The push method adds a new element to the end of the array.
- Time Complexity: 0(1)
- 3 Examples: [push.js](https://github.com/dyarawilliams/js-methods-work/blob/main/push.js)

## unshift method
The unshift method adds a new element to the beginning of the array.
- Time Complexity: 0(n)
- 3 Examples: [unshift.js](https://github.com/dyarawilliams/js-methods-work/blob/main/unshift.js)

## includes method
The includes method determines whether an array includes a certain value. This method returns ture or false as appropriate
- Time Complexity: 0(1)
- 3 Examples: [includes.js](https://github.com/dyarawilliams/js-methods-work/blob/main/includes.js)

## indexOf method
The indexOf method returns the first index of the element that exists in the array, and if it does not exist return -1.
- Time Complexity: 0(n)
- 3 Examples: [indexOf.js](https://github.com/dyarawilliams/js-methods-work/blob/main/indexOf.js)

## every method
The every method return a boolean value as true if all the items apply the given condiion, and false if not.
- Time Complexity: 0(n)
- 3 Examples: [every.js](https://github.com/dyarawilliams/js-methods-work/blob/main/every.js)

## charAt method
The charAt method returns character at given index of string. This method takes in one argument which is the index.
- Time Complexity: 0(1)
- 3 Examples: [charAt.js](https://github.com/dyarawilliams/js-methods-work/blob/main/charAt.js)

## charCodeAt method 
The charCodeAt method returns an integer between 0 and 65535, the Unicode of the character at the specified index in a string. This method takes in one argument the index. 
- Time Complexity: 0(1)
- 3 Examples: [charCodeAt.js](https://github.com/dyarawilliams/js-methods-work/blob/main/charCodeAt.js)

## concat method 
The concat method is used to join two or more strings together (concatenation).
- Time Complexity: 0(n)
- 3 Examples: [concat.js](https://github.com/dyarawilliams/js-methods-work/blob/main/concat.js)

## match method 
The match method is used to search a string for a match against any regular expression. If the match is found, then this will return the match as an array.
> If the g flag is used, all results matching the complete regular expression will be returned, but capturing groups will not.

> If the g flag is not used, only the first complete match and its related capturing groups are returned. 

- Time Complexity: 0(n)
- 3 Examples: [match.js](https://github.com/dyarawilliams/js-methods-work/blob/main/match.js)

## repeat method
The repeat method is used to repeat a string a specified number of times.
- Time Complexity: O(log n) ? -> I think because the size of input is reduced in each step it would logarithmic 
- 3 Examples: [repeat.js](https://github.com/dyarawilliams/js-methods-work/blob/main/repeat.js)

## replace method
The replace method returns a new string with with a substring replaced by a new one.
- Time Complexity: 0(n)
- 3 Examples: [replace.js](https://github.com/dyarawilliams/js-methods-work/blob/main/replace.js)

## search method
The search method is used to search for a specific string or regular expression.
- Time Complexity: 0(n)
- 3 Examples: [search.js](https://github.com/dyarawilliams/js-methods-work/blob/main/search.js)

## split method
The split method separates an original string into an array of substrings, based on a separator string that you pass as input. The original string is not altered by the split method.
- Time Complexity: O(n)
- 3 Examples: [split.js](https://github.com/dyarawilliams/js-methods-work/blob/main/split.js)