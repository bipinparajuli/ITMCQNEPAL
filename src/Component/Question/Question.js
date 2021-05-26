import React from 'react'
import './Question.css'
import {toast} from 'react-toastify'

const Question = ({question,option1,option2,option3,correct}) => {
    
    const isCorrect = (value) =>{
        console.log(value);
if(value)
{
toast("correct",{type:"success"})

}
else{
    toast("Try again later",{type:"error"})

}
    }

    return (
        <div className="question">
            <h3>1. {question}</h3>
            <div className="answer">
            
            <label onClick={()=>isCorrect(correct.isCorrectA)}>{option1}</label><input type="radio"/>
            <label onClick={()=>isCorrect(correct.isCorrectB)}>{option2}</label><input type="radio"/>
            <label onClick={()=>isCorrect(correct.isCorrectC)}>{option3}</label><input type="radio"/>
            <label onClick={()=>isCorrect(correct.isCorrectD)}>{option3}</label><input type="radio"/>
            </div>
            
        </div>
    )
}

export default Question
