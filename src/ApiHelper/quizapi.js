//get all question
export const getAllQuestion = (subject)=> {

 return fetch(`http://localhost:8000/api/getquestion/${subject}`)
    .then(data=>{
        return data.json()
    })
    .catch(err=>{
       return err;
    })

}

//post question to database
export const postQuestion = ()=> {
    
}