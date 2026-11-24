import { useState, useEffect } from "react";

import { textChecker } from "../../utils/textChecker";
import { Card } from "../Card";

import { Feedback} from "./Feedback";

export function TextInput({ question, setCurrentQuestionIndex }) {

    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(null);

    // handle checking if a submission has occured (so, multiple wrong answer still make the card flash red)
    const [submissionCount, setSubmissionCount] = useState(0);

    // if answer is correct, update questionIndex -> i.e. load the next question
    useEffect(() => {
	if (correct === true) {
	    const timer = setTimeout(() => {
		setCurrentQuestionIndex(prev => prev + 1);
	    }, 1000);

	    return () => clearTimeout(timer);
	}
    }, [correct, setCurrentQuestionIndex]);
    
    function handleSubmit(event) {
	event.preventDefault();

	// call the function from utils, update 'correct', then can pass this to Feedback.jsx when correct
	const result = textChecker(answer, question.answer);

	setCorrect(result);
	setSubmissionCount(prev => prev + 1);

	if (!result) {
	    setAnswer("");
	}
    }
    
    return (
	<div className="row justify-content-center">
	    <div className="col-md-8">
		{/* className used here to flash green/red depending on if a correct answer is given or not */}
		<div className="textinput-question">
		    <Card
			key={submissionCount}
			className={
			    correct === null
				? ""
				: correct
				    ? "correctAnswer"
				    : "incorrectAnswer"
		    }>
			<h2 className="pt-4">{question.question}</h2>

			<form className="input-div" onSubmit={handleSubmit}>
			    <input
				type="text"
				className="form-control"
				placeholder="Type your answer here..."
				autoFocus
				value={answer}
				onChange={(event) => setAnswer(event.target.value)} 
			    />

			    <button
				type="submit"
				className="submit-text-button"
			    >
				Submit
			    </button>
			</form>

			{correct !== null && (
				<Feedback
				    correct={correct}
				    correctAnswer={question.answer}
				    questionType={question.type}
				/>
			)}

		    </Card>
		</div>
	    </div>
	</div>
    )
}
