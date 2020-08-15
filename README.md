# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

> You have three hours to complete this challenge. Plan your time accordingly.

## Description

You will notice there are several JavaScript files being brought into the index.html file. Each of those files contain JavaScript problems you need to solve. If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

.forEach & .map are very similar. Each allows you to do something to each element of an array. The key difference is in the way that map returns a new array without altering the original array.

2. Explain the difference between a callback and a higher order function.

A callback is a parameter that is passed in as an argument for a higher order function. The higher order function is a parent function to the callback function that gets passed inside of it.

3. What is closure?

Closure describes the full loop and closes the circle between when the variable is declared and when it's used. Closure encompasses the scope in which a variable is used.

4. Describe the four rules of the 'this' keyword.

   A. - This referes to the object that currently invokes it in the case where a constructor function is used.
   B. - This referes to the window when invokes in the global scope.
   C. - This referes to the object the precedes the dot in a methods invocation call.
   D. - When using call or apply, this is explicity defined by the object that's being called or applied to.

5. Why do we need super() in an extended class?

Super allows us to use the functions of a parent constructor.

### Task 1 - Project Set up

Follow these steps to set up and work on your project:
Make sure you clone the branch that the TK links to: the vnext branch, NOT master!

- [✓] Create a forked copy of this project.
- [✓] Add TL as collaborator on Github.
- [✓] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [✓] Create a new Branch on the clone: git checkout -b `<f✓rstName-lastName>`.
- [✓] Create a pull request before you start working on the project req✓irements. You will continuously push your updates throughout the pro✓ect.
- [✓] You are now ready to build this project with your preferred IDE
- [✓] Implement the project on your Branch, committing changes regularly.
- [✓] Push commits: git push origin `<firstName-lastName>`.

### Task 2 - Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.

- [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started. Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope.

- [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.

- [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.

- [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3 - Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission Format

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by merging the branch back into master.
