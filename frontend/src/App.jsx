// library imports
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css'

// component imports
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// pages imports
import { Practice } from "./pages/Practice";
import { Manage } from "./pages/Manage";
import { SubcategoryPage } from "./pages/SubcategoryPage";
import { QuestionPage } from "./pages/QuestionPage";

function App() {

  return (
    <>
	<Navbar />

	<Routes>
	    {/* The page opens at /, this redirects that to /practice */}
	    <Route path="/" element={<Navigate to="/practice" replace />} />

	    <Route path="/practice" element={ <Practice /> } /> 
	    <Route path="/manage" element={ <Manage /> } /> 

	    <Route path="/:mode/:category" element={ <SubcategoryPage /> } />
	    <Route path="/:mode/:category/:subcategory" element={ <QuestionPage /> } />
	</Routes>

	<Footer />
    </>
  )
}

export default App
