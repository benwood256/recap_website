import { useParams } from "react-router-dom";

import { Card } from "./Card";

import { categories } from "../data/categories.js";

export function SubcategorySelector({ handleSubcategorySelect }) {
    const { category } = useParams();

    const selectedCategory = categories.find(
	(item) => item.id === category
    );

    return (
        <main className="container">
	    <h2>{selectedCategory.name} Topics</h2>
            <div className="row g-4 justify-content-center">

                {/* Map each subcategory from 'categories.js' to a box */}
                {selectedCategory.subcategories.map((subcategory) => (
                    <div
                        key={subcategory.id}
                        className="col-auto category-card"
			onClick={() => handleSubcategorySelect(subcategory)}
                    >
			<div className="category-card">
			    <Card>
                                <span
				    className="category-name"
				>{subcategory.name}</span>
			    </Card>
			</div>
                    </div>
                ))}

            </div>
        </main>
    );
}
