// This handles what is displayed after an answer is entered by the user, if it's correct or incorrect
// It needs to handle different types of answers (i.e. text input has an obvious answer, but a flashcard reveals the answer

export function Feedback({ correct, correctAnswer, questionType }) {

    // If question is correct, TextInput.jsx moves to next question (useEffect), hence <div> is empty below for right answer
    if (questionType === "text") {
	return (
	    <div className={correct ? "correctAnswer": " incorrectAnswer"}>
		{correct ? (
		    <div>
		    </div>
		) : (
		    <div>
			<p>Incorrect, the answer is:</p>
			<h4><b>{correctAnswer}</b></h4>
		    </div>
		)}
	    </div>
	)
    }

    /* FIX: currently doesn't display */
    else if (questionType = "keybinding") {
	return (
	    <div className={correct ? "correctAnswer": " incorrectAnswer"}>
		{correct ? (
		    <div>
		    </div>
		) : (
		    <div>
			<p>Incorrect, the answer is:</p>
			<h4><b>{correctAnswer}</b></h4>
		    </div>
		)}
	    </div>
	)
    }
}
