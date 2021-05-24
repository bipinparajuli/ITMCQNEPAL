//get all question
export const getAllQuestion = (subject)=> {

 return fetch(`http://locahost:8000/getquestion/${subject}`)
    .then(data=>{
        return data.json()
    })
    .catch(err=>{
       return err.json()
    })

}

//post question to database
export const postQuestion = ()=> {
    
}