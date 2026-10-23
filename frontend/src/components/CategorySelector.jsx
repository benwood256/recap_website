// takes in the list of topics (& sub-topics) which are in an array from ../data/categories.js & maps them

import { Card } from "./Card";

import { categories } from "../data/categories.js";

export function CategorySelector({ handleCategorySelect }) {
    
    // both manage & practice have a function 'handleSelect' which retrieves the category
    return (
        <main className="container pb-5">
            <div className="row g-4 justify-content-center">

                {/* Map each category from 'categories.js' to a box */}
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="col-auto category-card"
			onClick={() => handleCategorySelect(category)}
                    >
			<div className="category-card">
			    <Card>
                                <span
				    className="category-name"
				>{category.name}</span>
			    </Card>
			</div>
                    </div>
                ))}

            </div>
        </main>
    );
}
