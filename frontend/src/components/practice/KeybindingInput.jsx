import { useState, useEffect } from "react";

import { keybindChecker } from "../../utils/keybindChecker";

import { Card } from "../Card";

export function KeybindingInput({ question, setCurrentQuestionIndex }) {

    const [answer, setAnswer] = useState("");
    const [correct, setCorrect] = useState(null);

    const [pressedKeys, setPressedKeys] = useState([]); // as keys are pressed, they populate an array

    // if answer is correct, update questionIndex -> i.e. load the next question
    useEffect(() => {
	if (correct === true) {
	    const timer = setTimeout(() => {
		setCurrentQuestionIndex(prev => prev + 1);
	    }, 1000);

	    return () => clearTimeout(timer);
	}
    }, [correct, setCurrentQuestionIndex]);

    // function that takes the keys pressed & stores them in an array
    // the return statements are required, otherwise it would still run the setPressKeys function, after the statement
    const detectKeyDown = (event) => {

	// remove single key press
	if (event.key === "Backspace" || event.key === "Delete") {
	    setPressedKeys((previousKeys) => 
		previousKeys.slice(0, -1) // creates a new array without the last added item
	    );
	    return;
	}
	// remove all keys
	else if (event.key === "Escape") {
	    setPressedKeys([]);
	    return;
	}
	// space bar is invisble otherwise, so manually add the word (i.e. spacebar appears as " " on the screen)
	else if (event.key === " ") {
            setPressedKeys((previousKeys) => [
		...previousKeys,
		"spacebar"
	    ]); 
	    return;
	}

	setPressedKeys((previousKeys) => [
	    ...previousKeys,
	    event.key.toLowerCase()
	]);
    };


    // sitting & waiting for keys to be pressed
    useEffect(() => {
	document.addEventListener('keydown', detectKeyDown);
	
	return () => {
	    document.removeEventListener('keydown', detectKeyDown);
	};
    }, []);

    // check if answer is correct
    useEffect(() => {
	if (pressedKeys.length !== question.answer.length) return;

	const isCorrect = keybindChecker(pressedKeys, question.answer);

	setCorrect(isCorrect);

    }, [pressedKeys, question.answer]);

    // handle incorrect answers
    useEffect(() => {
	if (correct !== false) return;

	const timer = setTimeout(() => {
	    setPressedKeys([]);
	    setCorrect(null);
	}, 1000);

	return () => clearTimeout(timer);

    }, [correct]);

    return (
	<div className="row justify-content-center">
	    <div className="col-md-8">
		{/* className used here to flash green/red depending on if a correct answer is given or not */}
		<div className="keybinding-question">

		    <Card
			className={`keybinding-card ${
			    correct === null
				? ""
				: correct
				    ? "correctAnswer"
				    : "incorrectAnswer"
			}`}>

			<h2 className="pt-4">{question.question}</h2>


		    </Card>

		    <div className="press-keys">
			<h4>Pressed Keys:</h4>
			<br></br>
			<h4><b><i>{pressedKeys.length === 0 ?
				"enter a key" :
				pressedKeys.join(' + ')}</i></b></h4>
		    </div>

		</div>
	    </div>
	</div>
    )
}
