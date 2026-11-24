import { useState } from "react";

import { Card } from "../Card";


export function Flashcard({ question, setCurrentQuestionIndex }) {

    const [revealed, setRevealed] = useState(false)
    
    return (
	<div className="row justify-content-center">
	    <div className="col-md-8">

		<div
		    className={`flashcard-container ${revealed ? "flipped" : ""}`}
		    onClick={() => setRevealed(!revealed)}
		>
		    <div className="flashcard-inner">

			<div className="flashcard-front">
			    <Card className="flashcard-question">
				<h2>{question.question}</h2>
			    </Card>
			</div>

			<div className="flashcard-back">
			    <Card className="flashcard-question">
				<h2>{question.answer}</h2>
			    </Card>
			</div>

		    </div>
		</div>

	    </div>
	</div>
    )
}
