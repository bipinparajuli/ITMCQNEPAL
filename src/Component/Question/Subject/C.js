import React,{useEffect} from 'react'
import Question from '../Question'
import {getAllQuestion} from '../../../ApiHelper/quizapi'

const C = ({match}) => {

    const preload = (subject)=> {
getAllQuestion(subject)
.then(data=>{
    console.log(data);
}).catch(er=>console.log(er))
    }


useEffect(()=>{
    console.log(match.params);
preload(match.params.subject);
},[])
    return (
        <div>
            <Question question="Who is founder of C." option1="bipin" option2="someone" option3="someone" correct="denich rechi" />
        </div>
    )
}

export default C
