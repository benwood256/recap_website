// take in a submission result from TextInput.jsx & return true or false, if the answer is right or wrong

export function textChecker(userAnswer, correctAnswer) {
    return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
}
