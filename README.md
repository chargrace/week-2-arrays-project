# ARRAYS

So far you've learned about primitive data types like strings, numbers, booleans etc in JavaScript. These allow you to represent single values. However, JavaScript also provides built-in data structures that let you store multiple values together in one place. This is useful when you need to group related data.

For example, if you wanted to represent a real-world shopping list in code, it would be tedious to manage each item as a separate variable - much better to use a data structure! One commonly used data structure is the array. Arrays let you store multiple values (of any type) in a flexible, ordered list.

Let's explore arrays - they will add a critical new tool to your programming toolbox. 🎉

## 💡 OBJECTIVES FOR THE WORKSHOP

This workshop is all about _arrays_! Here's a glimpse of what you'll have achieved by the end of this workshop:

- Objective 1: Be able to read and write the syntax for arrays
- Objective 2: Be able to access and modify items in an array
- Objective 3: Be able to loop through an array

## 🎟️ TICKETS

Time to dive into action! 🏊‍♀️ Here's what you'll be working on:

### 🎫 Ticket 1 - GETTING SET UP

**Tasks**:

1. create a HTML file in this workshop folder
2. paste the following code into your newly created HTML file and familiarise yourself with the code

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Arrays</title>
  </head>
  <body>
    <h1>Arrays</h1>
    <img src="./array.webp" alt="array" />
  </body>
</html>
```

3. create a CSS file in this workshop folder
4. paste the following code into your newly created CSS file and familiarise yourself with the code

```css
body {
  text-align: center;
  color: blue;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
```

5. link your CSS file to your HTML file
6. create a JavaScript file named `main.js` in this workshop folder
7. link your JS file to your HTML file
8. write a basic console message in your JS file, such as 'Hello World'
9. run your HTML file with LiveServer to open it up in the browser and check everything is working
10. congratulate yourselves on a job well done 🎉

### 🎫 Ticket 2 - GETTING TO GRIPS WITH ARRAYS

Arrays might seem intimidating at first, but they're just a handy way for us to store data in an ordered fashion. We'll look at the ways we can interact with the data we store in arrays, but first let's explore the concept of arrays.

**Tasks**:

- Read through the information in https://javascript.info/array (don't worry about completing the tasks on that website)
- Discuss with your team:
  - What does an array look like in JS?
  - When are arrays useful for real apps and websites?
  - How do you create/initialize an array?
- In `main.js`:
  - Create an array storing your top 5 favorite songs (what data type could you use to represent each song?) and assign the array to a variable named `songs`
    - Arrange the songs in your array in order of preference. Put your most favorite song first in the array, followed by your second favorite, and so on until your fifth favorite song at the end.
  - Log the length of the array (using its `length` property) to the console
  - One way to test whether something is an array is to use the built-in `Array.isArray` method (function). It's similar to `typeof` for other data types - try it out on your array
  - Briefly discuss with your teammates what sort of data types we can store in arrays - try creating an array with different types

### 🎫 Ticket 3 - NOTATION: HOW TO READ ITEMS IN AN ARRAY

Great, you know how to create arrays and store data in order. But often you need to access specific entries later on. To get a particular value from an array, you use bracket notation with the index of the item. Indexes start at 0 for the first element.

For example, to log the fifth song from your songs array:

```js
console.log(songs[4]);
```

Using your songs array:

- Log your second favorite song (index 1)
- Log your most favorite song (index 0)

Remember, arrays use zero-based indexing, so the first item is at 0. Use indexes to access array elements!

### 🎫 Ticket 4 - NOTATION: HOW TO MODIFY ITEMS IN AN ARRAY

You've decided you no longer like your fifth song and the song 'Baby Shark' has now become your fifth favourite. Use bracket notation to access the item and use the assignment operator to reassign it to 'Baby Shark'. Then log the array to the console to check that the fifth song is now 'Baby Shark' 🎉

### 🎫 Ticket 5 - LOOPING THROUGH ARRAYS

You have an array of numbers that represent the number of cookies that were ordered at a cafe this morning, but the person who took the orders and submitted the figures mis-read the number and now they all need to be multiplied by ten or customers won't get enough cookies!

**Tasks**:

- Copy and paste this array into `main.js`:

  ```javascript
  let cookiesOrdered = [15, 3, 67, 1, 22, 100];
  ```

- Create a `for` loop that starts at the first index of the array (remember, what index do arrays start at?) and goes up to but not including the array's length.
- Inside the loop, multiply the current value by 10 and reassign to the array at that index
- After the loop, log the array to the console and make sure it's changed to:
  ```json
  [150, 30, 670, 10, 220, 1000]
  ```

### 🎫 Final Ticket - REAL-WORLD EXAMPLE: AUTOMATED QUIZ SYSTEM

Your client is a pub running quizzes every Monday night. Unfortunately, their quiz master has decided to leave and the pub has decided this is the perfect time to automate their pub quiz. They’ve approached you to help them create an interactive quiz game. You'll draw on what you've learnt about arrays and the fundamental JS concepts you've learnt so far.

**CLIENT REQUIREMENTS**

The system should cycle through all of the questions (there should be at least 5 questions), starting with the first one. For each question, it should:

- display the question number and question
- get the user's answer to the question
- check if the user's answer is correct or not.
- when a user gives a correct answer, they should get 1 point and the system should display a message that lets the user know:
  - their answer was correct
  - they've gained a point
  - what their new score is
- when a user gives a correct answer, they should not get any points for the current question and the system should display a message that lets the user know:
  - their answer was incorrect
  - what their score is

Finally, at the end of the quiz, once all of the questions have been displayed and answered, the system should display a message that lets the user know their final score, including how many questions they answered correctly and how many questions were asked in total.

Any other details (for example, what the questions are about, what the "personality" of the automated quiz master should be, etc.) are for you and your team to decide. As usual, you should tackle this problem using computational thinking and ensure you've understood the problem and written a plan before starting to code.

- think about how you can store quiz questions and quiz answers
- how will you cycle through the questions and display them?
- how will you get and store the user's answer?
- how will you check that they have got the correct answer and how will you make the code do different things depending on whether they have or haven't answered correctly?
- how will you keep score?
- how will you display the final score to the user?

---

🎉 Whoop whoop! Smashed that one! Have a think about what we've covered in this workshop - what is an array? Why are they useful? What notation do we use to access and modify array items? How do we loop through an array and what applications will this have for us on our journey into code? 👏🏾
