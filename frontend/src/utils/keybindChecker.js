// takes submission from the keybinding questions & return true or false
// can accept answer in different orders (i.e. Ctrl + Alt + t can be accepted as Alt + t + Ctrl)

export function keybindChecker(userAnswer, correctAnswer) {
    if (userAnswer.length !== correctAnswer.length) {
	return false;
    }

    // sort them so they're in alphabetical order
    let sortedUser = [...userAnswer].sort();
    let sortedCorrect = [...correctAnswer].sort();

    // convert to strings & compare the sorted arrays
    return sortedUser.join("").toLowerCase() === sortedCorrect.join("").toLowerCase();
}
