- build a form with radio buttons in html and css

<form>
  <!-- Each question has this format -->
  <fieldset>
    <legend>Question 1</legend>
    <label>
      <span>I am a Gemini.</span>
      <input type="radio" name="question-1" value="a" />
    </label>
    <label>
      <span>I own a cat.</span>
      <input type="radio" name="question-1" value="b" />
    </label>
    <label>
      <span>I have gone skydiving.</span>
      <input type="radio" name="question-1" value="c" />
    </label>
  </fieldset>

  <!-- ... --->

  <button type="submit">
    Submit
  </button>

  <div id="points"></div>
</form>

- access the form data in javascript when the user hits the submit button

  - Use `document.querySelector("form")` to get the form element.

  - Listen for when the user has submitted the form.

    - Use `formElement.addEventListener("submit", callbackFn)` on the form element.

  - Callback function needs to:

    - Prevent itself from going to a new page.
      - `event.preventDefault()`
    - Access the form data.
      - `new FormData(formElement)`

  - Array or object with a key of answers for each question.

  // From the user:
  {
  "question-1": "a",
  "question-2": "b",
  "question-3": "c",
  "question-4": "a",
  "question-5": "b",
  "question-6": "c",
  "question-7": "a",
  "question-8": "b",
  "question-9": "c",
  "question-10": "a"
  }

- loop over and checking for correctness of each answer

  - Array or object with a key of answers for each question.

  // Key from code:
  {
  "question-1": "b",
  "question-2": "b",
  "question-3": "c",
  "question-4": "a",
  "question-5": "b",
  "question-6": "c",
  "question-7": "a",
  "question-8": "b",
  "question-9": "c",
  "question-10": "a"
  }

  - Compare each question from the user to the key from the code.

    - If they match, add a point to the score.
    - If they don't match, do nothing.

  - Before we loop, we set a variable to keep track of the points.

    - Probably using `let` instead of `const` because we will be changing it.

  - As we loop over each question, we may increase the points by 1 if the answer is correct.

- generate the total score (or category corresponding to a score)

  - We have the total score by the time we are done looping through all the questions.

- show the real answers at the end of the quiz

  - Keep the markup the same, but add CSS classes to the questions that were answered correctly or incorrectly.

  - Already we have a `<div>` on the page with an ID. And we populate that div with the score by targetting it's ID.

  - `pointsElement.innerText(theScore)` to set the score so it will show.
