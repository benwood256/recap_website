import { useParams } from "react-router-dom";
import { useState } from "react";

import { tempQuestions } from "../data/tempQuestions.js";
import { categories } from "../data/categories.js";

import { QuestionCard } from "./practice/QuestionCard";
import { Card } from "./Card";

export function QuestionSelector() {
    const { mode, category, subcategory } = useParams();

    // need to retrieve the subcategory so I can display it's name in the <h2> element
    const selectedCategory = categories.find(
	(item) => item.id === category
    );
    const selectedSubcategory = selectedCategory?.subcategories.find(
	(item) => item.id === subcategory
    );

    // retrieve questions from database (.filter() returns an array of all matching objects)
    const selectedQuestions = tempQuestions.filter(
	(question) =>
	    question.category === category &&
	    question.subcategory === subcategory
    );

    // Track current question/question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // start at 1st index

    // Actually set & store the active question
    const currentQuestion = selectedQuestions[currentQuestionIndex];

    // If URL mode is 'practice' 
    if (mode === "practice") {
	return (
	    <main className="container">

		<h2>{selectedSubcategory.name} Questions</h2>

		{/* Put Progress.jsx here -> track question index & display it */}

		{currentQuestion ? (
		    <div>
			<QuestionCard question={currentQuestion} setCurrentQuestionIndex={setCurrentQuestionIndex}/>

			<button
			    className="next-question-button" 
			    onClick={() =>
				setCurrentQuestionIndex(
				    currentQuestionIndex + 1
				)
			    }
			    disabled={
				currentQuestionIndex >= selectedQuestions.length - 1
			    }
			>
			    Skip Question
			</button>
		    </div>

		) : (
		    <p>No questions available</p>
		)}



	    </main>
	);
    }

    // If URL mode is 'manage' 
    else if (mode === "manage") {
	return (
	    <main>
		<h2>Manage Page chosen</h2>
	    </main>
	);
    }
}
