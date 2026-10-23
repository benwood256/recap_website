// react/library imports
import { useNavigate } from "react-router-dom";

// component/practice imports
import { CategorySelector } from "../components/CategorySelector";

export function Practice() {
    const navigate = useNavigate();

    // navigate to new url when a category is selected
    const handleCategorySelect = (category) => {
	navigate(`/practice/${category.id}`);
    };
	
    return (
	<>
	    <CategorySelector handleCategorySelect={handleCategorySelect}/>
	</>
    )
}
