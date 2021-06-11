---
title: "Introduction to Function Builders in Swift"
path: blog/introduction-to-function-builders-in-swift
tags: [Swift, UIKit,IOS]
cover: ./function_builders.jpeg
date: 2020-07-11
excerpt: Function builders is a swift language feature, first introduced in swift 5.1 available from Xcode 11. it helps in building declarative DSL ( Domain Specific Language ) for constructing user interface hierarchies.
---

Function builders is a swift language feature, first introduced in swift 5.1 available from Xcode 11. it helps in building declarative DSL ( Domain Specific Language ) for constructing user interface hierarchies or create an API that apply transformations to the statements in a way that make the API easier to read, understand and write.

## what are function builders

function builders is nothing more than a type with certain functions that lets you easily build complex objects like HTML,XML or UIView hierarchies in a concise and readable way without any verbosity or in general apply some transformations to the statements of a function and combining them into a single result ( return value ). for example, this is how we create a HStack in SwiftUI.

```swift
HStack {     
     Text("Hello")     
     Text("World") 
}
```

this creates a HStack of the two Text. let’s compare that with it’s UIKit counterpart.

```swift
// create your labels just like you already do
let firstLabel = UILabel()
firstLabel.text = "Hello"
let secondLabel = UILabel()
secondLabel.text = "World"
// create the stackView
let hStack = UIStackView()
hStack.axis = .horizontal
hStack.distribution = .fillEqually
// add subviews to the stackView
hStack.addArrangedSubview(firstLabel)
hStack.addArrangedSubview(secondLabel)

// add the stackview to the view hierarchy
view.addSubview(hStack)
// then add constraints to the stackview ....
```

> You will notice that the UIStackView in UIKit requires longer code that is harder to read and write compared to HStack in SwiftUI. this is where the Function Builders comes in, enabling to create an API that is concise, easier to read and write in a declarative way ( without any verbosity )



This was necessary for SwiftUI and extends to similar problems that can significantly improved with the use of a DSL, including generating list and trees of heterogeneous data (e.g. HTML, XML) UIView hierarchies and similar use cases.

## How to implement swift function builders

To create a function builder type, simply declare a struct annotated with `*@functionBuilder*` then supply a subset of function-building methods (protocol) that will do the transformations to a function statements.

let’s see a simple example, we will create a builder that takes some person names and generate a greeting

```swift
@_functionBuilder
struct GreetingBuilder { 
    static func buildBlock(_ names: String...) -> String {
        if names.count == 1 {
            return "Hello \(names.first!)"
        } else {
            let firstPart = names[0..<names.count-2].map{ "\($0), " }.joined()
            let secondPart = names[names.count-2..<names.count].joined(separator: " and ")
            return "Hello \(firstPart)\(secondPart)"
        }
    }   
}
```

> Note : there are many optional function-building methods available as part of protocol, the only required methods is `*buildBlock*` which is mandatory and should be static. in this example we only implemented `*buildBlock*` and will see others later in the post.

Now with our builder created, the only thing left is to use it.

The function builder type can be used as a custom attribute in three different syntactic positions : function, closure passed as an argument and the getter of var or subscript. as follow :

```swift
@_functionBuilder
struct GreetingBuilder { 
   ...
}

// 1. apply GreetingBuilder on a function 
// which causes the function builder transform to be applied to the statements of the function.
@GreetingBuilder func generateGreetings() -> String {
    "Ahmed"
    "John"
    "Matt"
}
print(generateGreetings()) // Hello Ahmed, John and Matt
// 2. use GreetingBuilder on a closure passed as an argument to a function
//  which causes the builder to be applied to the body of the closure that is passed as an argument.
func generateGreetings(@GreetingBuilder _ build : () -> String) -> String {
    return build()
}

let greetings = generateGreetings {
    "name1"
    "name2"
    "name3"
    "name4"
}
print(greetings)  // Hello name1, name2, name3 and name4
// 3. use GreetingBuilder on the getter of a var or subscript
//  which causes the builder to be applied to the getter
@GreetingBuilder var someVar : String {
    "A"
    "B"
    "C"
}

print(someVar)  // Hello A, B and C

```

> Note : we don’t use any punctuation characters (commas, parenthesis, and brackets ) when passing list of names.

## Function builders in SwiftUI

Now let’s take a look at how function builders used in SwiftUI. let’s explore the HStack previous example in more details.

