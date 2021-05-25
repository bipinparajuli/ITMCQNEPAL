import React,{useState} from 'react'
import {TextField,Button,MenuItem} from '@material-ui/core'
import {postQuestion} from "../../ApiHelper/quizapi"
import {toast} from 'react-toastify';

const Admin = () => {
const [question, setquestion] = useState("");
const [answer, setanswer] = useState({
answerA:"",
isCorrectA:false,
answerB:"",
isCorrectB:false,
answerC:"",
isCorrectC:false,
answerD:"",
isCorrectD:false,
});
const [subject, setsubject] = useState("");
const [istrue, settrue] = useState(false);

const submitQuestion = () => {
  postQuestion(question,answer,subject)
  .then(data=>toast("Added Successfully",{type:"success"}))
  .catch(e=>toast("Failed to add",{type:"error"}))
}


return (
        <div style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:'start',alignItems:"center"}}>

  <TextField required id="outlined-basic" onChange={e=>setquestion(e.target.value)} label="Question" variant="outlined" /><br />

  <TextField required id="outlined-basic" onChange={e=>setsubject(e.target.value)} label="Subject" variant="outlined" /><br />

  <TextField required id="outlined-basic" onChange={e=>setanswer({...answer,answerA:e.target.value})}  label="Answer A" variant="outlined" />
  <select onChange={e=>setanswer({...answer,isCorrectA:e.target.value})}>
    <option>Answer</option>
    <option value="true">True</option>
    <option value="false">Flase</option>
    </select>
  <br />
  <TextField required id="outlined-basic" onChange={e=>setanswer({...answer,answerB:e.target.value})} label="Answer B" variant="outlined" />
  <select onChange={e=>setanswer({...answer,isCorrectB:e.target.value})}>
    <option>Answer</option>
    <option value="true">True</option>
    <option value="false">Flase</option>
    </select>
  <br />
  <TextField required id="outlined-basic" onChange={e=>setanswer({...answer,answerC:e.target.value})} label="Answer C" variant="outlined" />
  <select onChange={e=>setanswer({...answer,isCorrectC:e.target.value})}>
    <option>Answer</option>
    <option value="true">True</option>
    <option value="false">Flase</option>
    </select>
  <br />
  <TextField required id="outlined-basic" onChange={e=>setanswer({...answer,answerD:e.target.value})} label="Answer D" variant="outlined" />
  <select onChange={e=>setanswer({...answer,isCorrectD:e.target.value})}>
    <option>Answer</option>
    <option value="true">True</option>
    <option value="false">Flase</option>
    </select>
  <br />


  <Button onClick={submitQuestion} variant="contained" color="primary">
  Submit
</Button>

        </div>
    )
}

export default Admin
