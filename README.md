# courseWork_04_codeQuiz

# Description
The purpose of this assignment was to create a timed quiz using multiple choice questions. The quiz that I created uses MLB rules and records as a theme and begins with a timer of 40 seconds. Each correct answer increases the timer by 10 seconds and the user score by 1000 points. While each incorrect answer results in the timer and score decreasing by the same amounts. 

When a user answers a question correctly, the next question is rendered to the page until all questions have been successfully answered or the timer runs out. If the user answers all questions correctly they are alerted and brought to the highscores page to log their name and score. 


# Pseudo Code 
![pseudo1](./assets/images/pseudo1.png)

![pseudo2](./assets/images/pseudo2.png)

# Code Description
I began by first selecting out each of the elements that I knew I wanted to use via the document.querySelector or similar methods. I then set an array with an object inside containing all of my questions, answers, and answer key. Following that I establish all global variables to be used throughout the application. 

I then wrote a series of functions to handle the different tasks of the assignment. One to render my intial question on the click of "begin quiz", utilizing the textContent method set for my buttons set equal to the question/answers stored within my questions array. The question is rendered via a innerHTML method establishing a paragraph within the heading of the container. A score display is also rendered below the buttons via innerHTML. 

The nextQuestion function is very similar to renderQuestion, but uses a for loop based on the quizQuestion length and currentQuestion variable established at the top of the JS script. 

A renderTimer and beginQuiz function were also established. The renderTime function decrements the count, places text content for the timer in the specified element and when the count reaches 0 or a negative number, the user is alerted and the home page reloads. This function is then passed through the beginQuiz function via the timer variable set to an interval of 1 second. These two functions are called via an onclick event set to the begin quiz button on the home page. This onclick event also hides the welcomeContainer of the page and displays the previously undisplayed quizContainer. 

Finally a checkAnswer function is used that also uses an onclick even for the user answer selection. The function checks that the target tagName is equal to BUTTON and that the ID of the button clicked matches back to the correct answer listed in our questions array/object. This is accomplished by maintaining our currentQuestion variable equal to the index of the current question and checking the event target ID against that index question's answer. If the answer is correct, the timer is increase, current question is increased and the score is incremented by 1000. If the answer is incorrect the timer and score are decremented. When the current question reaches 5 (the end of the quiz) the user score is pushed to the local storage and the quizCompleted function is called. This function sets the local storage item for score and alerts the user that the quiz has ended. Finally, it takes the user to the high score page where they can input their name to be added to the leaderboard. 

From there, the name entered is pushed into a user name array. This array is then to be set as the local storage item for names. A final onclick event is established for the submit button where ttwo functions are called. appendName and appendScore. These functions establish a new h5 HTML element on the highscores page beneath the labels and sets the text value of the new elements equal to the name and score respectively. 

# Future Development
I was unable to accomplish everything that I wanted in the given time for this assignment and struggled with getting my local storage items to maintain after navigating away from the page. I believe it has to do with the structure (mutltiple pages) and logic of when I am establishing the local storage setItem and when the score/name are being stored. Additionally, given more time, I would have focused more on the CSS, specifically the responsiveness of the page. and adding additional JS functionality.  I plan on asking questions related to the local storage issues that I encountered and will come back to this assignment once I have a better understanding in order to implement it properly. 