// react/library imports
import { useNavigate, useParams } from "react-router-dom";

// component/practice imports
import { QuestionSelector } from "../components/QuestionSelector";

export function QuestionPage() {
    const navigate = useNavigate();
    const { mode, category, subcategory } = useParams();
	
    return (
	<>
	    <QuestionSelector />
	</>
    )
}
