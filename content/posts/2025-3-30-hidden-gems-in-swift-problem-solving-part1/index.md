---
title: "Swift - Powerful Yet Overlooked Functions for problem solving -- Part 1"
date: 2025-03-30
description: 'Discover lesser-known Swift functions that simplify iteration, filtering, and validation for cleaner and more efficient code.'
tags: ["Swift", "IOS", "Problem-Solving"]
type: post
weight: 20
showTableOfContents: true
---

Swift is known for its simplicity and expressive syntax, but some incredibly powerful functions often go unnoticed. These lesser-known built-in functions can help solve common programming challenges more efficiently, making your code more readable, concise, and performant.

let's explore a set of Swift functions that will help you write cleaner, more elegant solutions to everyday problems.

### What we'll cover
- Smarter iteration and loops with `stride`
- combining sequence and parallel Iteration with `zip `
- Quick validation with `allSatisfy(_:)`
- Lazy Sequence Generation with `sequence`
- Categorizing data with `Dictionary(grouping:by:)`

### Smarter iteration and loops with `stride`

Stride function provides a flexible way to create sequences of values based on a specific range and step, making it useful for various looping and iteration scenarios in Swift.

Swift provides two variations of stride:

* `stride(from:to:by:)` Excludes the end value (to).
* `stride(from:through:by:)` Includes the end value (through).


**1. Creating a Range of Values with a Custom Step**

```swift
// Excluding the last value
for value in stride(from: 0, to: 10, by: 2) {
    print(value)  // 0, 2, 4, 6, 8
}

// OR
let eventNumber: [Int] = stride(from: 0, to: 10, by: 2).map(\.self)
print(eventNumber) // [0, 2, 4, 6, 8]

// Including the last value
let eventNumberIncusive: [Int] = stride(from: 0, through: 10, by: 2).map(\.self) // inluding last element ( through )
print(eventNumberIncusive) // [0, 2, 4, 6, 8, 10]
```

**2. Generating Reverse Sequences, iterate backward**

```swift
let countdown = stride(from: 10, to: 0, by: -3).map { $0 }
print(countdown) // [10, 7, 4, 1]
```

**3. Works with floating-point numbers**

```swift
for value in stride(from: 0.0, through: 1.0, by: 0.2) {
    print(value) // 0.0, 0.2, 0.4, 0.6, 0.8, 1.0
}
```

**4. Can be combined with higher-order functions like map, filter, and reduce for more data transformations** 

```swift
let squaredNumbers = stride(from: 1, through: 10, by: 2).map { $0 * $0 }
print(squaredNumbers) // [1, 9, 25, 49, 81]
```

### `zip(_:_:)` – for combining sequence and parallel Iteration:

The zip function can be used to combine two or more sequences into a single sequence of tuples or iterating over two related arrays simultaneously

**1. Combining Two Sequences into a Single Sequence of Tuples**

```swift
let names = ["Alice", "Bob", "Charlie"]
let scores = [85, 92, 78]

let zipped = zip(names, scores)
zipped.forEach { print($0) } // ("Alice", 85), ("Bob", 92), ("Charlie", 78)
```

**2. Iterate two collections in sync without manual indexing.**

```swift
let letters = ["a", "b", "c"]
let numbers = [1, 2, 3]

for (letter, number) in zip(letters, numbers) {
    print("\(letter) - \(number)") // a - 1, b - 2, c - 3
}
```

### Quick validation with `allSatisfy(_:)`

`allSatisfy(_:)` check whether all elements in a collection meet a specific condition, making validations more concise.

```swift
let numbers = [2, 4, 6, 8]
let allEven = numbers.allSatisfy { $0 % 2 == 0 }  // true
```

### Lazy Sequence Generation with `sequence`

`sequence` is usefull for generating sequences lazily through the sequence function family. These functions are invaluable for creating memory-efficient, on-demand sequences.

Swift provides two variations of sequence:

* `sequence(first:next:)` creates a sequence starting from an initial value and repeatedly applies a function to generate the next value until it returns nil.
* `sequence(state:next:)` function maintains a state variable that you can mutate, making it useful for generating sequences with complex state tracking.

**1. Finite squence with `sequence(first:next:)`, stops when nil is returned**

```swift
let countdown = sequence(first: 5, next: { $0 > 0 ? $0 - 1 : nil })
// 5, 4, 3, 2, 1, 0
```

**2. Infinite squence with `sequence(first:next:)`**

```swift
llet powersOfTwo = sequence(first: 1, next: { $0 * 2 })
print(Array( powersOfTwo.prefix(5))) // [1, 2, 4, 8, 16]
```

**3. Finite squence with `sequence(state:next:)`, stops when nil is returned**

```swift
let countingUpToFive = sequence(state: 1) { state -> Int? in
    if state > 5 { return nil } // exit condition
    let result = state
    state = state + 1 // updated ( next ) state
    return result // previous state
}

print(Array(countingUpToFive)) // [1, 2, 3, 4, 5]
```
**4. Infinite fibonacci  squence with `sequence(state:next:)`**

```swift
let fibonacci = sequence(state: (0, 1)) { state -> Int? in
    let result = state.0 // previous stat, we want the sequence to start with first element of initial/first state ( 0, 1)
    state = (state.1, state.0 + state.1) // updated ( next ) state
    return result // previous state
}

print(Array(fibonacci.prefix(10))) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Categorizing data with `Dictionary(grouping:by:)`
`Dictionary(grouping:by:)`lets you group elements from a collection ( array or sequence ) into a dictionary based on a common key, making it great for categorizing data without manually iterating and sorting elements.

```swift
let words = ["apple", "banana", "avocado", "blueberry"]
let grouped = Dictionary(grouping: words, by: { $0.first! })
print(grouped) // ["a": ["apple", "avocado"], "b": ["banana", "blueberry"]]
```

```swift
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let groupedNumbers = Dictionary(grouping: numbers, by: { $0 % 2 == 0 ? "Even" : "Odd" })
print(groupedNumbers) // ["Even": [2, 4, 6, 8, 10], "Odd": [1, 3, 5, 7, 9]]
```

### Conclusion

Competitive programming and real-world app development demand efficiency and clarity.
Swift isn’t just about syntax simplicity—it’s packed with hidden features that can significantly improve your code’s efficiency and readability. By integrating these powerful built-in functions into your workflow, you can eliminate unnecessary loops, reduce complexity, and enhance performance. Next time you tackle a complex problem, think about using stride for iteration, zip for parallel sequences, sequence for lazy evaluation, and Dictionary(grouping:by:) for effortless categorization.

If you think i missed anything, let me know and feel free to share with me any thoughts or feedback you have.

Thanks for reading!🚀
