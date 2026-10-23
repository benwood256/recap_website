import { useNavigate } from "react-router-dom";

// component/practice imports
import { CategorySelector } from "../components/CategorySelector";

export function Manage() {
    const navigate = useNavigate();

    // navigate to new url when a category is selected
    const handleCategorySelect = (category) => {
	navigate(`/manage/${category.id}`);
    };

    return (
	<>
	    <div className="topic-buttons">
		<button className="add-topic-button">
		    <b>Add Topic</b>
		</button>

		<button className="delete-topic-button">
		    <i className="bi bi-trash"></i>
		</button>
	    </div>
	    
	    <CategorySelector handleCategorySelect={handleCategorySelect}/>
	</>
    )
}
