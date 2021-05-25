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
export const postQuestion = (description,alternatives,category)=> {
//  console.log(question,category,alternatives);
    return fetch(`http://localhost:8000/api/createquestion`,{
        method:"POST",
    headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
    },
        body:JSON.stringify({description,alternatives,category})
    }).then(response=>
        {
            console.log(response);
       return response.json()
         
        })
    .catch(err=>
        {
            console.log(err);

            return err
        }
        )
}