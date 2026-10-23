
# Frontend

## Packages Installed

bootstrap                  -> framework for CSS styling
bootstrap-icons            -> provides bootstrap icons
react-router-dom           -> allow for 'pages' of my website (without needing a full browser reload)

vitest                     -> runs my tests    
@testing-library/react     -> tests react components
@testing-library/jest-dom  -> provides additional DOM assertions
jsdom                      -> simulates a browser environment

## Testing

I used the Vitest framework to test my website & components

### Components I tested & why

CategorySelector -> selecting a category calls the correct function
QuestionCard     -> displays the correct question & input type
KeybindingInput  -> validate the correct & incorrect keyboard inputs
TextInput        -> validate the correct & incorrect text answers
Practice         -> for the page: category filtering, question progression & progress updates 
Manage           -> for the page: creating, editing & deleting questions & topics (after they were created)

## How it Works

### pages

This got complicated quite quickly, as I wanted 2 main modes: practice & manage
practice -> bring up questions, answer questions & get results
manage   -> bring up questions, be able to add, edit or delete them

I then also need a page, when through the practice or manage page, you select a sub-category
& a further one to display the questions when you click a sub-category

Rather than duplicating a sub-category & question page for manage-subcategories & practice-subcategories
I made it so the sub-category & question page could store the mode they're current on using the URL 
i.e. /practice/emacs -> the sub-category page displays the emacs sub-categories & 'mode' knows it's a practice page
