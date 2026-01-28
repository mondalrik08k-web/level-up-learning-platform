import { useState, useEffect } from 'react';

function MathQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    // Generate questions when the component is mounted
    const newQuestions = [];
    for (let i = 0; i < 10; i++) {
      newQuestions.push(generateRandomQuestion());
    }
    setQuestions(newQuestions);
  }, []);

  const generateRandomQuestion = () => {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let operand1, operand2;
    

    if (operator === '-') {
      operand1 = Math.floor(Math.random() * 100) + 1;
      operand2 = Math.floor(Math.random() * 100) + 1;
      if (operand1 < operand2) [operand1, operand2] = [operand2, operand1];
    } else if (operator === '/') {
      operand1 = Math.floor(Math.random() * 100) + 1;
      operand2 = Math.floor(Math.random() * (operand1 - 1)) + 1;
      while (operand1 % operand2 !== 0) {
        operand2 = Math.floor(Math.random() * (operand1 - 1)) + 1;
      }
    } else {
      operand1 = Math.floor(Math.random() * 100) + 1;
      operand2 = Math.floor(Math.random() * 100) + 1;
    }

    const question = `${operand1} ${operator} ${operand2}`;
    const answer = eval(question);

    const incorrectAnswers = [];
    while (incorrectAnswers.length < 3) {
      let incorrectAnswer = Math.floor(Math.random() * 200) - 50;
      if (incorrectAnswer !== answer && !incorrectAnswers.includes(incorrectAnswer)) {
        incorrectAnswers.push(incorrectAnswer);
      }
    }

    const shuffledAnswers = [answer, ...incorrectAnswers].sort(() => Math.random() - 0.5);

    return {
      question,
      answers: shuffledAnswers,
      correctAnswer: answer,
    };
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      if (Number(selectedAnswer) === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-blue-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
        <div className="text-gray-700 text-lg font-semibold mb-2">
          Maths Game
        </div>
        <div className="text-gray-600 text-sm mb-4">
          Question : {currentQuestionIndex}/10 &nbsp;&nbsp; Score: {score}
        </div>
        {currentQuestionIndex < questions.length ? (
          <>
            <div className="bg-green-200 text-center py-4 text-2xl font-bold rounded mb-4">
              {currentQuestion.question} = ?
            </div>
            <div className="text-gray-700 mb-2">Choose correct one:</div>
            <ul className="mb-4">
              {currentQuestion.answers.map((answer, index) => (
                <li key={index} className="mb-2">
                  <button
                    className={`w-full p-2 rounded border ${
                      selectedAnswer === answer
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200'
                    }`}
                    onClick={() => setSelectedAnswer(answer)}
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </>
        ) : (
          <div className="text-lg font-bold">
            Your score is {score} out of {questions.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default MathQuiz;
