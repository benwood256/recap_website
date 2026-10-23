import { Card } from "../Card";

export function QuestionCard ({ question }) {
    return (
	<Card>
	    <h3>{question.question}</h3>
	    <p>checker</p>

	</Card>
    );
}
