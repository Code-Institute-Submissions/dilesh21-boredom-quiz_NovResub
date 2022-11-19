# Boredom Quiz

Boredom Quiz is a site that hopes to allow people to relieve their boredom. This could be someone having a slow work day or just someone trying to kill some time.
The quiz will have a total of 25 random questions, with users competing to get in the top 10.
![home](https://user-images.githubusercontent.com/20689249/194715350-80191179-7b86-4a9d-8906-78f6b2c05322.png)

# Features
## Existing Features
+ The Quiz
	+ 25 Random questions will be asked out of the 100 questions stored in the JavaScript array
	+ A progression bar allows for clear visualisation of how far the user has gotten.
![quiz](https://user-images.githubusercontent.com/20689249/194715706-633b2fab-f0a5-4c53-9ee8-edf9bc424ec9.png)

+ The Save Score page
	+ The Save score page will let the user post their score to the highscores list 
![save-score](https://user-images.githubusercontent.com/20689249/194716121-ee6a6eb9-d742-46f5-8f3e-13ed7a98f4bf.png)

+ The Highscores page
	+ This page will feature the top 10 user's score
![highscores](https://user-images.githubusercontent.com/20689249/194716186-cf7ec7fc-80e3-4f52-a6db-c1ebba7cd0f7.png)

+ Dark/Light Mode button
	+ This allows the user to choose between a light theme or a dark theme while completing the quiz.

## Features Left to Implement
+ Adding a timer, the quiz will move on to the next question if the user has not picked an answer.
+ Adding categories, users will be able to choose between random questions to specific category-based questions
+ Adding difficulty levels, the questions will become harder or easier depending on the user’s choice
+ Adding appropriate images for questions, the images may be used to provide clues and improve the appearance of the website

# Design
+ The layout was chosen to keep it simple as possible for the end user to enjoy.
+ The colours used for the design were used to keep everything viewable to the user

# Testing
The site has been thoroughly tested to ensure its various features as intended.

+ When hovering over a button, the button transforms as intended.
![buttonhover](https://user-images.githubusercontent.com/20689249/194716689-5da78829-559b-48c2-9ae7-f947dfb986f4.png)

+ Clear indication of Correct and incorrect choices the user makes.
![correct](https://user-images.githubusercontent.com/20689249/194715939-47939ee9-235b-4fca-a41f-700a895ed0de.png)
![incorrect](https://user-images.githubusercontent.com/20689249/194715944-3cdaad2d-5151-497e-9214-ec63bdc1b4fb.png)

+ The user will not be able to save their score till they enter a name
![save-score](https://user-images.githubusercontent.com/20689249/194716121-ee6a6eb9-d742-46f5-8f3e-13ed7a98f4bf.png)

+ A flex layout was used for every page on the site to allow for responsive website. The media queries used ensure that the page fits to the size of screen and still be easy to read.

![homeR](https://user-images.githubusercontent.com/20689249/194717139-a764adad-b282-478e-858e-1a1887a2cfdc.png)
![quizR](https://user-images.githubusercontent.com/20689249/194717145-c600911e-f433-4e5d-8d56-7647a3df5ff1.png)
![highscoresR](https://user-images.githubusercontent.com/20689249/194717154-89285ca2-de09-467e-b5a6-9f965201f92f.png)
![scoresR](https://user-images.githubusercontent.com/20689249/194717159-eedfcc22-7484-4a9a-87ed-4939c81ce533.png)

## Validator Testing
+ HTML
	+ No errors were returned when passing through the official W3C validator
+ CSS
	+ No errors were found when passing through the official (Jigsaw) validator
+ JavaScript
	+ No major errors were found passing through the official JSHint Validator

## Deployment

The site was deployed to GitHub pages.
The live link can be found here - https://dilesh21.github.io/boredom-quiz/ 

## Credits
+ The questions and answers were taken from [here](https://www.quiztriviagames.com/multiple-choice-trivia-questions/)
+ The icons in the buttons were taken from [Font Awesome](https://fontawesome.com/)
+ [W3Schools Json](https://www.w3schools.com/js/js_json.asp) was used as reference in the website
+ [W3Schools Data Attributes](https://www.w3schools.com/tags/att_global_data.asp) was used as reference in the website
+ [MDN Math.Floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) was used as reference in the website
+ [MDN Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) was used as reference in the website
+ [Tutorial Brian design](https://www.youtube.com/watch?v=f4fB9Xg2JEY) was used to help with code
+ [W3Schools](https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp) was was used as reference in the website
