$( document ).ready(function() {

  $("#doneGame").toggle(); //Don't display DONE! - I like toggle...  

  var game = { 

	//create an array of useless questions and answers  	
    uselessQuestions: [

    {
      question: "What musical key do most car horns honk in?",
      guess1: "A",
      guess2: "C",
      guess3: "D",
      guess4: "F",
      id: "q1",
      answer: 4

    }, {

      question: "In which state is daylight savings time NOT observed everywhere?",
      guess1: "California",
      guess2: "New York",
      guess3: "Indiana",
      guess4: "Georgia",
      id: "q2",
      answer: "F"

    }, {

      question: "How many eyes does a bee have?",
      guess1: 2,
      guess2: 4,
      guess3: 5,
      guess4: 6,
      id: "q3",
      answer: 5

    }, {

      question: "Which animal is it illegal to hunt in Arizona?",
      guess1: "Fox",
      guess2: "Camel",
      guess3: "Coyote",
      guess4: "Pig",
      id: "q4",
      answer: "Camel"

    }, {

      question: "How many pitches is the average life span of a major league baseball?",
      guess1: 7,
      guess2: 12,
      guess3: 18,
      guess4: 20,
      id: "q5",
      answer: 7
    }]
  };

    //create a start box/button that appears on the front page on load, 
    $("#startGame").on("click", function (){
//     console.log('hello'); //just checking
    $("#startGame").toggle(); //I like the toggle...
	});



//when the start button is clicked the timer starts 

//create a timer that counts down from 30 to 0
var number = 31; //number of seconds you have to answer
var intervalId; //initialize for later, store and clear

   $("#startGame").on("click", run); //click here to start to invoke run
   $("#doneGame").on("click", stop); //click DONE! if you want to end before timer is up, invoke stop

    function run() { 
      intervalId = setInterval(decrement, 1000); //run decrement every 1 second
//      console.log("hello show"); //just checking
      showQuestions(); //show the questions on screen
      $("#doneGame").toggle(); //display DONE!
    }

    function decrement() { 
      number--; //show number of seconds on screen
      $("#show-time").html("GO! GO! GO! You have " + number + " seconds left!<br><br>"); //time left
        if (number === -1) { //if you got past zero you are DONE! anyway
        stop(); //invoke the stop function
      }
    }

     function stop() { //all done, either time ran out or DONE! was clicked
      clearInterval(intervalId); //Stop the timer
      $("#show-time").toggle(); //Don't display the time left any more
      $("#showQuestions").toggle(); //remove the questions
      $("#showAnswers").toggle(); //remove the questions
      $("#doneGame").toggle(); //show your final stats
      showFinal(); //invoke showFinal, does all your junk!
    }

//when the start button is clicked questions and question answers appear
//list questions and answer on screen with input buttons
	function showQuestions() { 
	 for (var i = 0; i < game.uselessQuestions.length; i++) { //for loop to get questions on screen
     $("#showQuestions").append
      ("<div class='col-md-12 smallerFont'><span class='meanGreen'>" + game.uselessQuestions[i].question + 
       "</span><br><form>" +

       "<input type='radio' name='" + game.uselessQuestions[i].id +  
       "' value='" + game.uselessQuestions[i].guess1 +
       "' /> <span class='paleBlue'>" + game.uselessQuestions[i].guess1 + 
       "</span> &nbsp;" +

       "<input type='radio' name='" + game.uselessQuestions[i].id +  
       "' value='" + game.uselessQuestions[i].guess1 +       
       "' /> <span class='paleBlue'>" + game.uselessQuestions[i].guess2 + 
       "</span> &nbsp;" +       

       "<input type='radio' name='" + game.uselessQuestions[i].id +  
       "' value='" + game.uselessQuestions[i].guess1 +              
       "' /> <span class='paleBlue'>" + game.uselessQuestions[i].guess3 + 
       "</span> &nbsp;" +       

       "<input type='radio' name='" + game.uselessQuestions[i].id +  
       "' value='" + game.uselessQuestions[i].guess1 +              
       "' /> <span class='paleBlue'>" + game.uselessQuestions[i].guess4 + 
       "</span> &nbsp;" +       

       '</span></form><br></div>');
        }        
      }

var correct = 0; //holds correct answers
var wrong = 0; //holds wrong answers
var unanswered = 0; //questions unanswered

//******************************************************************************

//INSTEAD OF SHOWFINAL I WOULD INVOKE ANOTHER FUNCTION THAT GATHERED 
//THE VALUE OF EACH INPUT CLICK BY NAME (LIKE THURSDAY ACTIVITIES) AND COMPARED
//THE VALUE ON INPUT TO THE VALUE OF ANSWER IN THE JSON DATA.  IF IT WAS CORRECT,
//ADD TO CORRECT. IF IT WAS INCORRECT, ADD TO WRONG.  OTHERWISE, ADD TO
//UNANSWERED.  THEN I WOULD INVOKE SHOWFINAL WITH ALL OF THE VALUES UPDATED.  

//SORRY I DIDN'T DO MORE, IT'S BEEN A REALLY TOUGH WEEK AT WORK.  I HOPE TO FIX
//THIS UP WHEN I HAVE SOME TIME. 

//******************************************************************************


//if timer runs out, show number correct, number wrong, and number unanswered.
	function showFinal() {
    $("#game-over").html("Game Over!");    
		$("#show-correct").html("You answered " + correct + " correctly");		
		$("#show-wrong").html("You answered " + wrong + " incorrectly");
		$("#show-unanswered").html("You had " + unanswered + " unanswered questions.");				
	}

}); //document.ready









