import { useParams } from "react-router-dom";

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

    // If URL mode is 'practice' 
    if (mode === "practice") {
	return (
	    <main className="container">

		    <h2>{selectedSubcategory.name} Questions</h2>
		    <div className="row g-4 justify-content-center">

			{/* Map each question list from 'tempQuestions.js' to a box */}
			{selectedQuestions.map((question) => (
			    <div
				key={question.id}
				className="col-auto category-card"
			    >
				<div className="category-card">
				    <QuestionCard question={question} />
				</div>
			    </div>
			))}

		    </div>

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