```swift
HStack {     
     Text("Hello")     
     Text("World") 
}
```

This is similar to what we did when we applied our GeetingBuilder as a custom attribute to a closure that is passed as a parameter and if we looked at the HStack Class initializer :

```swift
init(alignment: VerticalAlignment = .center, spacing: CGFloat? = nil, @ViewBuilder content: () -> Content) 
```

As you can see, the HStack init takes a content closure annotated with `@**ViewBuilder**` and the ViewBuilder Struct implements `*@functionBuilder*` providing a group of function-building methods one of them is :

```swift
static func buildBlock<C0, C1>(_ c0: C0, _ c1: C1) -> TupleView<(C0, C1)> where C0 : View, C1 : View
```



`*buildBlock*` receives two Views objects as an arguments and combines them into single `*TupleView*` ( subclass of View ).

> Note : ViewBuilder Struct has other buildBlock methods, which takes from one to ten Views and all of them combine the child Views in a single TupleView. so you can create HStack with up to 10 Views in its content closure. Accordingly, when you try to create HStack with eleven Views or more the compiler will not find buildBlock Method that takes 11 arguments raising a compilation error.

## More Function-building methods

Till now the only function-building method that we’ve implemented is `*buildBlock* `but there are other optional methods that give the DSL or the API Consumer more flexibility. some of them are :

- `buildDo(_ parts: PartialResult...) -> PartialResult`
- `buildIf(_ parts: PartialResult...) -> PartialResult`
- `buildEither(first: PartialResult) -> PartialResult` and `buildEither(second: PartialResult) -> PartialResult`
- `buildExpression(_ expression: Expression) -> PartialResult`
- `buildOptional(_ part: PartialResult?) -> PartialResult`

Let’s create a another simple Builder that combine Strings and also supports If-Else statements.

```swift
@_functionBuilder
struct StringBuilder {
    static func buildBlock(_ someStrings: String...) -> String {
         someStrings.reduce("", +)
    }
    
    static func buildEither(first: String) -> String {
        first
    }

    static func buildEither(second: String) -> String {
        second
    }

    static func buildIf(_ someString:String?) -> String {
        someString ?? ""
    }
    
}

// use StringBuilder on a closure passed as an argument to a function
func S(@StringBuilder _ build : () -> String) -> String {
     return build()
```

we’ve added 3 function-building methods :

```swift
func buildEither(first: String) -> String
func buildEither(second: String) -> String
func buildIf(_ someString:String?) -> String
```

The two `*buildEither*` methods will allows us to use if-else statements with our functions builder while `*buildIf*` allow using if statement only.

Now we can use if-else statements :

```swift
@_functionBuilder
struct StringBuilder {
  ...
}

// use StringBuilder on a closure passed as an argument to a function
func S(@StringBuilder _ build : () -> String) -> String {
     return build()
}

let someBool = false
let anotherBool = true

let createdString = S {
    if someBool {
        "-someBool-"
    }
    "B"
    "C"
    "D"
    if someBool {
        "-someBool-"
    } else if anotherBool {
        "-anotherBool-"
    } else {
        "G"
    }
    S {
        "2A"
        "2B"
        "2C"
        S {
            "3A"
            "3B"
            S {
                "4A"
            }
        }
    }
}
print(createdString)  // BCD-anotherBool-2A2B2C3A3B4A
```

> Note : using Xcode 11, I’ve tried adding `buildOptional` to the `*StringBuilder* `so i can add optional Strings but it seems not working as expected because the compiler forced me do optional unwrapping providing a default value like `*optionalString ?? “”*`😭 but it should be fixed with the next release of Xcode, check this thread on swift forums to track swift functions builders implementation progress [here](https://forums.swift.org/t/function-builders-implementation-progress/32981)

## See Also

- [Swift function builder proposal](https://github.com/apple/swift-evolution/blob/9992cf3c11c2d5e0ea20bee98657d93902d5b174/proposals/XXXX-function-builders.md)
- [Understanding Function Builders in Swift](https://www.andyibanez.com/posts/understanding-function-builders/)
- [Create a DSL with Function Builders](https://dev.to/gualtierofr/create-a-dsl-with-function-builders-4c20)
- [List of DSLs made with function builders](https://github.com/carson-katri/awesome-function-builders)

## Conclusion

I hope that this post gives you a little overview about function builders.

If you think i missed anything, let me know and feel free to share with me any thoughts or feedback related to the post. Thanks for reading 😍 🌌

