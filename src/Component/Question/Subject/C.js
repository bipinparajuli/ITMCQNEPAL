import React,{useEffect,useState} from 'react'
import Question from '../Question'
import {getAllQuestion} from '../../../ApiHelper/quizapi'

const C = ({match}) => {

    const [questions, setquestion] = useState([])


    const preload = (subject)=> {
getAllQuestion(subject)
.then(data=>{
    console.log(data.data);
    setquestion(data.data)
}).catch(er=>console.log(er))
    }


useEffect(()=>{
    console.log(match.params);
preload(match.params.subject);
},[])
    return (
        <div>
{
   questions.length<=0 ?
   <>
   <div className="preload">
       <div className="preload_question"></div>
       <div className="preload_answer">
        <div></div>
       <div></div>
       <div></div>
       <div></div>
       </div>
   </div>
   <div className="preload">
       <div className="preload_question"></div>
       <div className="preload_answer">
        <div></div>
       <div></div>
       <div></div>
       <div></div>
       </div>
   </div>
   <div className="preload">
       <div className="preload_question"></div>
       <div className="preload_answer">
        <div></div>
       <div></div>
       <div></div>
       <div></div>
       </div>
   </div><div className="preload">
       <div className="preload_question"></div>
       <div className="preload_answer">
        <div></div>
       <div></div>
       <div></div>
       <div></div>
       </div>
   </div>
   </>
:   questions.map(question=>{
        return(
            <Question
             question={question.description}
              option1={question.alternatives.answerA} 
              option2={question.alternatives.answerB}
               option3={question.alternatives.answerC}
               option4={question.alternatives.answerD}
correct={question.alternatives}
                 />
        )
    })
}
        </div>
    )
}

export default C
