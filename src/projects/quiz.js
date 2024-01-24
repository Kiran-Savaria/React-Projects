import { useEffect, useState } from 'react';
import '../App.css';

function QuizGenerator(){

    const [quiz, setQuiz] = useState(
        {
        results: [
            {
                question: "Getting Data",
                category: "Fetching Data",
                correct_answer: "Fetching Details",
            }
        ]
    }
    );

    useEffect(() => {
        try {
            const getquiz = async () =>{
                const result = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean');
                const res = await result.json();
                console.log(res);
                setQuiz(res);
            }
            getquiz();
        } catch (error) {
            console.log(error);
        }
    }, [])

    return(
        <div className='quizheading'>
            <h1>Computer Science Quiz</h1>
        <div className='quizContainer'>
            {quiz.results.map((quizobj, index) => {
                return(
                    <div className='quiz'>
                        <p className='questionCard'>{quizobj.question}</p>
                        <p className='optionCard'>Yes</p>
                        <p className='optionCard'>No</p>
                    </div>
                )
            })}
        </div>
        </div>
    );
}

export default QuizGenerator;