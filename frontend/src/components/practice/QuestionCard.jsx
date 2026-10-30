import { TextInput } from "./TextInput";
import { Flashcard } from "./Flashcard";
import { KeybindingInput } from "./KeybindingInput";

export function QuestionCard ({ question, setCurrentQuestionIndex }) {

    if (question.type === "text") {
	return (
	    <TextInput question={question} setCurrentQuestionIndex={setCurrentQuestionIndex}/>
	)
    }

    if (question.type === "flashcard") {
	return (
	    <Flashcard question={question} setCurrentQuestionIndex={setCurrentQuestionIndex}/>
	)
    }

    if (question.type === "keybinding") {
	return (
	    <KeybindingInput question={question} setCurrentQuestionIndex={setCurrentQuestionIndex}/>
	)
    }

    // Catch any edge cases where question type hasn't been defined
    return <p>Error: Unknown question type</p>
}
