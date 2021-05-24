import React from 'react'
import './Question.css'

const Question = ({question,option1,option2,option3,correct}) => {
    return (
        <div className="question">
            <h1>1. {question}</h1>
            <div className="answer">
            
            <p>{option1}</p><input type="radio"/>
            <p>{option2}</p><input type="radio"/>
            <p>{option3}</p><input type="radio"/>
            <p>{correct}</p><input type="radio"/>
            </div>
            
        </div>
    )
}

export default Question