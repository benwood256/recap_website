// react/library imports
import { useNavigate, useParams } from "react-router-dom";

// component/practice imports
import { SubcategorySelector } from "../components/SubcategorySelector";

export function SubcategoryPage() {
    const navigate = useNavigate();
    const { mode, category } = useParams();

    // navigate to new url when a category is selected (& remember if it's practice or manage mode)
    const handleSubcategorySelect = (subcategory) => {
	navigate(`/${mode}/${category}/${subcategory.id}`);
    };
	
    return (
	<>
	    <SubcategorySelector handleSubcategorySelect={handleSubcategorySelect}/>
	</>
    )
}
