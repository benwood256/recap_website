import { useState } from "react";

import { textChecker } from "../../utils/textChecker";
import { Card } from "../Card";

export function TextInput({ question, setCurrentQuestionIndex }) {

    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(null);
    
    function handleSubmit() {
	event.preventDefault();

	// call the function from utils, update 'correct', then can pass this to Feedback.jsx when correct
	const result = textChecker(answer, question.answer);
	setCorrect(result);
    }
    
    return (
	<div className="row justify-content-center">
	    <div className="col-md-8">
		<Card>
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
			    />
		    )}

		</Card>
	    </div>
	</div>
    )
}
